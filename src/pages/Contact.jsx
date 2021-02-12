import React from "react";
import "../styles/Contact.scss";

function Contact() {
  return (
    <main className="contact">
      <div className="container">
        <h1>Contactez-moi</h1>

        <p>
          Vous êtes une entreprise Nantaise qui recrute ? Vous êtes intéressé
          par mon profil ? Vous avez des questions ou des suggestions ? <br />
          N’hésitez pas à me contacter !
        </p>

        <form className="form">
          <div className="form-flex">
            <input
              type="text"
              name="name"
              placeholder="Nom Prénom"
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            className="form-input"
          />
          <br />
          <textarea
            placeholder="Message"
            className="form-input form-input-area"
          ></textarea>
          <input type="submit" value="Envoyer" className="form-input" />
        </form>
      </div>
    </main>
  );
}

export default Contact;
