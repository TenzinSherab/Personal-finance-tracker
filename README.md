# viz-wallet

**viz-wallet** is a minimalist personal finance tracker that helps you manage your income, expenses, and savings with clarity. Built for ease of use, security, and modern web performance.

---

##  Features

-  User authentication (Supabase Auth)
-  Track income and expenses
-  Visual summaries and charts
-  Categorized transactions
-  Recurring payments
-  Export data (CSV)
-  Cloud-based storage via Supabase
-  Mobile-friendly UI

---

##  Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/viz-wallet.git
cd viz-wallet
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Set up environment variables 
Create a .env file in the root directory and add your Supabase credentials:
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4.Run the development server

```bash

npm run dev

```

### 5. Build for production

```bash

npm run build

```