// import logo from './images/logo.png';

import NavMen from "./components/NavMen";
import Words from "./components/Words";
import Stores from "./components/Stores";
import LoadingIMG1 from "./components/LoadingIMG1";
import LImg from "./images/landing-image-1.png";
import LImg2 from "./images/landing-image-2.png";
import NotifyMe from "./components/NotifyMe";
import SocialN from "./components/SocialN";

function App() {
  const wrd1 = "Bringing \n Muslims Together";
  const wrd2 = "Get Notified \n When We Launch";
  return (
    <>
      <NavMen />
      <Words wrd={wrd1} />
      <Stores />
      <LoadingIMG1 srcimg={LImg} />
      <Words wrd={wrd2} />
      <NotifyMe />
      <LoadingIMG1 srcimg={LImg2} />
      <SocialN />
    </>
  );
}

export default App;
