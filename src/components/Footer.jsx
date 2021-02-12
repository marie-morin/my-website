import React from "react";
import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_cta">
          Vous-êtes prêts à travailler avec moi ?
        </div>
        <FontAwesomeIcon icon={["fab", "envira"]} className="icon" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
          commodo lectus, ac blandit elit tincidun.
        </p>
        <div className="footer__socials">
          <a href="https://www.google.com/">
            <FontAwesomeIcon icon={["fab", "google"]} className="icon" />
          </a>
          <a href="https://www.google.com/">
            <FontAwesomeIcon icon={["fab", "apple"]} className="icon" />
          </a>
          <a href="https://www.google.com/">
            <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
          </a>
          <a href="https://www.google.com/">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="icon" />
          </a>
        </div>
        <p>
          Copyright © 2021 Tous droits réservés | Fait avec ❤️ par Marie Morin
        </p>
      </div>
    </footer>
  );
}

export default Footer;
