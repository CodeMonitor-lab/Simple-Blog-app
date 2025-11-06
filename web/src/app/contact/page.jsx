import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* 🧠 Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact Me</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question, idea, or collaboration in mind?  
          I’d love to hear from you — let’s build something amazing together.
        </p>
      </div>

      {/* 📞 Contact Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* 📨 Contact Form */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Send a Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              <Send className="w-4 h-4 mr-2" /> Send Message
            </button>
          </form>
        </div>

        {/* 🗺️ Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">contact@johnysince.dev</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">Location</h3>
              <p className="text-gray-600">New Delhi, India</p>
            </div>
          </div>

          <div className="pt-6">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Contact illustration"
              className="rounded-xl shadow-md border border-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
