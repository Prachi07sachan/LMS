import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Courses from "./pages/Courses";
import Payments from "./pages/Payments";
import Coupons from "./pages/Coupons";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/coupons" element={<Coupons />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Courses from "./pages/Courses";
// import Payments from "./pages/Payments";
// import Coupons from "./pages/Coupons";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />
      

//       <Routes>

//         <Route path="/" element={<Dashboard />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/payments" element={<Payments />} />
//         <Route path="/coupons" element={<Coupons />} />

//       </Routes>
//       <Footer />

//     </BrowserRouter>
//   );
// }

// export default App;