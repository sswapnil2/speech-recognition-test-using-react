import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import SpeechRecognition from "./recognition";
import "./styles.css";
let recognition = new SpeechRecognition();
function App() {
  const pRef = useRef(null);
  useEffect(() => {
    recognition.onResult();
    let time = 0;

    let timer = setInterval(() => {
      if (time === 50) {
        clearInterval(timer);
      }
      pRef.current.innerHTML = `${time}`;
      time += 1;
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p id="pt" ref={pRef} />
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => recognition.start()}>start</button>
      <button onClick={() => recognition.stop()}>stop</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
