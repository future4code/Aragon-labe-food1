import styled from "styled-components";

const CardOrder = styled.section`
  border-radius: 6px;
  border: 1px solid #b8b8b8;
  margin-bottom: 5%;
  padding: 5% 0 0 5%;

  p {
    font-size: 80%;
  }

  span {
    color: #e86e5a;
  }
`;

export const OrdersHistoryCard = (props) => {
  const converterData = (timeStamp) => {
    let time = new Date(timeStamp);
    let day = time.getDate().toString().padStart(2, "0");
    let month = (time.getMonth() + 1).toString().padStart(2, "0");
    let year = time.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const orders = props.dados.orders;

  return (
    <div>
      {orders?.map((order) => {
        return (
          <CardOrder key={order.restaurantName}>
            <span>{order.restaurantName}</span>
            <br />
            <p>{converterData(order.createdAt)}</p>
            <h4>SUBTOTAL R${order.totalPrice}</h4>
          </CardOrder>
        );
      })}
    </div>
  );
};
