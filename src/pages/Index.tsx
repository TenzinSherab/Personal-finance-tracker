import Dashboard from "@/components/Dashboard";
import AuthForm from "@/components/AuthForm";
import ThemeToggle from "@/components/ThemeToggle";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, loading } = useAuth();

  const handleAuth = () => {
    // Auth is now handled by the useAuth hook
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ThemeToggle />
      {user ? (
        <Dashboard />
      ) : (
        <AuthForm onAuth={handleAuth} />
      )}
    </>
  );
};

export default Index;
