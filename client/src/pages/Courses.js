import { useEffect, useState } from "react";
import { getCourses, addCourse, deleteCourse,

 } from "../services/courseService";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: ""
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await getCourses();
    setCourses(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCourse(form);
    setForm({
      title: "",
      description: "",
      price: ""
    });
    fetchCourses();
  };

  const handleDelete = async (id) => {
  await deleteCourse(id);
  fetchCourses();
};

  return (
    <div className="container mt-4">
      <h2>Course Management</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          className="form-control mb-2"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          className="form-control mb-2"
          value={form.description}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="form-control mb-2"
          value={form.price}
          onChange={handleChange}
        />

        <button className="btn btn-primary">Add Course</button>
      </form>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>₹ {course.price}</td>
               <td>
    <button
      className="btn btn-danger btn-sm"
      onClick={() => handleDelete(course._id)}
    >
      Delete
    </button>
  </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;