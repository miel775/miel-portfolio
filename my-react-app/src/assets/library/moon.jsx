import { Moon } from "lunarphase-js";

function Moon() {


const phase = Moon.lunarPhase();
  return (
    <svg
      id="sun"
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        transition: 'top 60s linear',
      }}
    >
      <path
        d="M73.505 124.01C100.846 124.01 123.01 101.846 123.01 74.505C123.01 47.1641 100.846 25 73.505 25C46.1641 25 24 47.1641 24 74.505C24 101.846 46.1641 124.01 73.505 124.01Z"
        fill="#e2e2e2"
        stroke="black"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default Moon;
