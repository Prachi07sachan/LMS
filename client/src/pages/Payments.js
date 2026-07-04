import { useEffect, useState } from "react";
import { getPayments, addPayment } from "../services/paymentService";

function Payments() {
  const [payments, setPayments] = useState([]);

  const [form, setForm] = useState({
    studentName: "",
    courseName: "",
    amount: ""
  });

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    const res = await getPayments();
    setPayments(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addPayment(form);

    setForm({
      studentName: "",
      courseName: "",
      amount: ""
    });

    fetchPayments();
  };

  return (
    <div className="container mt-4">

      <h2>Payment Management</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          name="studentName"
          placeholder="Student Name"
          value={form.studentName}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="courseName"
          placeholder="Course Name"
          value={form.courseName}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Add Payment
        </button>

      </form>

      <table className="table table-bordered mt-3">

        <thead>
          <tr>
            <th>Student</th>
            <th>Course</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>

          {payments.map((payment) => (
            <tr key={payment._id}>
              <td>{payment.studentName}</td>
              <td>{payment.courseName}</td>
              <td>₹ {payment.amount}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Payments;