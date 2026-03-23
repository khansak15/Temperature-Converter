import { useState } from "react";

function Temp() {
  const [c, setC] = useState("");
  const [f, setF] = useState("");
  const [history, setHistory] = useState([]);

  const convertToF = (val) => {
    const res = (val * 9) / 5 + 32;
    setF(res);
    setHistory([...history, `${val}C = ${res}F`]);
  };

  return (
    <div>
      <input onChange={(e) => setC(e.target.value)} />
      <button onClick={() => convertToF(c)}>Convert</button>
      <p>{f}</p>

      {history.map((h, i) => (
        <p key={i}>{h}</p>
      ))}
    </div>
  );
}

export default Temp;