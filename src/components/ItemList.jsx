import Item from "./Item"


const ItemList = ({items}) => {

  return (
    <div>

 {items.map((prod)=> < Item props = {prod}/>)}

    </div>
  )
}

export default ItemList