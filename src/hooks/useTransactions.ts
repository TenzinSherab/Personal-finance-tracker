import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export interface Transaction {
  id: string
  user_id: string
  type: 'income' | 'expense'
  amount: number
  category: string
  description: string
  date: string
  created_at: string
}

export const useTransactions = (userId: string | undefined) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    if (userId) {
      fetchTransactions()
    }
  }, [userId])

  const fetchTransactions = async () => {
    if (!userId) return

    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error
      setTransactions(data || [])
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch transactions: " + error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const addTransaction = async (transaction: Omit<Transaction, 'id' | 'user_id' | 'created_at'>) => {
    if (!userId) return

    try {

      const { data, error } = await supabase
        .from('transactions')
        .insert([{ ...transaction, user_id: userId }])
        .select()
        .single()

      if (error) throw error

      setTransactions(prev => [data, ...prev])
      toast({
        title: "Success!",
        description: "Transaction added successfully.",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to add transaction: " + error.message,
        variant: "destructive",
      })
    }
  }

  const deleteTransaction = async (id: string) => {
    try {
      const { error } = await supabase
        .from('transactions')
        .delete()
        .eq('id', id)

      if (error) throw error

      setTransactions(prev => prev.filter(t => t.id !== id))
      toast({
        title: "Success!",
        description: "Transaction deleted successfully.",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete transaction: " + error.message,
        variant: "destructive",
      })
    }
  }

  // Calculate totals
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpenses

  return {
    transactions,
    loading,
    addTransaction,
    deleteTransaction,
    totalIncome,
    totalExpenses,
    balance,
    refetch: fetchTransactions
  }
}