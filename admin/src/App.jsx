import './App.css'
import AdminRoutes from '@/Routes/AdminRoutes'
import { Analytics } from '@vercel/analytics/next';

function App() {
  return (
    <>
    <AdminRoutes/>
    <Analytics/>
    </>
  )
}

export default App
