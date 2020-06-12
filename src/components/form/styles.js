import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
    width: "100%",
  },
  formRow: {
    display: "flex",
    height: 44,
    alignItems: "center",
    justifyContent: "space-between",
    background: "#f2f2f2",
    margin: "0 0 5px",
    borderRadius: 4,
    padding: "0 15px",
    width: "47%",
    ":nth-child(1n) > svg": {
      cursor: "pointer",
      marginRight: 15,
    },
    ":nth-child(n) > input": {
      background: "#f2f2f2",
      border: 0,
      width: "100%",
    },
    ":nth-child(n) > div": {
      width: "90%",
    },
    ":nth-child(n) > select": {
      border: 0,
      width: "90%",
      resize: "none",
      marginLeft: 20,
      marginTop: 10,
      background: "inherit",
    },
    ":nth-child(1n) > textarea": {
      border: 0,
      width: "90%",
      resize: "none",
      marginTop: 10,
      background: "inherit",
    },
  },
  errorMessage: {
    width: "100%",
    marginTop: ".25rem",
    fontSize: "80%",
    color: "#dc3545",
    marginBottom: 15,
    textAlign: "center",
  },

  formNotLogged: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
  },
  formRowNotLogged: {
    display: "flex",
    height: 44,
    alignItems: "center",
    background: "#fff",
    margin: "0 0 5px",
    borderRadius: 4,
    padding: "0 15px",
    ":nth-child(n) > input": {
      border: 0,
      marginLeft: 20,
      width: "90%",
    },
    ":nth-child(1n) > textarea": {
      border: 0,
      width: "90%",
      resize: "none",
      marginLeft: 20,
      marginTop: 10,
    },
  },
});
