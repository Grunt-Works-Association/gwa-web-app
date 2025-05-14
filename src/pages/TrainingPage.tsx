import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Dumbbell, Shield, ChevronRight, Users, Award } from 'lucide-react';

const TrainingPage: React.FC = () => {
  const programs = [
    {
      id: 'firearms',
      title: 'Firearms Training',
      description: 'Professional firearms instruction for all skill levels, from basic safety to advanced tactical training.',
      icon: <Target size={40} className="text-[#D6C7A9]" />,
      image: 'https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?auto=compress&cs=tinysrgb&w=1600',
      courses: [
        { title: 'Fundamentals of Marksmanship', level: 'Beginner', duration: '1 Day' },
        { title: 'Defensive Pistol', level: 'Intermediate', duration: '2 Days' },
        { title: 'Tactical Rifle', level: 'Advanced', duration: '3 Days' },
        { title: 'Concealed Carry', level: 'All Levels', duration: '1 Day' }
      ]
    },
    {
      id: 'fitness',
      title: 'Elite Fitness',
      description: 'Military-inspired fitness programs that build strength, endurance, and mental toughness.',
      icon: <Dumbbell size={40} className="text-[#D6C7A9]" />,
      image: 'https://images.pexels.com/photos/6823334/pexels-photo-6823334.jpeg?auto=compress&cs=tinysrgb&w=1600',
      courses: [
        { title: 'Combat Conditioning', level: 'All Levels', duration: 'Ongoing' },
        { title: 'Ruck Training', level: 'Intermediate', duration: 'Ongoing' },
        { title: 'Military PT Prep', level: 'All Levels', duration: '8 Weeks' },
        { title: 'Tactical Athlete Program', level: 'Advanced', duration: '12 Weeks' }
      ]
    },
    {
      id: 'tactical',
      title: 'Tactical Training',
      description: 'Comprehensive tactical skills development taught by experienced military and law enforcement veterans.',
      icon: <Shield size={40} className="text-[#D6C7A9]" />,
      image: 'https://images.pexels.com/photos/16014866/pexels-photo-16014866/free-photo-of-equipment-of-navy-seal.jpeg?auto=compress&cs=tinysrgb&w=1600',
      courses: [
        { title: 'Close Quarters Combat', level: 'Intermediate', duration: '2 Days' },
        { title: 'Vehicle Defense', level: 'Intermediate', duration: '1 Day' },
        { title: 'Team Tactics', level: 'Advanced', duration: '3 Days' },
        { title: 'Night Operations', level: 'Advanced', duration: '2 Days' }
      ]
    }
  ];

  return (
    <div className="pt-20 pb-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-center bg-cover" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/9866255/pexels-photo-9866255.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}>
        <div className="absolute inset-0 bg-[#182940] bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Programs</h1>
            <div className="w-20 h-1 bg-[#D6C7A9] mx-auto mb-6"></div>
            <p className="text-xl mb-8">
              Expert-led training programs for firearms proficiency, elite fitness, and tactical skills, 
              taught by veterans with real-world experience.
            </p>
            <a 
              href="#programs" 
              className="px-8 py-3 bg-[#2C5530] text-white rounded-md font-medium hover:bg-opacity-90 transition-all inline-block"
            >
              Explore Programs
            </a>
          </motion.div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#182940]">Our Training Philosophy</h2>
            <div className="w-20 h-1 bg-[#2C5530] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              At Grunt Works Association, we believe in practical, real-world training that builds 
              competence and confidence. Our programs are designed by veterans for veterans and civilians 
              alike, emphasizing safety, skill development, and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Award className="text-[#2C5530]" size={36} />,
                title: "Expert Instruction",
                description: "All courses are taught by certified instructors with military, law enforcement, or competition backgrounds."
              },
              {
                icon: <Users className="text-[#2C5530]" size={36} />,
                title: "Community Focus",
                description: "Training takes place in a supportive environment where everyone can learn and improve together."
              },
              {
                icon: <Shield className="text-[#2C5530]" size={36} />,
                title: "Safety First",
                description: "Rigorous safety protocols and standards are maintained throughout all training programs."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#182940]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#182940] text-center">Our Training Programs</h2>
          
          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center mb-4">
                    {program.icon}
                    <h3 className="text-2xl font-bold ml-3 text-[#182940]">{program.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h4 className="text-lg font-bold mb-4 text-[#182940]">Available Courses:</h4>
                    <ul className="space-y-3">
                      {program.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="font-medium">{course.title}</span>
                          <div className="flex items-center">
                            <span className="text-sm bg-gray-100 px-2 py-1 rounded mr-2">{course.level}</span>
                            <span className="text-sm text-gray-500">{course.duration}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/training/${program.id}`} 
                    className="inline-flex items-center px-6 py-3 bg-[#2C5530] text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
                  >
                    Learn More <ChevronRight size={20} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#182940] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Members Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "The firearms training I received at GWA was top-notch. The instructors are true professionals who know how to teach effectively while maintaining a supportive environment.",
                name: "Michael R.",
                role: "Marine Corps Veteran"
              },
              {
                text: "As someone with no military background, I was nervous about joining the fitness program. The team made me feel welcome from day one, and I've seen incredible improvements in my strength and endurance.",
                name: "Sarah T.",
                role: "Civilian Member"
              },
              {
                text: "The tactical training provided by GWA is as close to the real thing as you can get in civilian training. Their attention to detail and focus on practical applications sets them apart.",
                name: "David K.",
                role: "Law Enforcement Officer"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1E3555] p-6 rounded-lg"
              >
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#182940]">Ready to Start Training?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our community of veterans and civilians committed to excellence in firearms, 
              fitness, and tactical training.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/calendar" 
                className="px-8 py-3 bg-[#2C5530] text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                View Training Calendar
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-transparent border-2 border-[#182940] text-[#182940] rounded-md font-medium hover:bg-gray-100 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;