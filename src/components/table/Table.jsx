import React from "react";
import { css } from "aphrodite/no-important";

import styles from "./styles";

export const Table = ({ header, children }) => {
  return (
    <table className={css(styles.table)}>
      <thead>
        <tr>
          {header.map((h) => (
            <th key={h} className={css(styles.cell)}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export const TableColumn = ({ children, colSpan, multiAction }) => {
  return (
    <td
      className={css(styles.cell, multiAction ? styles.cellAction : "")}
      colSpan={colSpan}
    >
      {children}
    </td>
  );
};
