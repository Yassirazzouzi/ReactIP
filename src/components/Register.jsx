import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifier que les mots de passe correspondent
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    // Ajoutez ici votre logique d'inscription
    console.log('Register attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-n-8/80 border border-n-6 focus:border-[#D87CEE] outline-none transition-all duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-n-8/80 border border-n-6 focus:border-[#D87CEE] outline-none transition-all duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-n-8/80 border border-n-6 focus:border-[#D87CEE] outline-none transition-all duration-300"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmer le mot de passe"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-n-8/80 border border-n-6 focus:border-[#D87CEE] outline-none transition-all duration-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#D87CEE] to-[#9099FC] text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium"
      >
        S'inscrire
      </button>
    </form>
  );
};

export default Register; 