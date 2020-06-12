import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  button: {
    margin: "5px 0 0",
    height: 44,
    background: "#2b2d2d",
    fontWeight: "bold",
    color: "#fff",
    border: 0,
    borderRadius: 4,
    fontSize: 16,
    padding: 10,
    transition: "background 0.2s",
    ":hover": {
      background: "#434747",
    },
  },
  default: {
    height: 25,
    background: "#2b2d2d",
    color: "#fff",
    transition: "background 0.2s",
    ":hover": {
      background: "#434747",
    },
  },
  success: {
    color: "#fff",
    backgroundColor: "#28a745",
    borderColor: "#28a745",
    transition: "background 0.2s",
    ":hover": {
      backgroundColor: "#218838",
      borderColor: "#1e7e34",
    },
  },
  error: {
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
