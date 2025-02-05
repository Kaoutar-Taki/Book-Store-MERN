import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="font-primary mx-auto min-h-screen max-w-screen-2xl px-4 py-6">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default App;
