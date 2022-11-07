import * as React from "react";
const SvgLinkedin = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      style={{
        fill: "#212121",
        fillOpacity: 1,
      }}
      d="M9 0a8.98 8.98 0 0 0-9 9v78c0 4.986 4.014 9 9 9h78c4.986 0 9-4.014 9-9V9c0-4.986-4.014-9-9-9H9zm13 11a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10zm-4.96 24h9.92A3.032 3.032 0 0 1 30 38.04v43.92A3.032 3.032 0 0 1 26.96 85h-9.92A3.032 3.032 0 0 1 14 81.96V38.04A3.032 3.032 0 0 1 17.04 35zM40 35h10a3 3 0 0 1 3 3v3a17.24 17.24 0 0 1 14.22-6C87.44 35 86 57 86 57v25a3 3 0 0 1-3 3H73a3 3 0 0 1-3-3V57s0-9-8.45-9S53 57 53 57v25a3 3 0 0 1-3 3H40a3 3 0 0 1-3-3V38a3 3 0 0 1 3-3z"
    />
  </svg>
);
export default SvgLinkedin;
