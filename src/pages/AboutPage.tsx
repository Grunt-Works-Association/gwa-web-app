import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Flag } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-center bg-cover" style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}>
        <div className="absolute inset-0 bg-[#182940] bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <div className="w-20 h-1 bg-[#D6C7A9] mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Learn about our mission, our team, and how we're serving the veteran community through fitness, 
              training, and unwavering support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#182940]">Our Story</h2>
              <div className="w-20 h-1 bg-[#2C5530] mb-6"></div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Grunt Works Association was founded in 2020 by a group of combat veterans who recognized the need for continued camaraderie, 
                purpose, and skill development for those who have served. What began as informal training sessions among friends 
                quickly grew into a structured nonprofit dedicated to empowering the military and veteran community.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our founders' backgrounds span across elite military units, law enforcement, and professional training environments. 
                This diverse expertise informs our approach to providing top-tier training programs while maintaining the brotherhood 
                and sisterhood that is often missed after leaving military service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, the Grunt Works Association serves hundreds of veterans, active-duty personnel, and supporters across 
                the country, offering specialized training programs, community events, and a sense of belonging that extends 
                beyond the battlefield.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-5 -top-5 w-24 h-24 bg-[#D6C7A9] -z-10"></div>
              <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-[#2C5530] -z-10"></div>
              <img 
                src="https://images.pexels.com/photos/6823329/pexels-photo-6823329.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Military training" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#182940]">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#2C5530] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These principles guide everything we do at the Grunt Works Association and represent the foundation of our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="text-[#2C5530]" size={48} />,
                title: "Excellence",
                description: "We maintain the highest standards in all our training programs, never compromising on quality or safety."
              },
              {
                icon: <Users className="text-[#2C5530]" size={48} />,
                title: "Brotherhood/Sisterhood",
                description: "We foster a deep sense of camaraderie that transcends military service and creates lifelong bonds."
              },
              {
                icon: <Heart className="text-[#2C5530]" size={48} />,
                title: "Service",
                description: "We continue to serve our community, country, and fellow veterans through our programs and initiatives."
              },
              {
                icon: <Flag className="text-[#2C5530]" size={48} />,
                title: "Integrity",
                description: "We operate with honesty, transparency, and a commitment to doing what's right for our members."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#2C5530]"
              >
                <div className="mb-4 inline-block">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#182940]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#182940]">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-[#2C5530] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the dedicated veterans who lead our organization and bring decades of combined experience in military service, 
              fitness training, and community building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "Michael Torres",
                role: "Executive Director",
                bio: "Former Marine Corps Infantry, 3 combat deployments. Certified fitness trainer and firearms instructor with over 15 years of experience."
              },
              {
                img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "David Washington",
                role: "Director of Training",
                bio: "Army Ranger veteran with expertise in tactical operations. Advanced certifications in combat fitness and firearms instruction."
              },
              {
                img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "Sarah Johnson",
                role: "Community Outreach Director",
                bio: "Navy veteran with a background in healthcare and rehabilitation. Passionate about connecting veterans with resources and support."
              },
              {
                img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "Robert Martinez",
                role: "Firearms Program Lead",
                bio: "Former Army Special Forces with extensive experience in firearms training and tactics. NRA certified instructor with competition background."
              },
              {
                img: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "James Wilson",
                role: "Fitness Program Lead",
                bio: "Marine Corps veteran and certified strength and conditioning specialist. Expert in military fitness standards and rehabilitation."
              },
              {
                img: "https://images.pexels.com/photos/3922294/pexels-photo-3922294.jpeg?auto=compress&cs=tinysrgb&w=1600",
                name: "Rebecca Miller",
                role: "Operations Manager",
                bio: "Air Force veteran with logistics and project management expertise. Ensures smooth execution of all GWA programs and events."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#182940]">{member.name}</h3>
                  <p className="text-[#2C5530] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#182940] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg text-gray-200 mb-8">
              Whether you're a veteran looking for community, a supporter wanting to contribute, 
              or someone interested in our training programs, we welcome you to be part of our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-[#2C5530] text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Get Involved
              </a>
              <a 
                href="/donate" 
                className="px-8 py-3 bg-transparent border-2 border-[#D6C7A9] text-[#D6C7A9] rounded-md font-medium hover:bg-[#D6C7A9] hover:text-[#182940] transition-all"
              >
                Support Our Cause
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;