import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { useFirebase } from '../contexts/FirebaseContext';
import Logo from '../components/common/Logo';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useFirebase();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send password reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#182940] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#2C5530] p-6 flex justify-between items-center">
          <Link to="/login" className="text-white flex items-center hover:text-[#D6C7A9] transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to Login
          </Link>
          <Mail className="text-white" size={24} />
        </div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <Logo className="h-16 w-auto mx-auto" />
            <h2 className="mt-6 text-2xl font-bold text-[#182940]">Reset Your Password</h2>
            <p className="mt-2 text-gray-600">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
          </div>

          {success ? (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <div>
                  <p className="text-green-700 font-medium">Check your email</p>
                  <p className="text-green-600">
                    We've sent password reset instructions to {email}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <div className="flex items-center">
                    <AlertCircle className="text-red-500 mr-3" size={24} />
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530]"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 bg-[#2C5530] text-white rounded-md font-medium ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
                } transition-all flex items-center justify-center`}
              >
                {loading ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Sending Instructions...
                  </>
                ) : (
                  'Send Reset Instructions'
                )}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Remember your password?{' '}
              <Link to="/login" className="text-[#2C5530] font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;