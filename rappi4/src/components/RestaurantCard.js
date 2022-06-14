export const RestaurantCard = (props) => {
  return (
    <div>
      <img width={"50%"} src={props.restaurant.logoUrl} />
      <p>{props.restaurant.name}</p>
      <p>{props.restaurant.deliveryTime}</p>
      <p>R${props.restaurant.shipping},00</p>
    </div>
  );
};
