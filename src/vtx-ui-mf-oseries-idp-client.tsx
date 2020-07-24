import "./set-public-path";
import * as React from "react";
import * as ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Root } from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

function domElementGetter() {
  let el = document.getElementById("mf-content");
  if (!el) {
    el = document.createElement("div");
    el.id = "mf-content";
    document.body.appendChild(el);
  }
  return el;
}

export const { bootstrap, mount, unmount } = lifecycles;
