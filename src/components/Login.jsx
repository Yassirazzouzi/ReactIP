import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique d'authentification
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4 relative">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-n-8/80 border border-n-6 focus:border-[#9099FC] outline-none transition-all duration-300"
          required
        />
      </div>
      <div className="mb-6 relative">
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-n-8/80 border border-n-6 focus:border-[#9099FC] outline-none transition-all duration-300"
          required
        />
        <div className="absolute right-3 bottom-3 text-xs text-n-4">
          <Link to="/forgot-password" className="hover:text-[#88E5BE] transition-colors duration-300">Mot de passe oublié?</Link>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#9099FC] to-[#D87CEE] text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium"
      >
        Se connecter
      </button>
    </form>
  );
};

export default Login;
