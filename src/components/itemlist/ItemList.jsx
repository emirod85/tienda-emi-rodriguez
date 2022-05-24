import Item from "../Item/Item"


const ItemList = ({items}) => {

  return (
    <div>

 {items.map((prod)=> < Item props = {prod}/>)}

    </div>
  )
}

export default ItemList