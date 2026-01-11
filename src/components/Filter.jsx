export default function Filter({
  brand,
  minPrice,
  maxPrice,
  search,
  sort,
  onBrandChange,
  onMinPriceChange,
  onMaxPriceChange,
  onSearchChange,
  onSortChange,
  onReset,
}) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search car..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select value={brand} onChange={(e) => onBrandChange(e.target.value)}>
        <option value="All">All Brands</option>
        <option value="BMW">BMW</option>
        <option value="Audi">Audi</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Porsche">Porsche</option>
        <option value="Ford">Ford</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Tesla">Tesla</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => onMinPriceChange(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => onMaxPriceChange(e.target.value)}
      />

      <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="name-asc">Name A–Z</option>
        <option value="name-desc">Name Z–A</option>
      </select>

      <button onClick={onReset}>Reset</button>
    </div>
  );
}
