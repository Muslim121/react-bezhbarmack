import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/Slices/filterSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Bezhbarmack from "../components/Bezhbarmack";
import Skeleton from "../components/Skeleton";

const Home = ({ searchValue }) => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sorting = useSelector((state) => state.filter.sort.sort);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    const categorie = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sorting.replace("-", "");
    const order = sorting.includes("-") ? `desc` : `asc`;

    setIsLoading(true);

    axios
      .get(
        `https://65cc8b82dd519126b83ed8b3.mockapi.io/items?${categorie}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [categoryId, sorting]);

  const bezh = items
    .filter((obj) => {
      if (
        obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    })
    .map((obj, index) => <Bezhbarmack key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div>
      <div className="flex">
        <Categories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 id="title-of">Все бежбармаки</h2>
      <div className="flex-wrap">{isLoading ? skeletons : bezh}</div>
    </div>
  );
};

export default Home;
