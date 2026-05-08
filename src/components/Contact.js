import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.firstName}! Your message has been sent.`);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="comments"
              className="form-control"
              rows="4"
              placeholder="Comments"
              value={formData.comments}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
