"use client";

import * as React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiInstagram, SiWhatsapp, SiGmail } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS (do this once when component mounts)
  React.useEffect(() => {
    emailjs.init(
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          to_email: "sivito1407@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <SiInstagram className="w-8 h-8" />,
      label: "Instagram",
      value: "@terlihatvito",
      link: "https://instagram.com/terlihatvito",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <SiWhatsapp className="w-8 h-8" />,
      label: "WhatsApp",
      value: "Vito Megataruna",
      link: "https://wa.me/6285647987710",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <SiGmail className="w-8 h-8" />,
      label: "Email",
      value: "sivito1407@gmail.com",
      link: "mailto:sivito1407@gmail.com",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-4 bg-white">
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-alt mb-3">
            Get in Touch
          </h2>
          <p className="text-secondary text-lg md:text-xl">
            Let&apos;s connect and discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <p className="text-secondary text-lg leading-relaxed">
              Have a question or project in mind? I&apos;d love to hear from
              you. Reach out through any of these channels, and I&apos;ll get
              back to you as soon as possible.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-primary-alt/20 hover:border-primary-alt/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div
                    className={`bg-gradient-to-br ${info.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-alt text-sm">
                      {info.label}
                    </p>
                    <p className="text-secondary hover:text-primary-alt transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-primary/10 to-primary-alt/10 rounded-lg p-8 border border-primary-alt/20">
            <h3 className="text-2xl font-bold text-secondary-alt mb-6">
              Send me a Message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg">
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-secondary-alt mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-primary-alt/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200 bg-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-secondary-alt mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-primary-alt/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200 bg-white"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-secondary-alt mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-primary-alt/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200 bg-white resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-alt text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            <p className="text-xs text-secondary mt-4 text-center">
              I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
