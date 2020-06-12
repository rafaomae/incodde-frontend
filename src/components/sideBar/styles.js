import { StyleSheet } from "aphrodite/no-important";

export default StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "25%",
    padding: "3%",
    background: "#f2f2f2",
  },
  img: {
    maxWidth: 70,
    paddingBottom: 30,
  },
  logout: {
    fontSize: 12,
    cursor: "pointer",
  },
  ul: {
    fontSize: 15,
    display: "flex",
    flexDirection: "column",
    ":nth-child(n) > li": {
      paddingTop: 30,
      marginBottom: 4,
    },
    marginBottom: 30,
  },
  link: {
    ":nth-child(n) > svg": {
      verticalAlign: "middle",
    },
    ":nth-child(n) > span": {
      verticalAlign: "middle",
      marginLeft: 7,
    },
  },
  admin: {
    marginBottom: 30,
  },
  ulAdmin: {
    paddingTop: 20,
    ":nth-child(n) > li": {
      paddingTop: 10,
    },
  },
});
