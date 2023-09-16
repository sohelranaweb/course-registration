import PropTypes from "prop-types";
const Cart = ({ selectedCourse, price, credit, remainingCredit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-lg font-bold text-[#2F80ED] border-b-2 py-2">
        Credit Hour Remaining {remainingCredit}hr
      </h1>
      <div className="border-b-2 py-2">
        <h1 className="text-xl font-bold py-4">Course Name</h1>
        <h1>Course No: {selectedCourse.length}</h1>
        <ol className="list-decimal">
          {selectedCourse.map((course) => (
            <li key={course.id}>{course.title}</li>
          ))}
        </ol>
      </div>
      <h1 className="text-base font-medium border-b-2 py-3  ">
        Total Credit Hour: {credit}hr
      </h1>
      <h1 className="text-base font-medium py-3">Total Price: {price} USD</h1>
    </div>
  );
};
Cart.propTypes = {
  selectedCourse: PropTypes.array,
};
export default Cart;
