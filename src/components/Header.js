import {LOGO} from "../utils/constants";

const Header = () => {
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44' src={LOGO} alt="logo"/>
    </div>
  );
};

export default Header;