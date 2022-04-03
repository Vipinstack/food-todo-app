import './MenuCss.css';
import RestaurantIcon from '@material-ui/icons/Restaurant';


const Menu = () => {
    return (
        <div className="menu">
           <span className='menu-res'>
            Menu <RestaurantIcon />
            </span>
        </div>
    );
}

export default Menu;