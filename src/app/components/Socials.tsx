// 13.4 Coding Socials.tsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <RiInstagramFill />,
    path: "",
  },
  {
    icon: <FaFacebookF />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
];

interface IProp {
  containerStyles: any;
  iconStyles: any;
}

const Socials = ({ containerStyles, iconStyles }: IProp) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
