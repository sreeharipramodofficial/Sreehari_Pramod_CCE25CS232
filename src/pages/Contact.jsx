
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Remove error when user starts correcting the field
    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccess("");
  };


  // Validate form
  const validateForm = () => {

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (
      !/^[0-9]{10}$/.test(formData.phone)
    ) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };


  // Handle form submission
  const handleSubmit = (event) => {

    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

      return;
    }

    setErrors({});

    setSuccess(
      "Your enquiry has been submitted successfully."
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };


  return (
    <main className="contact-page">

      {/* ==============================
          CONTACT INTRO
      ============================== */}

      <section className="contact-intro">

        <p className="section-label">
          GET IN TOUCH
        </p>

        <h1>
          Contact Me
        </h1>

        <p>
          Have a question, project idea, or enquiry?
          Feel free to send me a message using the form below.
        </p>

      </section>


      {/* ==============================
          CONTACT FORM
      ============================== */}


      <section className="contact-section">

        <div className="contact-card">

          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <p className="form-error">
                  {errors.name}
                </p>
              )}

            </div>


            {/* Email */}

            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <p className="form-error">
                  {errors.email}
                </p>
              )}

            </div>


            {/* Phone */}

            <div className="form-group">

              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your 10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              {errors.phone && (
                <p className="form-error">
                  {errors.phone}
                </p>
              )}

            </div>


            {/* Subject */}

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                value={formData.subject}
                onChange={handleChange}
              />

              {errors.subject && (
                <p className="form-error">
                  {errors.subject}
                </p>
              )}

            </div>


            {/* Message */}

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
              />

              {errors.message && (
                <p className="form-error">
                  {errors.message}
                </p>
              )}

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="submit-btn"
            >
              Send Enquiry
            </button>


            {/* Success Message */}

            {success && (
              <p className="form-success">
                {success}
              </p>
            )}

          </form>

        </div>

      </section>

    </main>
  );
}

export default Contact;