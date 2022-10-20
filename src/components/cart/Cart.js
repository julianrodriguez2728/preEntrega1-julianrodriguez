import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = ()=>{
    const {cart,  deleteAll}= useContext(CartContext);

    return(
        <div>
            {
                cart.map ((prod)=>{
                    return(
                           <div 
                           key={prod.id} 
                           className="contenedor-carrito1">
                        <img src={prod.img} alt={prod.title} />
                        <div className="contenedor-carrito2">
                            <h2>{prod.title}</h2>
                            <h3>$ {prod.price}</h3>
                            <h3>cantidad: {prod.cantidad}</h3>
                            <h3>subtotal: ${prod.price*prod.cantidad}</h3>
                        </div>
                        <button onClick={deleteAll} className="borrar">Borrar todo</button>
                    </div>
                       ) 
                })
            }
        </div>
    )
}
export default Cart