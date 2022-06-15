
export const OrdersHistoryCard = (props) => {

    const converterData = (timeStamp) => {
    let time = new Date(timeStamp)
      let day = time.getDate().toString().padStart(2,'0')
      let month = (time.getMonth()+1).toString().padStart(2,'0')
      let year = time.getFullYear()
  
      return `${day}/${month}/${year}`
    }


    const orders = props.dados.orders

    return (
        <div>
            {orders?.map((order) => {
        return (
            <section key={order.restaurantName}>
                <span>{order.restaurantName}</span>
                <br/>
                <span>{converterData(order.createdAt)}</span>
                <br/>
                <span>SUBTOTAL R${order.totalPrice}</span>
                <hr/>
            </section>
        )
    })}
        </div>
    )
}

{/* <div>
    {orders.map((order) => {
        return (
            <section>
                <span>{order.restaurantName}</span>
                <span>{order.createdAt}</span>
                <span>SUBTOTAL R${order.totalPrice}</span>
            </section>
        )
    })}

</div> */}