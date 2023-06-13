import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ToDoListPage from "./Pages/ToDoListPage/ToDoListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ToDoListPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
