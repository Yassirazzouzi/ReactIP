import React, { useRef, useState, useEffect } from 'react';
import { MouseParallax } from "react-just-parallax";
import PlusSvg from '../assets/svg/PlusSvg';
import { Link } from 'react-router-dom';

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[32rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2">
      <Rings />

      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};

// Add animated glowing orbs
const GlowingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-[10%] w-[25rem] h-[25rem] bg-[#88E5BE]/20 rounded-full blur-[6rem] animate-pulse"></div>
      <div className="absolute bottom-10 left-[5%] w-[20rem] h-[20rem] bg-[#9099FC]/20 rounded-full blur-[5rem] animate-pulse"></div>
      <div className="absolute top-1/2 left-[40%] w-[10rem] h-[10rem] bg-[#D87CEE]/20 rounded-full blur-[4rem] animate-pulse"></div>
    </div>
  );
};

const ForgotPasswordPage = () => {
  const parallaxRef = useRef(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer l'email de réinitialisation
    console.log('Reset password for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-n-8 overflow-hidden" ref={parallaxRef}>
      <div className="relative z-1">
        <BackgroundCircles parallaxRef={parallaxRef} />
        <GlowingOrbs />
        
        <div className="relative z-2 flex flex-col items-center justify-center min-h-screen px-5 py-20">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-[#88E5BE]/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-tr from-[#9099FC]/20 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative bg-n-9/70 backdrop-blur-xl rounded-2xl p-8 border border-n-1/10 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#88E5BE] via-[#9099FC] to-[#D87CEE]"></div>
              <div className="absolute -left-10 top-10 w-40 h-40 bg-[#88E5BE]/10 rounded-full blur-xl"></div>
              <div className="absolute -right-10 bottom-10 w-40 h-40 bg-[#9099FC]/10 rounded-full blur-xl"></div>
              
              <h1 className="text-4xl font-bold text-center text-white mb-2">Mot de passe oublié</h1>
              <p className="text-n-3 text-center mb-8">
                {!isSubmitted 
                  ? "Entrez votre email pour réinitialiser votre mot de passe" 
                  : "Un email de réinitialisation a été envoyé si l'adresse existe"}
              </p>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="mb-6 relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-n-8/80 border border-n-6 focus:border-[#88E5BE] outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#88E5BE] to-[#9099FC] text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium"
                  >
                    Envoyer le lien
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#88E5BE]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#88E5BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-n-3 mb-4">Vérifiez votre boîte de réception et suivez les instructions.</p>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <p className="text-n-4">
                  <Link to="/login" className="text-[#88E5BE] hover:text-[#9099FC] transition-colors duration-300">
                    Retour à la connexion
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <PlusSvg className="opacity-40" />
          <PlusSvg className="opacity-40" />
          <PlusSvg className="opacity-40" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage; 