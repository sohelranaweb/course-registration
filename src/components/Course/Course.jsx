import PropTypes from "prop-types";
import { FaDollarSign, FaBookOpen } from "react-icons/fa";
const Course = ({ course }) => {
  const { cover_img, title, description, price, credit } = course;
  return (
    <div className="w-[305px] h-[410px] shadow-sm rounded-lg bg-white p-4 space-y-4">
      <img src={cover_img} alt="" />
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm font-normal text-[#1C1B1B99]">{description}</p>
      <div className="flex justify-between items-center">
        <p className=" text-[#1C1B1B99] flex items-center">
          <button className="w-6 h-6 mr-1">
            <FaDollarSign></FaDollarSign>
          </button>
          <small className="text-base font-medium">Price: {price}</small>
        </p>
        <p className=" text-[#1C1B1B99] flex items-center">
          <button className="w-6 h-6 mr-1">
            <FaBookOpen></FaBookOpen>
          </button>
          <small className="text-base font-medium">Credit: {credit}hr</small>
        </p>
      </div>
      <button className="bg-[#2F80ED] text-white text-lg font-semibold w-full py-2 rounded-lg">
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
};

export default Course;
