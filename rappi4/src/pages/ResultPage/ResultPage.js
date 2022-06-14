import { useParams } from "react-router-dom";
import { RestaurantDetailCard } from "../../components/RestaurantDetailCard";
import { useRequestData } from "../../hooks/useRequestData";

export default function ResultPage() {
  const params = useParams();

  const [data] = useRequestData(
    `rappi4A/restaurants/${params.restaurantId}`,
    {}
  );

  return (
    <div>
      <RestaurantDetailCard detail={data} />
    </div>
  );
}
