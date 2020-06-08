import React from "react";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <h1>Dale</h1>
      <div>{children}</div>
    </>
  );
};
export default DefaultLayout;
