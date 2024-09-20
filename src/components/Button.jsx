// hello world
// HelloWorld -> pascal case
// helloWorld -> camel case // functions

import { useState } from "react";

// eslint-disable-next-line no-unused-vars
function Button(props) {
  const [label, setLabel] = useState("Click this button");

  function changeLabel() {
    setLabel("Clicked");

    console.log(label);
  }

  return <button className="mx-3 border px-3 py-1 bg-red-500 rounded text-white" onClick={changeLabel}>{label}</button>;
}

export default Button;
