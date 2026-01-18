import './animationLibrary.css';

function Sun() {
  const now = new Date();
  const time = now.getHours() + now.getMinutes() / 60;

function lerp(a, b, t) {
  return a + (b - a) * t;
}

  let top = 90; 

  if (time >= 8 && time <= 8.5) {
    const t = (time - 8) / 0.5;
    top = lerp(79, 61, t);
  }

  else if (time > 8.5 && time <= 13.25) {
    const t = (time - 8.5) / (13.25 - 8.5);
    top = lerp(61, 30, t);
  }

  else if (time > 13.25 && time <= 19) {
    const t = (time - 13.25) / (19 - 13.25);
    top = lerp(30, 61, t);
  }

  // 🌆 Sunset
  else if (time > 19 && time <= 19.5) {
    const t = (time - 19) / 0.5;
    top = lerp(61, 79, t);
  }

  // 🌙 Night
  else if (time > 19.5 || time < 8) {
    top = 90;
  }

  // x-axis
  const left = 0 + (time / 24) * 80;

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
        left: `${left}%`,
        top: `${top}%`,
        transition: 'top 60s linear',
      }}
    >
      <path
        d="M86.6846 26.6807L86.9375 27.1992L87.415 26.876L110.819 11.0342L108.938 39.4346L108.901 40.0049L109.472 39.9668L137.589 38.0664L121.898 61.7178L121.585 62.1904L122.093 62.4424L147.39 75L122.093 87.5576L121.585 87.8096L121.898 88.2822L137.589 111.933L109.472 110.033L108.901 109.995L108.938 110.565L110.819 138.965L87.415 123.124L86.9375 122.801L86.6846 123.319L74.2568 148.856L61.8301 123.319L61.5781 122.801L61.1006 123.124L37.6953 138.965L39.5762 110.565L39.6143 109.995L39.043 110.033L10.9248 111.933L26.6172 88.2822L26.9307 87.8096L26.4229 87.5576L1.125 75L26.4229 62.4424L26.9307 62.1904L26.6172 61.7178L10.9248 38.0664L39.043 39.9668L39.6143 40.0049L39.5762 39.4346L37.6953 11.0342L61.1006 26.876L61.5781 27.1992L61.8301 26.6807L74.2568 1.14258L86.6846 26.6807Z"
        fill="#FF950B"
        stroke="black"
      />
      <path
        d="M73.505 124.01C100.846 124.01 123.01 101.846 123.01 74.505C123.01 47.1641 100.846 25 73.505 25C46.1641 25 24 47.1641 24 74.505C24 101.846 46.1641 124.01 73.505 124.01Z"
        fill="#FFD00B"
        stroke="black"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default Sun;
