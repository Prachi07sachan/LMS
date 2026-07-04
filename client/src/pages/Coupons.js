import { useEffect, useState } from "react";
import { getCoupons, addCoupon } from "../services/couponService";

function Coupons() {
  const [coupons, setCoupons] = useState([]);

  const [form, setForm] = useState({
    code: "",
    discount: ""
  });

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    const res = await getCoupons();
    setCoupons(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addCoupon(form);

    setForm({
      code: "",
      discount: ""
    });

    fetchCoupons();
  };

  return (
    <div className="container mt-4">

      <h2>Coupon Management</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          name="code"
          placeholder="Coupon Code"
          value={form.code}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="discount"
          placeholder="Discount %"
          value={form.discount}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Add Coupon
        </button>

      </form>

      <table className="table table-bordered mt-3">

        <thead>
          <tr>
            <th>Coupon Code</th>
            <th>Discount</th>
          </tr>
        </thead>

        <tbody>

          {coupons.map((coupon) => (
            <tr key={coupon._id}>
              <td>{coupon.code}</td>
              <td>{coupon.discount}%</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Coupons;