export default function CarCard({ car }) {
  return (
    <div className="card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.brand}</p>
      <strong>${car.price}</strong>
    </div>
  );
}
