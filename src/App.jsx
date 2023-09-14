import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="flex gap-6">
        <div className="w-3/4">
          <Courses></Courses>
        </div>
        <div className="w-1/4">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
