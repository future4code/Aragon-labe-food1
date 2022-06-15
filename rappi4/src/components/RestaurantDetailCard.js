export const RestaurantDetailCard = (props) => {
  const restaurant = props.detail.restaurant;

  console.log(props.detail);

  return (
    <div>
      <img width={"50%"} src={restaurant?.logoUrl} />
      <p>{restaurant?.name}</p>
      <p>
        {restaurant?.deliveryTime - 10}-{restaurant?.deliveryTime} min
      </p>
      <p>Frete R${restaurant?.shipping},00</p>
      <p>{restaurant?.address}</p>
      <h3>Menu</h3>
      <hr />
      {restaurant?.products.map((product) => {
        return (
          <div>
            <img width="30%" src={product.photoUrl} />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button>Adicionar ao carrinho</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
