import { useState } from "react";
import { HStack } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export default function Nav() {
  const mailtoURL = `mailto:shoreguardians.chennai@gmail.com?cc=average.runner216@gmail.com&subject=Hey ShoreGuardians! I Have A Question...`;
  const [isHovered, setIsHovered] = useState(false);

  const formsText = "Signup-Form";
  const letters = formsText.split("").map((letter, index) => (
    <span
      key={index}
      className="letter"
      style={{
        transition: "transform 0.2s ease",
        transform:
          isHovered && index !== 0 ? `translateX(${index * 0.5}rem)` : "none",
      }}
    >
      {letter}
    </span>
  ));

  return (
    <nav>
      <HStack className="nav-hstack" spacing={"17.5%"}>
        <a
          href="https://forms.gle/bSLuxKf6MdMM7nHL9"
          target="blank"
          className="nav-item-container"
        >
          <img
            src="/shoreguardians-logo-hands.jpg"
            className="nav-image"
            alt="Part of the ShoreGuardians Logo"
          />
          <div className="nav-text-icon-container">
            <div
              className="nav-links forms-text no-scale"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {letters}
            </div>
          </div>
        </a>
        <a href="/" className="nav-links first">
          Home
        </a>
        <a href="/members" className="nav-links second">
          Members
        </a>
        <a href={mailtoURL} target="blank">
          <EmailIcon
            color="white"
            boxSize="2em"
            className="nav-email-container"
          />
        </a>
      </HStack>
    </nav>
  );
}
