import {Link} from 'react-router-dom'
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer'
import banner from '../../../assets/img/banner.png'
import './home.css'

const Home = () => {
    

    return (
        <div className='homeContainer'>

        <img className='banner' src={banner} alt="Home banner"/>

        <p className='homeDesc'> Specialised summer vinyl cycle. <br/>
                                    Limited editions, rarities, 7" singles, LP's, and many more. </p>

            <Link to='/products'>
                <button className='startBtn'>
                    START SHOPPING
                </button>
            </Link>

        

        </div>
    )
}

export default Home