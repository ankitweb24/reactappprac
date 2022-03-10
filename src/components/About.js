import AboutImg from "../images/about.png";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const About = (props) => {
  return (
    <>
      <header>
        <div className="Home_left_elements">
          <h2>About us</h2>
          <p className="abtPera">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            maiores quidem quia atque ut molestias nesciunt voluptatibus iste
            consectetur, corporis cumque dolor repellendus doloremque placeat
            nemo eius autem itaque officia? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptates culpa esse quis, aliquid
            magni, ea quisquam, repellendus voluptatibus sequi inventore
            asperiores atque. Voluptatibus, vero explicabo aperiam nemo saepe
            debitis ad? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Accusamus culpa aut delectus soluta veniam accusantium
            deserunt non, exercitationem temporibus reprehenderit minima magnam
            quia iure. Nihil porro autem dolores a aspernatur. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Architecto, alias? Enim
            voluptatibus culpa molestias similique reprehenderit, vero rem
            pariatur sint quibusdam velit nesciunt, perspiciatis aliquid impedit
            voluptates excepturi magnam quod! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Odit, temporibus consequatur esse aut
            eaque a accusantium iste sunt, voluptate at facilis harum debitis,
            tempore sint ipsum! Aspernatur dolorum impedit animi?
          </p>
          <span>let's contact me ----</span>
          <br />
          <NavLink
            exact
            activeClassName="activePage"
            className="btnStyler"
            to="/contact"
          >
            Contact me
          </NavLink>
        </div>
        <div className="Home_right_elements">
          <img src={AboutImg} alt="" />
        </div>
      <Footer />
      </header>

    </>
  );
};

export default About;
