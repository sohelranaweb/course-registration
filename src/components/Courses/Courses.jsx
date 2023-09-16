import PropTypes from "prop-types";
import { useState } from "react";
import "./Courses.css";
import { useEffect } from "react";
import Course from "../Course/Course";
const Courses = ({ handleAddToCourse }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleAddToCourse={handleAddToCourse}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleAddToCourse: PropTypes.func,
};
export default Courses;
