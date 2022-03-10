import {NavLink} from 'react-router-dom';
import Sad from '../images/sad.png';
const Error = () => {
  return (
    <>
      <div className="errorTemp">
            <div className="img_tb">
                <img src={Sad} alt="" className='errorSadimg' /></div>
            <div className="text_tb">
                <h2>404</h2>
                <p>oops!page not be found</p>
                    <span>sorry but the page you are looking for does not exits,
                        have been removed. name changed or is temporarily 
                        unavailable
                    </span>
                    <NavLink to = "/" className="errorHome">back to homepage</NavLink>
                </div>
        </div>
    </>
  );
};

export default Error;
