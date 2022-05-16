import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap";
import ItemDetailContainer from "./ItemDetailContainer";

const arrayProductos = [
  { id : 1, category : 'remeras' , description : 'remera gris' , price : 14 , pictureUrl : '' , stock : 8},
  { id : 2, category : 'remeras' , description : 'remera roja' , price : 22 , pictureUrl : '' , stock : 4},
  { id : 3, category : 'remeras' , description : 'remera azul' , price : 17 , pictureUrl : '' , stock : 12},
  { id : 4, category : 'gorras' , description : 'gorra verde' , price : 25 , pictureUrl : '' , stock : 3},
  { id : 5, category : 'gorras' , description : 'gorra blanca' , price : 23 , pictureUrl : '' , stock : 6},
  { id : 6, category : 'gorras' , description : 'gorra negra' , price : 20 , pictureUrl : '' , stock : 20},
  { id : 7, category : 'pantalones' , description : 'pantalon gris' , price : 35 , pictureUrl : '' , stock : 7},
  { id : 8, category : 'pantalones' , description : 'jean azul' , price : 40 , pictureUrl : '' , stock : 9}
]

const ItemListContainer = ({ greeting}) => {

  const [productos, setProductos] = useState([])
  const [loader,setLoader] = useState(true);


useEffect(()=>{

  fetch("../../public/data/data.json")
  .then(response => response.json())
  .then(response=>setProductos(response))
  .catch(err => console.log(err))
  .finally(() => setLoader(false))

},[])


  return (
<>
    <h2 className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        {greeting}
    </h2>

<ItemDetailContainer />
{loader? <> <h2>Cargando...</h2> <Spinner animation="border" variant="primary" /> </>: <ItemList items={productos}  />}

</>
  )
}

export default ItemListContainer

