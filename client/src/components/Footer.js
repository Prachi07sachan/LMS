function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #2563eb, #1e3a8a)",
        color: "#fff",
        padding: "18px 0",
        marginTop: "100px",
        textAlign: "center",
        boxShadow: "0 -3px 10px rgba(0,0,0,0.15)",
      }}
    >
      <div className="container">
        <h5 className="fw-bold mb-2">
          <i className="bi bi-mortarboard-fill me-2"></i>
          Learning Management System
        </h5>

        <p className="mb-0">
          © 2026 Learning Management System | MERN Stack Project
        </p>
      </div>
    </footer>
  );
}

export default Footer;