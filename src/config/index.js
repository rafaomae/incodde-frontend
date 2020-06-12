const API_URL = process.env.REACT_APP_API_URL;
const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY;
const EMAIL_SENDER = process.env.REACT_APP_EMAIL_SENDER;
const EMAIL_SECRET = process.env.REACT_APP_EMAIL_SECRET;
const EMAIL_URL = process.env.REACT_APP_EMAIL_URL;
const DATE_OPTIONS = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};
export {
  API_URL,
  TOKEN_KEY,
  DATE_OPTIONS,
  EMAIL_SENDER,
  EMAIL_SECRET,
  EMAIL_URL,
};
