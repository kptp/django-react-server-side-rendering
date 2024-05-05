import "text-encoding-polyfill";
import React from "react";
import { renderToString } from "react-dom/server";

import { App } from "./App";

function render(props: ServerProps): string {
  return renderToString(<App {...props} />);
}

Polyglot.export("Render", render);
