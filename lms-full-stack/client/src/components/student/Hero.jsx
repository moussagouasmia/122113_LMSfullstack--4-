import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto">
        Là où l'excellence rencontre l'innovation
        <span className="text-blue-600"> RBM POWER.</span>
        <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0" />
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        RBM POWER: Notre expertise de pointe en refroidissement, électricité et réseaux vous propulse vers le succès de vos projets. 
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
Avec RBM, bénéficiez d'un savoir-faire reconnu en refroidissement, électricité et réseaux pour concrétiser vos ambitions professionnelles.      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
