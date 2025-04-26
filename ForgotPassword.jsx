import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
      setTimeout(() => navigate('/'), 3000);
    } catch (err) {
      setError('Failed to send password reset email');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg w-80">
        <h2 className="text-2xl mb-6 text-center">Forgot Password</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        <form onSubmit={handleReset}>
          <input
            type="email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
