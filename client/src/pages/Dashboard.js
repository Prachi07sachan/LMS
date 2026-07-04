import { useEffect, useState } from "react";

import {
  getUsers,
  getCourses,
  getPayments,
  getCoupons
} from "../services/dashboardService";

function Dashboard() {

  const [counts, setCounts] = useState({
    users: 0,
    courses: 0,
    payments: 0,
    coupons: 0
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
        coupons: coupons.data.length
      });

    }

    loadData();

  }, []);

  return (

    <div className="container mt-4">

      <h2>Dashboard</h2>

      <div className="row">

        <div className="col-md-3">

          <div className="card text-center p-4">

            <h5>Total Users</h5>

            <h1>{counts.users}</h1>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card text-center p-4">

            <h5>Total Courses</h5>

            <h1>{counts.courses}</h1>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card text-center p-4">

            <h5>Total Payments</h5>

            <h1>{counts.payments}</h1>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card text-center p-4">

            <h5>Total Coupons</h5>

            <h1>{counts.coupons}</h1>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;