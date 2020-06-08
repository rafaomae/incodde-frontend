import { StyleSheet } from "aphrodite/no-important";
const globalSelectorHandler = (selector, _, generateSubtreeStyles) => {
  if (selector[0] !== "*") {
    return null;
  }

  return generateSubtreeStyles(selector.slice(1));
};
const globalExtension = { selectorHandler: globalSelectorHandler };
const { StyleSheet: globalStyleSheet, css: globalCss } = StyleSheet.extend([
  globalExtension,
]);
const GlobalStyles = globalStyleSheet.create({
  globals: {
    "**": {
      margin: 0,
      padding: 0,
      outline: 0,
      boxSizing: "border-box",
      ":focus": {
        outline: 0,
      },
    },
    "*html, body, #root": {
      height: "100%",
    },
    "*body": {
      "-webkit-font-smoothing": "antialiased",
    },
    "*body, input, button": {
      font: "14px 'Roboto', sans-serif",
    },
    "*a": {
      textDecoration: "none",
    },
    "*ul": {
      listStyle: "none",
    },
    "*button": {
      cursor: "pointer",
    },
  },
});
globalCss(GlobalStyles.globals);
