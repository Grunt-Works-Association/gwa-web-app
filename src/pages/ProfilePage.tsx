import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useFirebase } from '../contexts/FirebaseContext';
import { User, LogOut, Settings, Calendar, ShoppingBag, FileText, LockKeyhole } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user, signOut } = useFirebase();
  const [activeTab, setActiveTab] = useState('profile');
  
  // If no user is logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect handled by FirebaseContext effect
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#182940]">My Account</h1>
          <p className="text-gray-600">Manage your profile, orders, and memberships</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 bg-[#182940] text-white">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#2C5530] p-3 rounded-full">
                    <User size={24} />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">{user.displayName || 'GWA Member'}</h2>
                    <p className="text-gray-300 text-sm">{user.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full px-4 py-2 rounded-md flex items-center ${
                      activeTab === 'profile' 
                        ? 'bg-[#2C5530] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <User size={18} className="mr-3" />
                    Profile
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('membership')}
                    className={`w-full px-4 py-2 rounded-md flex items-center ${
                      activeTab === 'membership' 
                        ? 'bg-[#2C5530] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FileText size={18} className="mr-3" />
                    Membership
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('events')}
                    className={`w-full px-4 py-2 rounded-md flex items-center ${
                      activeTab === 'events' 
                        ? 'bg-[#2C5530] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Calendar size={18} className="mr-3" />
                    My Events
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full px-4 py-2 rounded-md flex items-center ${
                      activeTab === 'orders' 
                        ? 'bg-[#2C5530] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ShoppingBag size={18} className="mr-3" />
                    Orders
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`w-full px-4 py-2 rounded-md flex items-center ${
                      activeTab === 'security' 
                        ? 'bg-[#2C5530] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <LockKeyhole size={18} className="mr-3" />
                    Security
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full px-4 py-2 rounded-md flex items-center ${
                      activeTab === 'settings' 
                        ? 'bg-[#2C5530] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Settings size={18} className="mr-3" />
                    Settings
                  </button>
                </nav>
                
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-2 text-red-600 rounded-md flex items-center hover:bg-red-50"
                  >
                    <LogOut size={18} className="mr-3" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-[#182940]">Profile Information</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                          defaultValue="John"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                          defaultValue="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                        defaultValue={user.email}
                        disabled
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        To change your email, please go to the Security tab.
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                        defaultValue="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <textarea
                        id="address"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                        defaultValue="123 Main St, Anytown, TX 12345"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Military Status (Optional)
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]">
                        <option>Select status</option>
                        <option>Active Duty</option>
                        <option>Veteran</option>
                        <option>Reserve/Guard</option>
                        <option>Military Family</option>
                        <option>Civilian</option>
                      </select>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {activeTab === 'membership' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-[#182940]">Membership Status</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-[#182940]">Basic Membership</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Active
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Your membership provides access to community events and basic training resources.
                    </p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Renewal date: January 15, 2026</span>
                      <span>Member since: January 15, 2025</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-[#182940]">Upgrade Your Membership</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:border-[#2C5530] transition-colors">
                      <h4 className="text-lg font-bold mb-2 text-[#182940]">Premium Membership</h4>
                      <p className="text-gray-600 mb-4">
                        Includes priority access to all training events, exclusive content, and special discounts.
                      </p>
                      <p className="text-2xl font-bold text-[#2C5530] mb-4">$99/year</p>
                      <button className="w-full py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors">
                        Upgrade Now
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6 hover:border-[#2C5530] transition-colors">
                      <h4 className="text-lg font-bold mb-2 text-[#182940]">Elite Membership</h4>
                      <p className="text-gray-600 mb-4">
                        Includes all premium benefits plus personal training sessions and advanced courses.
                      </p>
                      <p className="text-2xl font-bold text-[#2C5530] mb-4">$199/year</p>
                      <button className="w-full py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors">
                        Upgrade Now
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'events' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-[#182940]">My Events</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4 text-[#182940]">Upcoming Events</h3>
                    {[
                      {
                        title: "Fundamentals of Marksmanship",
                        date: "June 15, 2025",
                        time: "9:00 AM - 5:00 PM",
                        location: "Veteran's Range, Austin TX"
                      }
                    ].length > 0 ? (
                      <div className="space-y-4">
                        {[
                          {
                            title: "Fundamentals of Marksmanship",
                            date: "June 15, 2025",
                            time: "9:00 AM - 5:00 PM",
                            location: "Veteran's Range, Austin TX"
                          }
                        ].map((event, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2C5530]">
                            <h4 className="font-bold text-[#182940]">{event.title}</h4>
                            <p className="text-gray-600">{event.date} • {event.time}</p>
                            <p className="text-gray-600">{event.location}</p>
                            <div className="mt-3 flex gap-2">
                              <button className="text-sm px-3 py-1 bg-[#2C5530] text-white rounded hover:bg-opacity-90">
                                View Details
                              </button>
                              <button className="text-sm px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200">
                                Cancel Registration
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <p className="text-gray-600 mb-4">You haven't registered for any upcoming events.</p>
                        <a 
                          href="/calendar" 
                          className="inline-block px-4 py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors"
                        >
                          Browse Events
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-[#182940]">Past Events</h3>
                    {[].length > 0 ? (
                      <div className="space-y-4">
                        {/* Past events would go here */}
                      </div>
                    ) : (
                      <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <p className="text-gray-600">You haven't attended any events yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-[#182940]">Order History</h2>
                  
                  {[].length > 0 ? (
                    <div className="space-y-6">
                      {/* Order history would go here */}
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
                      <a 
                        href="/shop" 
                        className="inline-block px-4 py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors"
                      >
                        Visit Shop
                      </a>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-[#182940]">Security Settings</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold mb-4 text-[#182940]">Change Password</h3>
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input
                            id="currentPassword"
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            id="newPassword"
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            id="confirmPassword"
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                          />
                        </div>
                        
                        <div>
                          <button
                            type="submit"
                            className="px-6 py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors"
                          >
                            Update Password
                          </button>
                        </div>
                      </form>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-bold mb-4 text-[#182940]">Account Security</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-700">Two-Factor Authentication</p>
                            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                          </div>
                          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                            Enable
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-700">Login History</p>
                            <p className="text-sm text-gray-500">View your recent login activity</p>
                          </div>
                          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-[#182940]">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-4 text-[#182940]">Notification Preferences</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="emailNotifications"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-[#2C5530] border-gray-300 rounded focus:ring-[#2C5530]"
                          />
                          <label htmlFor="emailNotifications" className="ml-2 block text-gray-700">
                            Email notifications for events and training
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="marketingEmails"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-[#2C5530] border-gray-300 rounded focus:ring-[#2C5530]"
                          />
                          <label htmlFor="marketingEmails" className="ml-2 block text-gray-700">
                            Marketing emails and newsletters
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="textNotifications"
                            type="checkbox"
                            className="h-4 w-4 text-[#2C5530] border-gray-300 rounded focus:ring-[#2C5530]"
                          />
                          <label htmlFor="textNotifications" className="ml-2 block text-gray-700">
                            Text message notifications
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-bold mb-4 text-[#182940]">Privacy Settings</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="profileVisibility"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-[#2C5530] border-gray-300 rounded focus:ring-[#2C5530]"
                          />
                          <label htmlFor="profileVisibility" className="ml-2 block text-gray-700">
                            Show my profile in the member directory
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="eventParticipation"
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-[#2C5530] border-gray-300 rounded focus:ring-[#2C5530]"
                          />
                          <label htmlFor="eventParticipation" className="ml-2 block text-gray-700">
                            Show my participation in events to other members
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-bold mb-4 text-red-600">Danger Zone</h3>
                      
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="text-gray-700 mb-4">
                          Deleting your account will remove all of your information from our database. This cannot be undone.
                        </p>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                          Delete Account
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-[#2C5530] text-white rounded-md hover:bg-opacity-90 transition-colors"
                      >
                        Save Settings
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;