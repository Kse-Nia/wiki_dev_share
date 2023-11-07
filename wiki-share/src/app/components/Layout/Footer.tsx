import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex justify-center space-x-4">
            {/* Social network */}
            <a href="#" className="hover:text-gray-300">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-300">
              Instagram
            </a>
          </div>
          <div>
            {/* Mentions légales */}
            <a href="/mentions-legales" className="hover:text-gray-300">
              Mentions légales
            </a>
          </div>
          <div>
            {/* Newsletter */}
            <form>
              <label htmlFor="newsletter-email" className="block text-sm mb-2">
                Inscrivez-vous à notre newsletter :
              </label>
              <div className="flex">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Votre email"
                  className="p-2 rounded-l bg-gray-700 border-0"
                />
                <button
                  type="submit"
                  className="bg-blue-600 p-2 rounded-r hover:bg-blue-700"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-gray-400 text-sm mt-4">
          © WikiDevShare - Tous droits réservés {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
