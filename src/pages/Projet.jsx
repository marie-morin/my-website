import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Projet.scss";

function Projet() {
  let { slug } = useParams();

  return (
    <main className="projet">
      <section className="projet_hero container">
        <img
          alt="test"
          src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        />
        <h1 className="hero_title">{slug}</h1>
      </section>

      <section className="content container">
        <p className="projet_intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
          commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
          eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam
          nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet
          quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu
          diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
          sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula,
          a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci
          ullamcorper at ultricies metus viverra. Pellentesque arcu mauris,
          malesuada quis ornare accumsan, blandit sed diam.
        </p>

        <h2>Cahier des charges</h2>

        <ul>
          <li>Duis vulputate commodo lectus, ac blandit elit tincidunt id</li>
          <li>
            Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie
            elit, et lacinia ipsum quam nec dui
          </li>
          <li>Aenean velit odio, elementum in tempus ut, vehicula eu diam</li>
          <li>Pellentesque rhoncus aliquam mattis</li>
          <li>
            Vivamus varius pretium ligula, a aliquam odio euismod sit amet
          </li>
          <li>
            Quisque laoreet sem sit amet orci ullamcorper at ultricies metus
            viverra
          </li>
          <li>
            Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit
            sed diam.
          </li>
        </ul>
      </section>

      <section className="projet_metas"></section>
      <section>kfehzfkzfhkz</section>
    </main>
  );
}

export default Projet;
