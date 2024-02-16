import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import CSS from "./CSS/style.css";
import Sort from "./components/Sort";
import Bezhbarmack from "./components/Bezhbarmack";
import Skeleton from "./components/Skeleton";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://65cc8b82dd519126b83ed8b3.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
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
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj, index) => <Bezhbarmack key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default App;
