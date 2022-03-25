import React from "react";
import { useCookies } from "react-cookie";

const Cokeh = () => {
  const [cookies, setCookie] = useCookies<string>(["user"]);

  function handleCookie() {
    setCookie("user", "ankit", {path: "/"});
  }
  
  return (
    <div className="App">
      <h1>React cookies</h1>
       {cookies.user && <p>{cookies.user}</p>}
      <button onClick={handleCookie}>Set Cookie</button>
    </div>
  );
}

export default Cokeh;