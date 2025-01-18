import { useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Page1 from "./screens/Page1";
import SplashScreen from "./screens/SplashScreen";
import gsap from "gsap";
import Page2 from "./screens/Page2";
import useLocoScroll from "./hooks/useLocoScroll"
import Page3 from "./screens/Page3";
import Page4 from "./screens/Page4";
import theme from "./constants/theme";
import Page5 from "./screens/Page5";
import Page6 from "./screens/Page6";
var prevScrollpos = window.scrollY;

function App() {
  // useLocoScroll(true)
  const container = useRef();
  const navRef = useRef();

  window.onscroll = function () {

    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      console.log("up");
      navRef.current.style.transform = "translateY(0%)";
    } else {
      console.log("down");
      navRef.current.style.transform = "translateY(-100%)";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <SplashScreen />
      <Navbar navRef={navRef} />
      <div id="main" data-scroll-container ref={container} style={{ background: theme.secondary }}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
      </div>
    </>
  );
}

export default App;
