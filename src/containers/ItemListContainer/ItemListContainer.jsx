import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore'


const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [loader,setLoader] = useState(true);

  const {cat} = useParams() //usamos useParams para capturar la url que aparezca en el navegador


//   useEffect(() => {
   
//   const db = getFirestore()
//   const dbQuery = doc(db, 'items', 'OZHNws2Ej0JvAYYQE2tH')
//   getDoc(dbQuery)
//     .then(resp => setProducto({id: resp.id, ...resp.data()}))
//   }, [])

// console.log(producto)

useEffect(()=>{
if (cat) {
  setLoader(true)
  setTimeout(()=>{

    fetch("../../../assets/data/data.json")
      .then(response => response.json())
      .then(response=>setProductos(response.filter((prods)=>prods.category === cat)))
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  },1000)
  
} else {
  setLoader(true)
  setTimeout(()=>{

    fetch("../../../assets/data/data.json")
      .then(response => response.json())
      .then(response=>setProductos(response))
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  },1000)
}

},[cat])



  return (
  <>
      <h2 className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          {greeting}
      </h2>


      {
        loader 
        ? 
        <> <h2>Cargando...</h2> <Spinner animation="border" variant="primary" /> </> 
        :
        <ItemList items={productos}  />
      }

  </>
  )
}

export default ItemListContainer