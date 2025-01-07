import './Contact.css';
import React,{useState} from 'react';
import axios  from "axios";
export default function Contact(){
  const [formData,setFormData]=useState({name:"",phone:"",message:""})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/save-to-excel", formData);
      alert(response.data.message);
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <section id="contact" className="page-section contact-section">
      <h2>Contact Me</h2>
      <h4>Email: harichandanauncc@gmail.com</h4>
      <h4>Phone: 361-462-2750</h4>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
};
