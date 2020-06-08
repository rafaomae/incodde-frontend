import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  img: {
    maxWidth: 100,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
  },
  input: {
    background: "#fff",
    border: 0,
    borderRadius: 4,
    height: 44,
    padding: "0 15px",
    color: "#2a2a2a",
    margin: "0 0 5px",
    "::placeholder": {
      color: "#2a2a2a",
    },
  },
  input_error: {
    border: "1px solid red",
  },
  button: {
    margin: "5px 0 0",
    height: 44,
    background: "#3b9eff",
    fontWeight: "bold",
    color: "#fff",
    border: 0,
    borderRadius: 4,
    fontSize: 16,
    transition: "background 0.2s",
    ":hover": {
      background: "#54aaff",
    },
  },
  error_message: {
    width: "100%",
    marginTop: ".25rem",
    fontSize: "80%",
    color: "#dc3545",
    marginBottom: 15,
  },
});
