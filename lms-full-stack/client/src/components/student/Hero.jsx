import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';
import { header_img } from '../../assets/header_img.png'; // تأكد من المسار الصحيح

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-36 pt-20 md:px-8 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <div className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto flex items-center"> {/* استخدم flex هنا */}
        <h1 className="mr-4">Là où l'excellence rencontre l'innovation</h1> {/* أضف هامشًا أيمنًا */}
        <span className="text-blue-600">RBM POWER.</span>
        <img src={rbmPowerInnovationImage} alt="Innovation RBM POWER" className="w-20 h-20 object-contain ml-4" /> {/* أضف الصورة وهامشًا أيسرًا */}
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        RBM POWER: Notre expertise de pointe en refroidissement, électricité et réseaux vous propulse vers le succès de vos projets.
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        Avec RBM, bénéficiez d'un savoir-faire reconnu en refroidissement, électricité et réseaux pour concrétiser vos ambitions professionnelles.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
