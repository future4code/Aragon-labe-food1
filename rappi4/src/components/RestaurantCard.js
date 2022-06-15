import { useNavigate } from "react-router-dom";
import { goToResultPage } from "../routes/Coordinator";

export const RestaurantCard = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        onClick={() => {
          goToResultPage(navigate, props.restaurant.id);
        }}
        width={"50%"}
        src={props.restaurant.logoUrl}
      />
      <p>{props.restaurant.name}</p>
      <p>{props.restaurant.deliveryTime}</p>
      <p>R${props.restaurant.shipping},00</p>
      <hr />
    </div>
  );
};
