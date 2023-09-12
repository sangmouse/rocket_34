import React from "react";

function Message(props: { message: string }) {
  const { message } = props;

  return (
    <>
      <br />
      <p>{message}</p>
    </>
  );
}

export { Message };
