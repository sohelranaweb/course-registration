const Course = ({ course }) => {
  const { cover_img, title, description, price, credit } = course;
  return (
    <div className="w-[300px] h-[400px] shadow-sm rounded-md bg-white p-4">
      <img src={cover_img} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Course;
