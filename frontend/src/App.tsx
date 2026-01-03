import { Routes, Route} from "react-router-dom"
import { Toaster } from "sonner"
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/Intruder"
import FeedPage from "./pages/FeedPage"
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </>
  )
}

export default App
