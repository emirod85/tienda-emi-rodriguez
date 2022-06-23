import { Link } from "react-router-dom"
import '../ItemCount/ItemCount.css'

const ActionButton = () => {
  return (
    <div>
     
        <Link to={'/products'}>
            <button className='btnCkout'>
                KEEP SHOPPING
            </button> 
        </Link>

        <Link to={'/cart'}>
            <button className='btnCkout'>
                CHECK OUT
            </button> 
        </Link>
     
        
    </div>
  )
}

export default ActionButton