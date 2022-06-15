
export const OrdersHistoryCard = (props) => {

    
    return(
        <div>
            <span>{props.restaurant}</span>
            <span>{props.data}</span>
            <span>SUBTOTAL R${props.shipping}</span> {/*????????????????? */}
        </div>
    )
}