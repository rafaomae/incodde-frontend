import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  img: {
    maxWidth: 70,
    paddingBottom: 30,
  },
  control: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    ":nth-child(1n) > span": {
      fontSize: 16,
      fontWeight: "bold",
      cursor: "pointer",
    },
  },
  selected: {
    borderBottom: "2px solid #2a2a2a",
  },
});
