import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Bezhbarmack from "../components/Bezhbarmack";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [sorting, setSorting] = React.useState({
    name: "популярности DESC",
    sort: "rating",
  });
  const [category, setCategory] = React.useState(0);

  React.useEffect(() => {
    const categorie = category > 0 ? `category=${category}` : "";
    const sortBy = sorting.sort.replace("-", "");
    const order = sorting.sort.includes("-") ? `asc` : `desc`;

    setIsLoading(true);
    fetch(
      `https://65cc8b82dd519126b83ed8b3.mockapi.io/items?${categorie}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [category, sorting]);
  return (
    <div>
      <div className="flex">
        <Categories value={category} onClickCategory={(i) => setCategory(i)} />
        <Sort value={sorting} OnClickSort={setSorting} />
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
