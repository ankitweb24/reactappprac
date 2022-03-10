import HomeImg from "../images/home.png";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Home = (props) => {
  return (
    <>
      <header>
        <div className="Home_left_elements">
          <h2>
            Web Design Amazing <br />
            App Prototypes For <br />
            Startups.
          </h2>
          <p>Do More, Go Upper</p>
          <span>Increase Productivity a simple to-do app</span>
          <br />
            <NavLink
              exact
              activeClassName="activePage"
              className="btnStyler"
              to="/service"
            >get more</NavLink>
        </div>
        <div className="Home_right_elements">
          <img src={HomeImg} alt="" />
        </div>
      </header>

      <Footer />
    </>
  );
};

export default Home;
