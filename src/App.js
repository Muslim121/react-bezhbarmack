import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import CSS from "./CSS/style.css";
import Sort from "./components/Sort";
import Bezhbarmack from "./components/Bezhbarmack";
import items from "./assets/bezhbarmack.json";

function App() {
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
