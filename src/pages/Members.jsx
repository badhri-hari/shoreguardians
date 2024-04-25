import { EmailIcon } from "@chakra-ui/icons";
import { Avatar, Divider, VStack, Box, AbsoluteCenter } from "@chakra-ui/react";
import Nav from "../components/Nav";
import MemberCards from "../components/MemberCards";
import Footer from "../components/Footer";

export default function Members() {
  const mailtoURL0 = `mailto:average.runner216@gmail.com&subject=Hey Badhri!`;
  const mailtoURL1 = `mailto:rishirajanmenon@gmail.com&subject=Hey Rishi!`;

  return (
    <>
      <Nav />
      <div className="members-founders-container">
        <div className="members-founders-card">
          <div className="members-founders-card-container">
            <h1>Badhri N Hari</h1>
            <p>Director</p>
            <div className="members-founders-card-contacts">
              <a href={mailtoURL0} target="blank">
                <EmailIcon style={{ color: "black", fontSize: "40px" }} />
              </a>
            </div>
            <div className="members-founders-card-picture">
              <Avatar size={null} name="Badhri Hari" src="/badhri-image.jpeg" />
            </div>
          </div>
        </div>
        <div className="members-founders-card">
          <div className="members-founders-card-container">
            <h1>Rishi Rajan Menon</h1>
            <p>President</p>
            <div className="members-founders-card-contacts">
              <a href={mailtoURL1} target="blank">
                <EmailIcon style={{ color: "black", fontSize: "40px" }} />
              </a>
            </div>
            <div className="members-founders-card-picture">
              <Avatar
                size={null}
                name="Rishi Rajan Menon"
                src="/rishi-image.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <Box position="relative" padding="30">
        <Divider />
        <AbsoluteCenter px="4" className="members-header">
          Our Members
        </AbsoluteCenter>
      </Box>
      <VStack>
        <MemberCards />
      </VStack>
        <Footer />
    </>
  );
}
