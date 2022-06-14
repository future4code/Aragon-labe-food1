import { RestaurantCard } from "../../components/RestaurantCard";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";

export default function HomePage() {
  useProtectedPage();

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
