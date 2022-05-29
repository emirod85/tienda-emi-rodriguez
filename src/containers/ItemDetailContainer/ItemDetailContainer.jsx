import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";


export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loader, setLoader] = useState(true);
  const {idDetail} = useParams()

  
   useEffect(() => {
        setLoader(true)
        const db = getFirestore();
        const dbQuery = doc(db, 'items', idDetail);
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    },[idDetail]); //me parece que no hace falta poner idDetail aqui, funciona de todas formas


  // useEffect(() => {
          
  //     setTimeout(() => {
  //       setLoader(true)
  //       fetch("../../../assets/data/data.json")
  //         .then((response) => response.json())
  //         .then((itemsList) => itemsList.find((el) => el.id === idDetail))
  //         .then((data) => setItem(data))
  //         .catch((err) => console.log(err))
  //         .finally(() => setLoader(false));
  //     }, 1000);

  // }, [idDetail]);



  return (
    <div className="itemDetailContainer">
      {loader ? (
        <>
          <h2>Cargando...</h2> <Spinner animation="border" variant="primary" />
        </>
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
}
