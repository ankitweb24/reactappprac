import Card from "./Card";
import Apicard from "./Apicard";
import Footer from "./Footer";
const Service = (props) => {
  return (
    <>
        <h2 className="heading">Over Service</h2>
        <div className="service_box">
        {Apicard.map((value, index) => {
          return <Card title = {value.title} imgsrc = {value.imgsrc} />
        })}
      </div>
      <Footer />
    </>
  );
};

export default Service;
