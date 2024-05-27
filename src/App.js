import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
      <div className="flex">
        <Navbar />
        <main className="grow">
          <Dashboard />
        </main>
      </div>
  );
}

export default App;
