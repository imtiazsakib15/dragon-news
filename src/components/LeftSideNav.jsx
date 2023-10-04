import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3 className="text-3xl font-semibold">All Caterogy</h3>
      <div className="space-y-4 mt-10 text-lg font-semibold text-gray-400">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="block px-8 py-1 hover:text-gray-900"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
