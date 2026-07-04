import { useEffect, useState } from "react";
import {
  getUsers,
  addUser,
  deleteUser,
} from "../services/userService";

function Users() {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addUser(form);

    setForm({
      name: "",
      email: "",
      role: "",
    });

    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="container mt-4">

      <h2>User Management</h2>

      <form onSubmit={handleSubmit} className="mb-4">

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Role"
          name="role"
          value={form.role}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Add User
        </button>

      </form>

      <table className="table table-bordered">

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user._id}>

              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user._id)}
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

export default Users;

