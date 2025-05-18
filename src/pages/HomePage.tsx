import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Target, Dumbbell, Users, Calendar } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover z-0" 
          style={{ 
            backgroundImage: "url('https://i.postimg.cc/bv5wPMZ3/Grunt-Works-Association-Compound-Vision.png?auto=compress&cs=tinysrgb&w=1600')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#182940] bg-opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-[#D6C7A9]">Veteran-Led</span> Excellence in Human Performance, Tactical Training, and Recreation.
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Empowering service members, veterans, and supporters through elite fitness, 
              firearms training, and community support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/training" 
                className="px-8 py-3 bg-[#2C5530] text-white rounded-md font-medium hover:bg-opacity-90 transition-all flex items-center"
              >
                Explore Training <ChevronRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/shop" 
                className="px-8 py-3 bg-transparent border-2 border-[#D6C7A9] text-[#D6C7A9] rounded-md font-medium hover:bg-[#D6C7A9] hover:text-[#182940] transition-all"
              >
                Shop Gear
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#182940]">Our Mission</h2>
            <div className="w-20 h-1 bg-[#2C5530] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Grunt Works Association is a veteran-led nonprofit organization dedicated to enhancing the lives of 
              United States military service members, veterans, their families, and supporters through elite fitness and 
              human performance programs, professional firearms and martial arts training, tactical consulting, outdoor 
              recreational initiatives, and unwavering community support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="text-[#2C5530]" size={48} />,
                title: "Firearms Training",
                description: "Professional-grade firearms instruction from experienced veterans and certified instructors."
              },
              {
                icon: <Dumbbell className="text-[#2C5530]" size={48} />,
                title: "Elite Fitness",
                description: "Specialized fitness programs designed for optimal human performance and military preparedness."
              },
              {
                icon: <Users className="text-[#2C5530]" size={48} />,
                title: "Community Support",
                description: "Building a brotherhood and sisterhood that provides purpose and belonging for all members."
              },
              {
                icon: <Calendar className="text-[#2C5530]" size={48} />,
                title: "Regular Events",
                description: "Ongoing training sessions, community gatherings, and outdoor recreational activities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="mb-4 inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#182940]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#182940]">Featured Gear</h2>
              <div className="w-20 h-1 bg-[#2C5530] mt-3"></div>
            </div>
            <Link 
              to="/shop" 
              className="text-[#2C5530] font-medium flex items-center hover:underline"
            >
              View All Products <ChevronRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "https://images.pexels.com/photos/6615186/pexels-photo-6615186.jpeg?auto=compress&cs=tinysrgb&w=1600",
                title: "GWA Training T-Shirt",
                price: "$29.99"
              },
              {
                img: "https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg?auto=compress&cs=tinysrgb&w=1600",
                title: "Tactical Cap",
                price: "$24.99"
              },
              {
                img: "https://images.pexels.com/photos/6690583/pexels-photo-6690583.jpeg?auto=compress&cs=tinysrgb&w=1600",
                title: "GWA Water Bottle",
                price: "$19.99"
              },
              {
                img: "https://images.pexels.com/photos/6045024/pexels-photo-6045024.jpeg?auto=compress&cs=tinysrgb&w=1600",
                title: "Fitness Journal",
                price: "$15.99"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-lg overflow-hidden aspect-square relative">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <button className="bg-[#2C5530] text-white px-4 py-2 rounded-md transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-[#182940]">{product.title}</h3>
                  <p className="text-gray-700 font-bold mt-1">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-[#182940] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
              <div className="w-20 h-1 bg-[#D6C7A9] mt-3"></div>
            </div>
            <Link 
              to="/calendar" 
              className="text-[#D6C7A9] font-medium flex items-center hover:underline"
            >
              View Full Calendar <ChevronRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "Jun 15",
                title: "Fundamentals of Marksmanship",
                time: "9:00 AM - 5:00 PM",
                location: "Veteran's Range, Austin TX"
              },
              {
                date: "Jun 22",
                title: "Elite Fitness Boot Camp",
                time: "7:00 AM - 9:00 AM",
                location: "Memorial Park, Houston TX"
              },
              {
                date: "Jul 4",
                title: "Veterans Community BBQ",
                time: "12:00 PM - 5:00 PM",
                location: "Freedom Park, Dallas TX"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1E3555] rounded-lg p-6 hover:transform hover:scale-105 transition-all"
              >
                <div className="flex items-start">
                  <div className="bg-[#D6C7A9] text-[#182940] font-bold py-2 px-4 rounded text-center min-w-16">
                    <span className="block text-2xl">{event.date.split(" ")[0]}</span>
                    <span className="block text-sm">{event.date.split(" ")[1]}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <p className="text-gray-300 mt-1">{event.time}</p>
                    <p className="text-gray-300 mt-1">{event.location}</p>
                    <Link 
                      to={`/calendar/${index}`} 
                      className="inline-block mt-3 text-[#D6C7A9] hover:underline"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-cover bg-center relative" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}>
        <div className="absolute inset-0 bg-[#182940] bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Join Our Community?</h2>
              <p className="text-lg text-gray-200 mb-8">
                Whether you're a veteran, active service member, or supporter, 
                we welcome you to join our community and participate in our programs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/register" 
                  className="px-8 py-3 bg-[#2C5530] text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
                >
                  Become a Member
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-transparent border-2 border-[#D6C7A9] text-[#D6C7A9] rounded-md font-medium hover:bg-[#D6C7A9] hover:text-[#182940] transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
