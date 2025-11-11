import React from "react"
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";


const BlogCTA = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);



    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
    }

return (

    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto mb-10">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-amber-600 text-xl" />
            </div>
            
            <h3 className="md:text-3xl text-xl font-bold text-white mb-4">
              Stay Updated with Market Insights
            </h3>
            
            <p className="text-white mb-8 max-w-md mx-auto font-light">
              Get the latest property trends, investment opportunities, and expert advice delivered to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                Thank you for subscribing! Check your email for confirmation.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-xs text-gray-500 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
   );

};

export default BlogCTA