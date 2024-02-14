import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import CSS from "./CSS/style.css";
import Sort from "./components/Sort";
import Bezhbarmack from "./components/Bezhbarmack";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://65cc8b82dd519126b83ed8b3.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="flex">
        <Categories />
        <Sort />
      </div>
      <h2 id="title-of">Все бежбармаки</h2>
      <div className="flex-wrap">
        {items.map((obj) => (
          <Bezhbarmack key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
