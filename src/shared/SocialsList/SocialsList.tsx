import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWeixin,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export interface SocialType {
  name: string;
  icon: IconDefinition;
  href: string;
}

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  { name: "Facebook", icon: faFacebook, href: "#" },
  { name: "Instagram", icon: faInstagram, href: "#" },
  { name: "Wechat", icon: faWeixin, href: "#" },
];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block",
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
