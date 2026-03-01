import './animationLibrary.css';
import { useMemo } from 'react';

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function Tree() {
  const tree2Color = Math.random() < 0.5 ? '#9D6322' : '#50371B';
  const tree1Color = Math.random() < 0.5 ? '#6F742E' : '#42451C';
  const tree = useMemo(() => ({
    top: rand(72, 80),
    left: rand(0, 100),
    scale: rand(0.5, 1.4),
  }), []);

  return (
    <svg
      id="tree"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 109 158.5"
      style={{
          position: 'absolute',
          top: `${tree.top}%`,
          left: `${tree.left}%`,
          scale: "1",
        }}
    >
      <path
        className="tree-1"
        style={{
          fill: tree1Color,
          stroke: '#000',
          strokeMiterlimit: 10,
        }}
        d="M85.991,46.312c1.438-3.75,2.259-7.806,2.259-12.062C88.25,15.61,73.14.5,54.5.5S20.75,15.61,20.75,34.25c0,1.967.203,3.883.526,5.757C9.256,43.642.5,54.794.5,68c0,16.154,13.096,29.25,29.25,29.25,9.161,0,17.332-4.218,22.695-10.811,4.513,10.332,14.809,17.561,26.805,17.561,16.154,0,29.25-13.096,29.25-29.25,0-13.83-9.61-25.39-22.509-28.438Z"
      />

      <path
        className="tree-2"
        style={{
          fill: tree2Color,
          stroke: '#000',
          strokeMiterlimit: 10,
        }}
        d="M34.03,158s15.75-31.5,13.5-49.5c-2.25-18-11.25-36-11.25-36l11.47,4.643v-9.159l6.53,6.766,11.775-6.766-2.775,11.266,11.25-2.25s-11.25,9-11.25,33.75,9.262,47.25,9.262,47.25h-38.512Z"
      />
    </svg>
  );
}

export default Tree;
