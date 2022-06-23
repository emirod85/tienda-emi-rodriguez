import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import './itemDetailContainer.css'

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

    },[idDetail]);




  return (
    <div className="itemDetailContainer">
      {loader ? (
        <>
            <Spinner className='spinnerStyle' animation="border" variant="secondary" />
            
        </>
      ) : (
        <>
        
        <ItemDetail item={item} />
        </>
      )}
    </div>
  );
}
