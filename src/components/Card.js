const Card = (props) => {
  return (
    <>
        <div className="box">
          <img src={props.imgsrc} alt="" width = "130px" height = "130px"/>
          <h2>{props.title}</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum esse
            modi rem et, ad aliquid accusantium harum nam nisi a molestias
            necessitatibus explicabo! Dolorum itaque magnam nostrum tempore,
            deserunt qui.
          </p>
          <button>learn more</button>
        </div>
    </>
  );
};


// Card.defaultPrps = {
//   pera : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum essmodi rem et ad aliquid accusantium harum nam nisi a molestias
// necessitatibus explicabo! Dolorum itaque magnam nostrum tempore,
//   deserunt qui"
// }

export default Card;
