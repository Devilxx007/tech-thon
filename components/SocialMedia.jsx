import {FaFacebook ,FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex gap-5 ">
        <a href="#"><FaFacebook className="text-white text-2xl"/></a>
        <a href="#"><FaInstagram className="text-white text-2xl" /></a>
        <a href="#"><FaTwitter className="text-white text-2xl" /></a>
    </div>
  );
};

export default SocialIcons;
