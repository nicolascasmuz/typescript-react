import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./button";

class Home extends React.Component<any> {
  render() {
    return <Button>Push</Button>;
  }
}


const domNode = document.getElementById("container");
let root = createRoot(domNode);
root.render(<Home />);
