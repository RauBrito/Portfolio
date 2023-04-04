import { useState, useEffect } from "react";
import "./app.sass";
import {
  // gamepad,
  // user,
  // home,
  box,
} from "./icons/Paths";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import { interpolate } from "flubber";
import blobShape from "./icons/blobshape";
import * as blobs2 from "blobs/v2";
// const paths = [arrGamepad, arrBox, arrHome, arrUser];
// const paths = [gamepad, box, home, user];

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const randomLine = () => {
  // let p1 = `${rand(0, 100)} ${rand(0, 150)}`;
  // let p2 = `${rand(100, 200)} ${rand(0, 150)}`;
  // let p3 = `${rand(200, 300)} ${rand(0, 150)}`;
  // let p4 = `${rand(200, 300)} ${rand(150, 300)}`;
  // let p5 = `${rand(100, 200)} ${rand(150, 300)}`;
  // let p6 = `${rand(0, 100)} ${rand(150, 300)}`;

  // return `M ${p1} L ${p2} L ${p3} L ${p4} L ${p5} L ${p6} L ${p1} `;

  // const { path, seedValue } = blobShape()
  // return path

  const svgPath = blobs2.svgPath({
    seed: Math.random(),
    extraPoints: 6,
    randomness: 5,
    size: 400,
  });
  return svgPath;
};

function App() {
  const [pause, setPause] = useState(false);
  const [paths, setPaths] = useState([randomLine(), randomLine()]);
  const progress = useMotionValue(0);
  const path = useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => {
      return interpolate(a, b, { maxSegmentLength: 1 });
    },
  });
  useEffect(() => {
    progress.set(0);
    let a = animate(progress, 1, {
      duration: pause ? 0.5 : 1.7,
      onComplete: () => {
        !pause &&
          setPaths((prev) => {
            progress.set(0);
            return [prev[1], randomLine()];
          });
      },
    });
    return () => {
      a.stop();
    };
  }, [paths, pause, progress]);

  const advance = () => {
    // if (pause) {
    //   setPaths([path.current, randomLine()]);
    //   setPause(false);
    // } else {
    //   setPaths([path.current, box]);
    //   setPause(true);
    // }
  };

  const enter = () => {
    setPause(true);
    setPaths([path.current, box]);
  };
  const leave = () => {
    setPause(false);
    setPaths([path.current, randomLine()]);
  };

  return (
    <div className="root">
      <motion.div
        className="box"
        onClick={advance}
        onMouseEnter={enter}
        onMouseLeave={leave}
      >
        <svg width="500" height="500" fill="none"  >
          <path
            d="M2 381.57L215.989 274.094M407 353.121L215.989 274.094M215.989 274.094V0.5"
            stroke="white"
            stroke-width="5"
            fill="none"
          />

          <motion.path
            d={path}
            stroke="#000"
            fill="#898989"
            strokeLinejoin={"round"}
            strokeWidth={1}
            className="blob"
          />
          <path
            d="M3 116.799L216.989 3L408 78.8658M3 116.799L176.777 191.084M3 116.799V387.07L176.777 474M176.777 191.084L408 78.8658M176.777 191.084V474M408 78.8658V358.621L176.777 474"
            stroke="white"
            stroke-width="5"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default App;
/**
  // const [paths, setPaths] = useState([randomLine(), randomLine()]);
  // const [pathIndex, setPathIndex] = useState(1);
  // const progress = useMotionValue(pathIndex-1);
  // const path = useTransform(progress, [0, 1], paths);

  // useEffect(() => {
  //   progress.set(0);
  //   advance()
  // }, [paths]);

  // const advance = () => {
  //   animate(progress, pathIndex, {
  //     duration: 0.8,
  //     onComplete: () => {
  //       setPaths((prev) => [prev[1], randomLine()]);
  //       setPathIndex(1);
  //       // advance()
  //     },
  //   });
  // };
 */
