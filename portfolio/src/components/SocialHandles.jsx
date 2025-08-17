import {
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";

const SocialHandles = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://in.linkedin.com/in/shubhamvishwakarma2002"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
      >
        <FaLinkedin className="size-6 hover:scale-110 transition-transform duration-200" />
      </a>
      <a
        href="https://github.com/Shubham-io"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        <FaGithub className="size-6 hover:scale-110 transition-transform duration-200" />
      </a>
      <a
        href="https://t.me/shubham_v8"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-[#0084C8] transition-colors duration-200"
      >
        <FaTelegramPlane className="size-6 hover:scale-110 transition-transform duration-200" />
      </a>
      <a
        href="https://www.instagram.com/shubh_4m/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
      >
        <FaInstagram className="size-6 hover:scale-110 transition-transform duration-200" />
      </a>
    </div>
  );
};

export default SocialHandles;
