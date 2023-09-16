import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [price, setPrice] = useState(0);
  const [credit, setCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(0);
  const selectedNotify = () => toast("This course is already added");
  const creditNotify = () =>
    toast("Do not select course because you have not credit");

  const handleAddToCourse = (course) => {
    const isExist = selectedCourse.find((item) => item.id === course.id);
    const initialCredit = 20;
    if (isExist) {
      selectedNotify();
    } else {
      const totalPrice = price + course.price;
      const totalCredit = credit + course.credit;
      const totalRemainigCredit = initialCredit - totalCredit;
      if (totalRemainigCredit < 0) {
        creditNotify();
      } else {
        setRemainingCredit(totalRemainigCredit);
        setCredit(totalCredit);
        setPrice(totalPrice);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  };
  return (
    <div className="lg:max-w-7xl lg:mx-auto m-0 p-">
      <Header></Header>
      <div className="flex lg:flex-row flex-col gap-6">
        <div className="w-3/4">
          <Courses handleAddToCourse={handleAddToCourse}></Courses>
        </div>
        <div className="w-1/4">
          <Cart
            selectedCourse={selectedCourse}
            price={price}
            credit={credit}
            remainingCredit={remainingCredit}
          ></Cart>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
