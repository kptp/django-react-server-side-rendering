import "text-encoding-polyfill";
import React from "react";
import { hydrateRoot } from "react-dom/client";

import { App } from "./App";

declare var username: string;

function render() {
  const div = document.getElementById("root");
  if (!div) {
    return alert("fug :DDD");
  }
  return hydrateRoot(div, <App username={username} />);
}

render();
