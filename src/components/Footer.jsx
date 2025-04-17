import React from "react";
import Section from "./Section";
import { socials, navigation } from "../constants";
import { Link } from "react-router-dom";
import { brainwave } from "../assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Section crosses className="!px-0 !py-10 border-t border-n-6">
      <div className="container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pt-10">
         
          <div>
            <Link to="/" className="block mb-6">
              <img src={brainwave} width={180} height={40} alt="Brainwave" />
            </Link>
            <p className="text-n-4 text-sm mb-8">
              Accédez à des milliers de chaînes et contenus à la demande avec une qualité d'image exceptionnelle.
            </p>
            <ul className="flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-xl mb-6">Pages</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-n-4 hover:text-color-1 transition-colors">Accueil</Link></li>
              {navigation.filter(item => !item.onlyMobile).map((item) => (
                <li key={item.id}>
                  <Link to={item.url} className="text-n-4 hover:text-color-1 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-xl mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/login" className="text-n-4 hover:text-color-1 transition-colors">Se connecter</Link></li>
              <li><Link to="/register" className="text-n-4 hover:text-color-1 transition-colors">S'inscrire</Link></li>
              <li><Link to="/forgot-password" className="text-n-4 hover:text-color-1 transition-colors">Mot de passe oublié</Link></li>
              <li><a href="#" className="text-n-4 hover:text-color-1 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-n-4 hover:text-color-1 transition-colors">FAQ</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-n-4">
                <span className="font-medium text-white">Email:</span><br />
                <a href="mailto:yassirazzouzi6@gmail.com" className="hover:text-color-1 transition-colors">yassirazzouzi6@gmail.com</a>
              </li>
              <li className="text-n-4">
                <span className="font-medium text-white">Téléphone:</span><br />
                <a href="tel:+33612345678" className="hover:text-color-1 transition-colors">+33 6 12 34 56 78</a>
              </li>
              <li className="text-n-4">
                <span className="font-medium text-white">Adresse:</span><br />
                <address className="not-italic">
                  123 Avenue Digitale<br />
                  75001 Paris, France
                </address>
              </li>
            </ul>
          </div>
        </div>

      
        <div className="pt-8 border-t border-n-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-n-4 text-sm text-center lg:text-left">
            © {currentYear} Brainwave. Tous droits réservés.
          </p>

       
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="px-4 py-3 rounded-lg bg-n-7 border border-n-6 focus:border-color-1 outline-none min-w-[240px]"
            />
            <button 
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-[#9099FC] to-[#D87CEE] text-white font-medium hover:opacity-90 transition-opacity"
            >
              S'inscrire à la newsletter
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
