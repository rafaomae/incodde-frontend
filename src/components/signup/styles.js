import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  formRowGroup: {
    display: "flex",
    justifyContent: "space-between",
    ":nth-child(n) > div:first-child": {
      width: "80%",
      marginRight: 10,
    },
  },
  rowGroupLogged: {
    width: "30%",
    ":nth-child(n) > div:last-child": {
      width: "65%",
    },
  },
  select: {},
});
