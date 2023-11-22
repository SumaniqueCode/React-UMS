import React from "react";
import { Card, Container} from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return(
        <Card bg="dark" className=" m-2 p-3">
      <Container>
          <a href="https://www.facebook.com/" target={"_blank"}><FaFacebook size={30} className="mx-3"/></a>
          <a href="https://www.twitter.com/" target={"_blank"}><FaTwitter size={30} className="mx-3"/></a>
          <a href="https://www.instagram.com/" target={"_blank"}><FaInstagram size={30} className="mx-3"/></a>
          <a href="https://www.youtube.com/c/limitlessplaying2000/" target={"_blank"}><FaYoutube size={30} className="mx-3" /></a>
          <a href="https://www.instagram.com/" target={"_blank"}><FaGithub size={30} className="mx-3"/></a>
      </Container>
    </Card>
    );
}
export default Footer;