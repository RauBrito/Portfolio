import { useState, useEffect } from "react";
import "./app.sass";
import {
  gamepad,
  user,
  home,
  box,
  arrGamepad,
  arrBox,
  arrUser,
  arrHome,
} from "./icons/Paths";

import {
  useSpring,
  motion,
  motionValue,
  useMotionValue,
  useTransform,
  useTime,
  useMotionValueEvent,
  useAnimate,
  animate,
} from "framer-motion";

import { interpolate, splitPathString, interpolateAll } from "flubber";
// const paths = [arrGamepad, arrBox, arrHome, arrUser];
// const paths = [gamepad, box, home, user];
// const wtf = [0,1,2,3,4,5]

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const randomLine = () => {
  let p1 = `${rand(0, 100)} ${rand(0, 150)}`;
  let p2 = `${rand(100, 200)} ${rand(0, 150)}`;
  let p3 = `${rand(200, 300)} ${rand(0, 150)}`;
  let p4 = `${rand(200, 300)} ${rand(150, 300)}`;
  let p5 = `${rand(100, 200)} ${rand(150, 300)}`;
  let p6 = `${rand(0, 100)} ${rand(150, 300)}`;

  return `M ${p1} L ${p2} L ${p3} L ${p4} L ${p5} L ${p6} L ${p1} `;
};

function App() {
  const [paths, setPaths] = useState([randomLine(), randomLine()]);
  const [pathIndex, setPathIndex] = useState(1);
  const progress = useMotionValue(pathIndex-1);
  const path = useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => {
      return interpolate(a, b, { maxSegmentLength: 10 });
    },
  });

  useEffect(() => {
    progress.set(0);
  }, [paths]);

  const advance = () => {
    animate(progress, pathIndex, {
      duration: 1.5,
      onComplete: () => {
        setPaths((prev) => [prev[1], randomLine()]);

        setPathIndex(1);
      },
    });
  };

  return (
    <div className="root">
      <div className="box">
        <svg width="300" height="300" onClick={advance}>
          <motion.path d={path} stroke="#fff" fill="none" strokeLinejoin={"round"} />
        </svg>
      </div>
      {/* <motion.div
        // drag="x"
        style={{ x: spring }}
        className="boxAbs"
        onClick={changev}
      ></motion.div> */}
    </div>
  );
}

export default App;
/**
 * {interpolators.path.map((item, index) => (
            <animated.path
              key={index}
              d={animationProps.x.to(item)}
              stroke="#fff"
              fill="none"
              strokeWidth={4}
            ></animated.path>
          ))}
 */


