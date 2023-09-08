import Spline, { SPEObject } from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useRef } from "react";

const Hero = () => {
  const keyboard = useRef<SPEObject>();

  function onLoad(spline: Application) {
    const obj = spline.findObjectByName("Keyboard");
    keyboard.current = obj;
  }
  return (
    <div className="background">
      <h1 className="text">
        your <span className="accent-purple">new</span> and only{" "}
        <span className="accent-orange">keycaps</span>
      </h1>
      <div className="keyboard">
        <Spline
          scene="https://prod.spline.design/murSEzAl7daZhekK/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </div>
  );
};

export default Hero;
