import Item from "./Item"
import { Spinner } from "react-bootstrap";

const ItemList = ({items}) => {

  return (
    <div>

 {items.length ? (
        items.map((prod)=> < Item props = {prod}/>)
      ) : (
        <>
        <div className="center">
          Cargando...
        </div>
        <Spinner animation="border" variant="primary" />
        </>
      
      )}

    </div>
  )
}

export default ItemList