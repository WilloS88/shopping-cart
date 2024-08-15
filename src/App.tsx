import "./index.css";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
