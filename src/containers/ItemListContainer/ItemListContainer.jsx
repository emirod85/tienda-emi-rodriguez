import ItemList from "../../components/ItemList/ItemList";
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore'
import './ItemListContainer.css'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [loader,setLoader] = useState(true);
  const {cat} = useParams();
  const title =  cat ? cat.toUpperCase() : "ALL PRODUCTS"
  

useEffect(()=>{

  setLoader(true)

  const db = getFirestore()
  const queryCollection = collection(db, 'items')

  const queryCollectionFilter = cat ? query(queryCollection, where('category', '==' , cat)) : queryCollection

  
  getDocs(queryCollectionFilter)
  .then(resp => setProductos(resp.docs.map(item=>({id: item.id, ...item.data()}))))
  .catch(err => console.log(err))
  .finally(() => setLoader(false))
  
},[cat])


  return (
  <>
      
      {
        loader 
        ? 
        <div className='listContSpinner'> <Spinner className='spinnerStyle' animation="border" variant="primary" /> </div> 
        :
        <div className="itemListContainer">

            <div className='titleContainer'>
                <h1 className='titleStyle'>
                  {title}
                </h1>
            </div>

            <ItemList items={productos}  />

        </div>
      }

  </>
  
  )
}

export default ItemListContainer