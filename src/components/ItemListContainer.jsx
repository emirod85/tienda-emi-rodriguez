import ItemCount from "./ItemCount"


const ItemListContainer = ({categoria, name, price, img, greeting}) => {
  return (
<>
    <h2 className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        {greeting}
    </h2>

    <div className="item">
            <img className="item__img" src={" "} alt="" />
            <div className="item__filter"></div>
            <div className='item__info'>
             
                <ItemCount name={name} price={price} initial={1} stock={6} onAdd={(quantity)=>console.log(`${quantity} unidad/es de ${name} agregada/s al pedido`)}/>
            </div>
        </div>

</>
  )
}

export default ItemListContainer

