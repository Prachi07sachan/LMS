import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{
        background: "linear-gradient(90deg, #2563eb, #1e3a8a)",
        padding: "12px 30px",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <Link className="navbar-brand fw-bold text-white fs-3 m-0" to="/">
          <i className="bi bi-mortarboard-fill me-2"></i>
          Learning Management System
        </Link>

        <div className="navbar-nav d-flex flex-row">

          <Link
            className={`nav-link text-white px-3 ${
              location.pathname === "/" ? "fw-bold" : ""
            }`}
            to="/"
          >
            <i className="bi bi-speedometer2 me-1"></i>
            Dashboard
          </Link>

          <Link
            className={`nav-link text-white px-3 ${
              location.pathname === "/users" ? "fw-bold" : ""
            }`}
            to="/users"
          >
            <i className="bi bi-people-fill me-1"></i>
            Users
          </Link>

          <Link
            className={`nav-link text-white px-3 ${
              location.pathname === "/courses" ? "fw-bold" : ""
            }`}
            to="/courses"
          >
            <i className="bi bi-book-fill me-1"></i>
            Courses
          </Link>

          <Link
            className={`nav-link text-white px-3 ${
              location.pathname === "/payments" ? "fw-bold" : ""
            }`}
            to="/payments"
          >
            <i className="bi bi-credit-card-fill me-1"></i>
            Payments
          </Link>

          <Link
            className={`nav-link text-white px-3 ${
              location.pathname === "/coupons" ? "fw-bold" : ""
            }`}
            to="/coupons"
          >
            <i className="bi bi-ticket-perforated-fill me-1"></i>
            Coupons
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
// import { Link, useLocation } from "react-router-dom";

// function Navbar() {
//   const location = useLocation();

//   return (
//     <nav
//       className="navbar navbar-expand-lg shadow"
//       style={{
//         background: "linear-gradient(90deg, #2563eb, #1e3a8a)",
//       }}
//     >
//       <div className="container">

//         <Link className="navbar-brand fw-bold text-white fs-4" to="/">
//           <i className="bi bi-mortarboard-fill me-2"></i>
//           Learning Management System
//         </Link>

//         <div className="navbar-nav ms-auto">

//           <Link
//             className={`nav-link text-white mx-2 ${
//               location.pathname === "/" ? "fw-bold" : ""
//             }`}
//             to="/"
//           >
//             <i className="bi bi-speedometer2 me-1"></i>
//             Dashboard
//           </Link>

//           <Link
//             className={`nav-link text-white mx-2 ${
//               location.pathname === "/users" ? "fw-bold" : ""
//             }`}
//             to="/users"
//           >
//             <i className="bi bi-people-fill me-1"></i>
//             Users
//           </Link>

//           <Link
//             className={`nav-link text-white mx-2 ${
//               location.pathname === "/courses" ? "fw-bold" : ""
//             }`}
//             to="/courses"
//           >
//             <i className="bi bi-book-fill me-1"></i>
//             Courses
//           </Link>

//           <Link
//             className={`nav-link text-white mx-2 ${
//               location.pathname === "/payments" ? "fw-bold" : ""
//             }`}
//             to="/payments"
//           >
//             <i className="bi bi-credit-card-fill me-1"></i>
//             Payments
//           </Link>

//           <Link
//             className={`nav-link text-white mx-2 ${
//               location.pathname === "/coupons" ? "fw-bold" : ""
//             }`}
//             to="/coupons"
//           >
//             <i className="bi bi-ticket-perforated-fill me-1"></i>
//             Coupons
//           </Link>

//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// // import { Link } from "react-router-dom";

// // function Navbar() {
// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// //       <div className="container">

// //         <Link className="navbar-brand" to="/">
// //           Learning Management Systems
// //         </Link>

// //         <div className="navbar-nav">

// //           <Link className="nav-link" to="/">
// //             Dashboard
// //           </Link>

// //           <Link className="nav-link" to="/users">
// //             Users
// //           </Link>

// //           <Link className="nav-link" to="/courses">
// //             Courses
// //           </Link>

// //           <Link className="nav-link" to="/payments">
// //             Payments
// //           </Link>

// //           <Link className="nav-link" to="/coupons">
// //             Coupons
// //           </Link>

// //         </div>

// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;