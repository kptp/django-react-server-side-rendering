import "text-encoding-polyfill";
import React from "react";
import { renderToString } from "react-dom/server";

import { App } from "./App";

function render({ username }: { username: string }): string {
  return renderToString(<App username={username} />);
}

Polyglot.export("Render", render);
