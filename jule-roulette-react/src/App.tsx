import React from "react";
import "./App.css";

const names = ["Kathri", "Maria", "Anne", "Niels", "Lasse", "Kathri"];

const App: React.FC = () => {
  return (
    <div className="name-list">
      {names.map((name, index) => (
        <React.Fragment key={index}>
          <span>{name}</span>
          {index !== names.length - 1 && <div className="arrow"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
