import { RestaurantCard } from "../../components/RestaurantCard";
import useRequestData from "../../hooks/UseRequestData";

export default function HomePage() {
  const [data] = useRequestData("rappi4A/restaurants", []);

  console.log(data);
  return (
    <div>
      <input placeholder="Restaurante"></input>
      <hr />
      {data.restaurants?.map((item) => {
        return <RestaurantCard restaurant={item} />;
      })}
    </div>
  );
}
