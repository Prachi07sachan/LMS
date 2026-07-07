import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getUsers,
  getCourses,
  getPayments,
  getCoupons,
} from "../services/dashboardService";

function Dashboard() {
  const [counts, setCounts] = useState({
    users: 0,
    courses: 0,
    payments: 0,
    coupons: 0,
  });

  useEffect(() => {
    async function loadData() {
      const users = await getUsers();
      const courses = await getCourses();
      const payments = await getPayments();
      const coupons = await getCoupons();

      setCounts({
        users: users.data.length,
        courses: courses.data.length,
        payments: payments.data.length,
        coupons: coupons.data.length,
      });
    }

    loadData();
  }, []);

  return (
    <div className="container mt-4">

      {/* Welcome Banner */}
      <div
        className="p-4 mb-4 text-white rounded shadow"
        style={{
          background: "linear-gradient(90deg,#2563eb,#1e3a8a)",
        }}
      >
        <h2 className="fw-bold">
          <i className="bi bi-speedometer2 me-2"></i>
          Dashboard
        </h2>

        <p className="mb-0">
          Welcome to the Learning Management System.
          <br />
          Manage Users, Courses, Payments and Coupons efficiently.
        </p>
      </div>

      <div className="row g-4">

        {/* Users */}
        <div className="col-md-3">
          <div
            className="card text-center text-white border-0 shadow h-100"
            style={{ background: "#2563eb", borderRadius: "15px" }}
          >
            <div className="card-body">
              <i className="bi bi-people-fill display-4"></i>
              <h5 className="mt-3">Total Users</h5>
              <h1 className="fw-bold">{counts.users}</h1>
              <Link to="/users" className="btn btn-light mt-3">
               View Users
              </Link>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="col-md-3">
          <div
            className="card text-center text-white border-0 shadow h-100"
            style={{ background: "#16a34a", borderRadius: "15px" }}
          >
            <div className="card-body">
              <i className="bi bi-book-fill display-4"></i>
              <h5 className="mt-3">Total Courses</h5>
              <h1 className="fw-bold">{counts.courses}</h1>
              <Link to="/courses" className="btn btn-light mt-3">
              View Courses
             </Link>
            </div>
          </div>
        </div>

        {/* Payments */}
        <div className="col-md-3">
          <div
            className="card text-center text-white border-0 shadow h-100"
            style={{ background: "#ea580c", borderRadius: "15px" }}
          >
            <div className="card-body">
              <i className="bi bi-credit-card-fill display-4"></i>
              <h5 className="mt-3">Total Payments</h5>
              <h1 className="fw-bold">{counts.payments}</h1>
              <Link to="/payments" className="btn btn-light mt-3">
             View Payments
             </Link>
            </div>
          </div>
        </div>

        {/* Coupons */}
        <div className="col-md-3">
          <div
            className="card text-center text-white border-0 shadow h-100"
            style={{ background: "#dc2626", borderRadius: "15px" }}
          >
            <div className="card-body">
              <i className="bi bi-ticket-perforated-fill display-4"></i>
              <h5 className="mt-3">Total Coupons</h5>
              <h1 className="fw-bold">{counts.coupons}</h1>
              <Link to="/coupons" className="btn btn-light mt-3">
              View Coupons
             </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
