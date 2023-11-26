import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    const instagramProfile = "https://instagram.com/official_muluhya_international?igshid=OGQ5ZDc2ODk2ZA=="
  return (
    <div className="flex justify-center space-x-6 py-4">
      <a
        href="https://www.facebook.com/profile.php?id=100089514741482&mibextid=gFsH6yNPprXzTD5K
        Follow me"
        className="text-gray-600 hover:text-gray-800 transition duration-300"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="#twitter"
        className="text-gray-600 hover:text-gray-800 transition duration-300"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
         href={instagramProfile}
        className="text-gray-600 hover:text-gray-800 transition duration-300"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      {/* Add more social media icons */}
    </div>
  );
};

export default SocialMedia;
