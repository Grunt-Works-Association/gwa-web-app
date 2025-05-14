import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Here you would normally send the data to your backend or email service
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-center bg-cover" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/2451645/pexels-photo-2451645.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}>
        <div className="absolute inset-0 bg-[#182940] bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-[#D6C7A9] mx-auto mb-6"></div>
            <p className="text-xl">
              Have questions about our programs or want to get involved? 
              We're here to help. Reach out to our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#182940]">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Whether you have questions about our training programs, want to volunteer, 
                or need assistance with registration, our team is ready to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#2C5530] p-3 rounded-full text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#182940]">Email Us</h3>
                    <p className="text-gray-700">info@gruntworksassociation.org</p>
                    <p className="text-gray-600 text-sm mt-1">We respond to all messages within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2C5530] p-3 rounded-full text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#182940]">Call Us</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-gray-600 text-sm mt-1">Monday to Friday, 9AM to 5PM CT</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2C5530] p-3 rounded-full text-white mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#182940]">Visit Us</h3>
                    <p className="text-gray-700">123 Veteran Way, Austin, TX 78701</p>
                    <p className="text-gray-600 text-sm mt-1">Our headquarters and main training facility</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2C5530] p-3 rounded-full text-white mr-4">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#182940]">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#182940] hover:text-[#2C5530]">Facebook</a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#182940] hover:text-[#2C5530]">Instagram</a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#182940] hover:text-[#2C5530]">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#182940]">Training Locations</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Austin:</strong> Veteran's Range, 456 Training Rd
                  </li>
                  <li>
                    <strong>Houston:</strong> Memorial Park, 789 Fitness Blvd
                  </li>
                  <li>
                    <strong>Dallas:</strong> Freedom Park, 101 Patriot Ave
                  </li>
                  <li>
                    <strong>San Antonio:</strong> Tactical Training Center, 202 Combat Way
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-lg shadow-md"
            >
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-[#2C5530] p-4 rounded-full text-white inline-block mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#182940]">Message Sent!</h3>
                  <p className="text-gray-700 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        category: 'general'
                      });
                    }}
                    className="px-6 py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-[#182940]">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                          Inquiry Category *
                        </label>
                        <select
                          id="category"
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="training">Training Programs</option>
                          <option value="membership">Membership</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="donation">Donations</option>
                          <option value="shop">Shop/Merchandise</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-[#2C5530] border-gray-300 rounded focus:ring-[#2C5530]"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        I agree to the{' '}
                        <a href="/privacy" className="text-[#2C5530] hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 px-4 bg-[#2C5530] text-white rounded-md font-medium hover:bg-opacity-90 transition-all flex items-center justify-center"
                      >
                        <Send size={18} className="mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#182940]">Find Us</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            {/* Placeholder for a map - in a real implementation, you would integrate Google Maps or similar */}
            <div className="aspect-[21/9] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Embedded Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#182940] text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Do I need military experience to join your programs?",
                answer: "No, our programs are open to civilians as well as veterans and active-duty personnel. We welcome anyone who is dedicated to learning and respects the values of our organization."
              },
              {
                question: "What equipment do I need for the firearms training?",
                answer: "Basic requirements include your firearm, ammunition, eye and ear protection, and appropriate clothing. A detailed equipment list will be provided upon registration for specific courses."
              },
              {
                question: "How physically demanding are the fitness programs?",
                answer: "Our fitness programs range from beginner to advanced levels. Each program clearly states the physical requirements, and our instructors work with participants to ensure safe and appropriate training."
              },
              {
                question: "Do you offer discounts for veterans?",
                answer: "Yes, we offer discounted rates for veterans, active-duty military, law enforcement, and first responders. Please provide relevant ID or documentation when registering."
              },
              {
                question: "How can I volunteer with Grunt Works Association?",
                answer: "We welcome volunteers for various roles including event support, administrative assistance, and specialized training (if qualified). Please contact us through the form above to discuss opportunities."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-[#182940]">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;