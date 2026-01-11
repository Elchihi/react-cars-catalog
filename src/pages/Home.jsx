import { useState } from "react";
import cars from "../data/Cars.js";
import CarCard from "../components/CarCard.jsx";
import Filter from "../components/Filter.jsx";

export default function Home() {
  const [brand, setBrand] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filteredCars = cars
    .filter((car) => {
      const brandMatch = brand === "All" || car.brand === brand;
      const minMatch = minPrice === "" || car.price >= Number(minPrice);
      const maxMatch = maxPrice === "" || car.price <= Number(maxPrice);
      const searchMatch = car.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return brandMatch && minMatch && maxMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  const resetFilters = () => {
    setBrand("All");
    setMinPrice("");
    setMaxPrice("");
    setSearch("");
    setSort("");
  };

  return (
    <div className="container">
      <h1>Cars Catalog</h1>

      <Filter
        brand={brand}
        minPrice={minPrice}
        maxPrice={maxPrice}
        search={search}
        sort={sort}
        onBrandChange={setBrand}
        onMinPriceChange={setMinPrice}
        onMaxPriceChange={setMaxPrice}
        onSearchChange={setSearch}
        onSortChange={setSort}
        onReset={resetFilters}
      />

      <div className="grid">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}