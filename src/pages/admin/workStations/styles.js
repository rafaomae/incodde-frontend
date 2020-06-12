import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  tableContent: {
    width: "100%",
    paddingTop: 50,
  },
  button: {
    padding: 3,
    height: 25,
    border: 0,
    borderRadius: 4,
    fontSize: 14,
    width: "50%",
    marginBottom: 10,
  },
  schedule: {
    background: "#2b2d2d",
    color: "#fff",
    transition: "background 0.2s",
    ":hover": {
      background: "#434747",
    },
  },
  join: {
    color: "#fff",
    backgroundColor: "#28a745",
    borderColor: "#28a745",
    transition: "background 0.2s",
    ":hover": {
      backgroundColor: "#218838",
      borderColor: "#1e7e34",
    },
  },
  leave: {
    color: "#fff",
    backgroundColor: "#dc3545",
    borderColor: "#dc3545",
    transition: "background 0.2s",
    ":hover": {
      backgroundColor: "#c82333",
      borderColor: "#bd2130",
    },
  },
});
