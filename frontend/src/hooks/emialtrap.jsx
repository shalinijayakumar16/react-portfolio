import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      subject: e.target.from_name.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("✅ Successfully sent!", {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
        });
        e.target.reset();
      } else {
        toast.error("❌ Failed to send email", {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error("⚠️ Error connecting to server", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="top">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <div className="middle">
          <input type="text" name="from_name" placeholder="Subject" required />
        </div>
        <div className="bottom">
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>
        <div className="button">
          <input type="submit" value="Send Message" />
        </div>
      </form>
      <ToastContainer />
    </>
  );
};
