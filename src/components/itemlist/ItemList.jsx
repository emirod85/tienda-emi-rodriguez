import Item from "../Item/Item"
import './itemList.css'

const ItemList = ({items}) => {

  return (
    <div className='listContainer'>
      

        {items.map((prod)=> < Item id={prod.id} props = {prod}/>)}

    </div>
  )
}

export default ItemList