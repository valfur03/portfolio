import _extends from '@babel/runtime/helpers/extends';
import * as React from 'react';

const SvgGithub = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 36 36",
    fill: "none",
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M18 0C8.055 0 0 8.055 0 18c0 7.965 5.152 14.692 12.307 17.078.9.157 1.238-.383 1.238-.856 0-.427-.022-1.845-.022-3.352C9 31.702 7.83 29.767 7.47 28.755c-.202-.518-1.08-2.115-1.845-2.543-.63-.337-1.53-1.17-.022-1.192 1.417-.022 2.43 1.305 2.767 1.845 1.62 2.722 4.208 1.957 5.243 1.485.157-1.17.63-1.958 1.147-2.408-4.005-.45-8.19-2.002-8.19-8.887 0-1.958.698-3.578 1.845-4.838-.18-.45-.81-2.295.18-4.77 0 0 1.508-.472 4.95 1.845 1.44-.404 2.97-.607 4.5-.607 1.53 0 3.06.203 4.5.608 3.442-2.34 4.95-1.845 4.95-1.845.99 2.474.36 4.32.18 4.77 1.147 1.26 1.845 2.857 1.845 4.837 0 6.907-4.207 8.437-8.213 8.887.653.563 1.215 1.643 1.215 3.33 0 2.408-.022 4.343-.022 4.95 0 .473.337 1.035 1.237.855C30.847 32.693 36 25.942 36 18c0-9.945-8.055-18-18-18Z",
    fill: "currentColor",
    style: {
      stroke: "none"
    }
  }));
};

const SvgLinkedin = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 96 96",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    style: {
      fill: "#212121",
      fillOpacity: 1
    },
    d: "M9 0a8.98 8.98 0 0 0-9 9v78c0 4.986 4.014 9 9 9h78c4.986 0 9-4.014 9-9V9c0-4.986-4.014-9-9-9H9zm13 11a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10zm-4.96 24h9.92A3.032 3.032 0 0 1 30 38.04v43.92A3.032 3.032 0 0 1 26.96 85h-9.92A3.032 3.032 0 0 1 14 81.96V38.04A3.032 3.032 0 0 1 17.04 35zM40 35h10a3 3 0 0 1 3 3v3a17.24 17.24 0 0 1 14.22-6C87.44 35 86 57 86 57v25a3 3 0 0 1-3 3H73a3 3 0 0 1-3-3V57s0-9-8.45-9S53 57 53 57v25a3 3 0 0 1-3 3H40a3 3 0 0 1-3-3V38a3 3 0 0 1 3-3z"
  }));
};

export { SvgGithub as Github, SvgLinkedin as Linkedin };
