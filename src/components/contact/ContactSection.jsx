import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaCalendarAlt,
  FaArrowRight
} from 'react-icons/fa';

const ContactSection = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    location: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      content: "New Garden Estate Road, 2nd Mugumoini Drive, House No.11, Nairobi, Kenya"
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+254 717 112 222"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "info@legacyestates.co.ke"
    },
    {
      icon: FaClock,
      title: "Working Hours",
      content: "Mon-Fri: 8:30AM – 5:30PM\nSat: 9:00AM – 2:00PM\nSun: Closed"
    }
  ];

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingForm),
      });
  
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
  
      alert("Your booking request has been sent successfully!");
      setShowBookingForm(false);
      setBookingForm({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        location: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert(err.message || "Submission failed. Please try again.");
    }
  };
  

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-8 h-8 text-amber-300">
                  <item.icon className="text-lg" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Site Visit Booking */}
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaCalendarAlt className="text-amber-300 text-lg" />
                <h3 className="font-medium text-gray-900">
                  Book a Free Site Visit
                </h3>
              </div>
              
              <p className="text-gary-600 text-sm mb-6 leading-relaxed">
                Complimentary site visits for all potential buyers. Tell us your preferred day.
              </p>

              <button
                onClick={() => setShowBookingForm(true)}
                className="group w-full border border-amber-300 text-amber-300 font-medium py-3 px-4 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Book Visit</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-900 mb-3">
                Ready to own land?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Secure your titled plot today, build your legacy.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="flex-1 bg-amber-300 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-amber-700"
                >
                  Book Visit
                </button>
                <a
                  href="tel:+254717112222"
                  className="flex-1 border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200 hover:border-amber-600 hover:text-amber-600"
                >
                  Call Agent
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Book Site Visit</h3>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Booking Form Modal */}
{showBookingForm && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-xl max-w-md w-full shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-amber-500 text-sm" />
          <h3 className="font-semibold text-gray-900">Book Site Visit</h3>
        </div>
        <button
          onClick={() => setShowBookingForm(false)}
          className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
        >
          ✕
        </button>
      </div>

      {/* Form */}
              <form onSubmit={handleBookingSubmit} className="p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                    className="col-span-2 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                  
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                    className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                  
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                    className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    required
                    value={bookingForm.preferredDate}
                    onChange={(e) => setBookingForm({...bookingForm, preferredDate: e.target.value})}
                    className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  />
                  
                  <select
                    required
                    value={bookingForm.location}
                    onChange={(e) => setBookingForm({...bookingForm, location: e.target.value})}
                    className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  >
                    <option value="">Location</option>
                    <option value="ruiru">Ruiru</option>
                    <option value="kitengela">Kitengela</option>
                    <option value="juja">Juja</option>
                    <option value="ongata-rongai">Ongata Rongai</option>
                  </select>
                </div>

                <textarea
                  placeholder="Additional message (optional)"
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                  rows="2"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 hover:bg-amber-600 hover:shadow-lg active:scale-95"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;