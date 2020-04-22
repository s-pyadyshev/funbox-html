import React from "react";
import "./App.scss";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <h1>Ты сегодня покормил кота?</h1>
          <ProductList />
        </div>
      </main>
    </div>
  );
}

export default App;
