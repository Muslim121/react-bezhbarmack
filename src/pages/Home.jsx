import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Bezhbarmack from "../components/Bezhbarmack";
import Skeleton from "../components/Skeleton";

const Home = () => {
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
    window.scroll(0, 0);
  }, []);
  return (
    <div>
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
};

export default Home;
