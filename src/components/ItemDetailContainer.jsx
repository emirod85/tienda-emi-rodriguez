import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Spinner } from "react-bootstrap";

export default function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loader, setLoader] = useState(true);
  const id = 7;

  useEffect(() => {
    setTimeout(() => {
      fetch("../../public/data/data.json")
        .then((response) => response.json())
        .then((itemsList) => itemsList.find((el) => el.id === id))
        .then((data) => setItem(data))
        .catch((err) => console.log(err))
        .finally(() => setLoader(false));
    }, 2000);
  }, []);

  console.log(item);

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
