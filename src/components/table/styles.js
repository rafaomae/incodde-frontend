import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  table: {
    width: "100%",
    marginBottom: "1rem",
    color: "#212529",
    border: "1px solid #dee2e6",
    marginTop: 30,
  },
  cell: {
    padding: ".75rem",
    border: "1px solid #dee2e6",
    verticalAlign: "bottom",
    borderBottom: "2px solid #dee2e6",
    borderBottomWidth: 2,
    textAlign: "center",
  },
  cellAction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
