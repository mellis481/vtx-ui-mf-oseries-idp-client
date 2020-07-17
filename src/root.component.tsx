import * as React from "react";

export default function Root(props) {
  const { name, authInfo } = props;
  return (
    <>
      <h2>{name} microfrontend</h2>
      {!authInfo ? (
        <div>No auth info provided!</div>
      ) : (
        <pre>{JSON.stringify(JSON.parse(authInfo), null, 2)}</pre>
      )}
    </>
  );
}
