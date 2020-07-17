import * as React from "react";

export default function Root(props) {
  return (
    <>
      <h2>{props.name} is mounted!</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
}
