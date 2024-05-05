import "text-encoding-polyfill";
import React from "react";
import { hydrateRoot } from "react-dom/client";

import { App } from "./App";

declare var serverProps: string;

function render() {
  const div = document.getElementById("root");
  if (!div) {
    return alert("fug :DDD");
  }
  const props: ServerProps = JSON.parse(serverProps);
  return hydrateRoot(div, <App {...props} />);
}

render();
