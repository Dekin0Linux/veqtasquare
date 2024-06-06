"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "sonner";

function Contact() {
    const [loading,setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const response = await axios.post('/api/sendMail', formData);
      console.log(response);
      if (response.data.success) {
        setLoading(false)
        toast.success('Email sent successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send email.');
        toast.warning('Failed to send email.')
        setLoading(false)
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error sending email.')
      setLoading(false)
    }
  };
  return (
    <div className="my-10">
      <div className="container mx-auto md:flex p-5  items-center">
        <div className="flex-1">
          <p clasName="text-blue-400">Contact Us </p>
          <div>
            <p className="mb-3 text-gray-400">
              Feel free to reach out to us using the following contact
              information:
            </p>
            <p className="mb-2">
              <strong>Email:</strong> business@veqtasquare.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +233 24 768 5717
            </p>
            <p>
              <strong>Address:</strong>Address 348 East Lake Rd. East Lego.
              Accra - Ghana
            </p>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 p-5 my-5 md:my-0">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div className="my-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  id="name"
                  className="w-full outline-0 p-3 rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="my-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  className="w-full outline-0 p-3 rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="my-2 col-span-2">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  id="subject"
                  className="w-full outline-0 p-3 rounded-md"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="my-2 col-span-2">
                <label htmlFor="message">Message</label>
                <textarea
                  className="w-full p-3 outline-0 rounded-md"
                  id="message"
                  rows="8"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 p-3 text-white rounded-md"
                disabled={loading}
              >
                {
                    loading ? 'Sending...' : 'Send'
                }
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
