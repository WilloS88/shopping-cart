import "./index.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import { AnchorsSection } from "./components/section/AnchorsSection";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <AnchorsSection />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
