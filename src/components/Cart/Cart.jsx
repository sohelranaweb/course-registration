const Cart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-lg font-bold text-[#2F80ED] border-b-2 py-2">
        Credit Hour Remaining
      </h1>
      <div className="border-b-2 py-2">
        <h1 className="text-xl font-bold py-4">Course Name</h1>
      </div>
      <h1 className="text-base font-medium border-b-2 py-3  ">
        Total Credit Hour:
      </h1>
      <h1 className="text-base font-medium py-3">Total Price: </h1>
    </div>
  );
};

export default Cart;
