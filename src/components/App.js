import React, { useState } from "react";

const App = () => {
  let Time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(Time);

  const UpdateTime = () => {
    Time = new Date().toLocaleTimeString();
    setCtime(Time);
  };

  setInterval(UpdateTime, 1000);
  return <h1>{ctime}</h1>;
};

export default App;
