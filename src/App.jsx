import { useState, useEffect } from "react";
import Stat from "./Stat";
import data from "./data.json";

function App() {
  //State to store the data
  const [stats, setStats] = useState(null);

  useEffect(() => {
    setStats(data);
  }, [stats]);

  return (
    <section className="App component">
      <div className="result">
        <div className="result-box">
          <h1>Your result</h1>
          <div className="circle">
            <h3>76 </h3>
            <span>of 100</span>
          </div>
          <div className="info">
            <h2>Great</h2>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
      </div>
      <div className="summary">
        <h4>Summary</h4>
        <div className="stats-container">
          {stats?.map((item) => (
            <Stat
              key={item.category}
              icon={item.icon}
              category={item.category}
              score={item.score}
              color={item.color}
            />
          ))}
        </div>
        <button className="button">Continue</button>
      </div>
    </section>
  );
}

export default App;
