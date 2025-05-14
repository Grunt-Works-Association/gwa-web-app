import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, MapPin, Clock, Users, Filter } from 'lucide-react';

// Simulated events data
const events = [
  {
    id: 1,
    title: "Fundamentals of Marksmanship",
    date: "June 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Veteran's Range, Austin TX",
    category: "Firearms",
    description: "A one-day course covering basic firearm safety, handling, and marksmanship principles. Suitable for beginners and those looking to refresh fundamentals.",
    availableSpots: 12,
    instructor: "David Washington"
  },
  {
    id: 2,
    title: "Elite Fitness Boot Camp",
    date: "June 22, 2025",
    time: "7:00 AM - 9:00 AM",
    location: "Memorial Park, Houston TX",
    category: "Fitness",
    description: "High-intensity workout focusing on military-style fitness, including bodyweight exercises, running, and team challenges.",
    availableSpots: 20,
    instructor: "James Wilson"
  },
  {
    id: 3,
    title: "Veterans Community BBQ",
    date: "July 4, 2025",
    time: "12:00 PM - 5:00 PM",
    location: "Freedom Park, Dallas TX",
    category: "Community",
    description: "Join us for our annual Independence Day celebration with food, games, and camaraderie. All veterans and their families are welcome.",
    availableSpots: "Unlimited",
    instructor: "GWA Team"
  },
  {
    id: 4,
    title: "Tactical Pistol Course",
    date: "July 12, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Tactical Training Center, San Antonio TX",
    category: "Firearms",
    description: "Intermediate-level training focusing on defensive pistol techniques, including drawing from concealment, moving while shooting, and multiple target engagement.",
    availableSpots: 8,
    instructor: "Robert Martinez"
  },
  {
    id: 5,
    title: "Ruck March Training",
    date: "July 19, 2025",
    time: "6:00 AM - 10:00 AM",
    location: "Greenbelt Trail, Austin TX",
    category: "Fitness",
    description: "Structured training session for improving rucking performance. Participants should bring their own ruck with 20-30lbs of weight.",
    availableSpots: 15,
    instructor: "Sarah Johnson"
  },
  {
    id: 6,
    title: "First Aid & Trauma Care",
    date: "July 26, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "GWA Training Center, Houston TX",
    category: "Medical",
    description: "Essential first aid skills with a focus on tactical emergency casualty care techniques relevant to outdoor and training environments.",
    availableSpots: 15,
    instructor: "Rebecca Miller"
  }
];

const categories = ["All", "Firearms", "Fitness", "Medical", "Community"];

const CalendarPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  
  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-center bg-cover" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/7869238/pexels-photo-7869238.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}>
        <div className="absolute inset-0 bg-[#182940] bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Training Calendar</h1>
            <div className="w-20 h-1 bg-[#D6C7A9] mx-auto mb-6"></div>
            <p className="text-xl">
              Browse upcoming training sessions, community events, and activities. 
              Register to secure your spot and join our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button 
              className="w-full py-3 px-4 bg-white border border-gray-300 rounded-md flex justify-between items-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="flex items-center text-[#182940]">
                <Filter size={18} className="mr-2" /> Filter Events
              </span>
              <ChevronRight 
                size={18} 
                className={`transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} 
              />
            </button>
            
            {isFilterOpen && (
              <div className="mt-2 p-4 bg-white border border-gray-300 rounded-md shadow-md">
                <h3 className="font-bold text-lg mb-3 text-[#182940]">Event Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category 
                          ? 'bg-[#2C5530] text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="font-bold text-xl mb-4 text-[#182940]">Event Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedCategory === category 
                        ? 'bg-[#2C5530] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-xl mb-4 text-[#182940]">Looking for Custom Training?</h3>
                <p className="text-gray-600 mb-4">
                  We offer private and group training sessions tailored to your specific needs.
                </p>
                <a 
                  href="/contact" 
                  className="block w-full py-2 px-4 bg-[#D6C7A9] text-[#182940] text-center rounded-md font-medium hover:bg-opacity-90 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-[#182940]">
                Upcoming Events
                <span className="ml-2 text-gray-500 text-lg font-normal">({filteredEvents.length})</span>
              </h2>
              
              <div className="flex space-x-2">
                <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
                  <Calendar size={20} />
                </button>
                <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            {filteredEvents.length > 0 ? (
              <div className="space-y-6">
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/4 bg-[#182940] text-white p-6 flex flex-col justify-center items-center text-center">
                        <div className="text-2xl font-bold">{event.date.split(",")[0]}</div>
                        <div className="text-lg">{event.date.split(",")[1]}</div>
                        <div className="mt-3 inline-block px-3 py-1 bg-[#2C5530] rounded-full text-sm">
                          {event.category}
                        </div>
                      </div>
                      
                      <div className="p-6 md:w-3/4">
                        <h3 className="text-xl font-bold mb-2 text-[#182940]">{event.title}</h3>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600">
                          <div className="flex items-center">
                            <Clock size={16} className="mr-2 text-[#2C5530]" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2 text-[#2C5530]" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Users size={16} className="mr-2 text-[#2C5530]" />
                            <span>Spots: {event.availableSpots}</span>
                          </div>
                        </div>
                        
                        {selectedEvent === event.id ? (
                          <div>
                            <p className="text-gray-700 mb-4">{event.description}</p>
                            <p className="text-gray-700 mb-4"><strong>Instructor:</strong> {event.instructor}</p>
                            <div className="flex justify-between items-center">
                              <button 
                                onClick={() => setSelectedEvent(null)}
                                className="text-[#2C5530] font-medium hover:underline"
                              >
                                Show Less
                              </button>
                              <button 
                                className="px-4 py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors"
                              >
                                Register Now
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-between items-center">
                            <button 
                              onClick={() => setSelectedEvent(event.id)}
                              className="text-[#2C5530] font-medium hover:underline"
                            >
                              View Details
                            </button>
                            <button 
                              className="px-4 py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors"
                            >
                              Register Now
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <Calendar size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-4">No events found in this category.</p>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="px-4 py-2 bg-[#2C5530] text-white rounded-md"
                >
                  View All Events
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Calendar Integration Section */}
      <section className="py-16 bg-[#182940] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated with Our Events</h2>
            <p className="text-lg mb-8">
              Never miss an event or training session. Subscribe to our calendar for automatic updates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors flex items-center">
                <Calendar size={20} className="mr-2" />
                Add to Google Calendar
              </button>
              <button className="px-6 py-3 bg-[#D6C7A9] text-[#182940] rounded-md hover:bg-opacity-90 transition-colors">
                Download iCal File
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;