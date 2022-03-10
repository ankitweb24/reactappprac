import About from "./components/About";
import Service from "./components/Service";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Route, Switch, Redirect } from "react-router-dom";
import Error from "./components/Error";
import "./index.css";
import Nav from "./components/Nav";
const App = () => {
  return (
    <>

      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/service" render={() => <Service name="service" />} />
        <Route path="/about" component={() => <About name="about" />} />
        <Route path = "/contact" component={Contact}/>
        {/* <Route component={Error} /> */}
        <Redirect to = "/" />
      </Switch>
    </>
  );
};

export default App;


