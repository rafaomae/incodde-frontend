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
  formRow: {
    display: "flex",
    height: 44,
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    margin: "0 0 5px",
    borderRadius: 4,
    padding: "0 15px",
    ":nth-child(1n) > svg": {
      cursor: "pointer",
    },
  },
  input: {
    border: 0,
  },
  inputError: {
    border: "1px solid red",
  },
  button: {
    margin: "5px 0 0",
    height: 44,
    background: "#2b2d2d",
    fontWeight: "bold",
    color: "#fff",
    border: 0,
    borderRadius: 4,
    fontSize: 16,
    transition: "background 0.2s",
    ":hover": {
      background: "#434747",
    },
  },
  errorMessage: {
    width: "100%",
    marginTop: ".25rem",
    fontSize: "80%",
    color: "#dc3545",
    marginBottom: 15,
  },
});
