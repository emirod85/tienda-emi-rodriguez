
import { Link} from 'react-router-dom';
import './item.css'

const Item = ({props}) => {

  const { id, description, price, pictureUrl, stock, title, subtitle, category } = props;

  return (
    <>
          
          <div className='itemContainer' key = {id}>
         
            <img className='img' variant="top" src={pictureUrl} />
            
                <h2 className='title'>{title}</h2>
                <h2 className='subtitle'>{subtitle}</h2>
                <h3 className='category'>{category}</h3>
                          
                <h3 className='price'>U$D {price}</h3>

      <Link className='none' to={`/item/${id}`}>
                <button className='itemButton'>VIEW MORE</button>
      </Link>
                  
                <h3 className='stock'>Stock: {stock} units</h3>
            


            
          </div>

    </>

  )
}

export default Item