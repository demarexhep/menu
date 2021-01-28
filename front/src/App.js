import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);
function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterMenuItems = (category) => {
    if (category === "all") {
      setMenu(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenu(newItem);
  };
  return (
    <menu>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenuItems={filterMenuItems} />
        <Menu items={menu} />
      </section>
    </menu>
  );
}

export default App;
