import { useState }  from 'react';
import '../../styles/_menu.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import OpenMenu from './OpenMenu';


const Menu = () => {


   const [openMenu, setOpenMenu] = useState(false);

  
    const openSlidingMenu = () => {
       setOpenMenu(true)
    }

    const closeSlidingMenu = () => {
        setOpenMenu(false)
     }



    return(
        <>
        {openMenu ?  (
            <>
            <FontAwesomeIcon icon="times-circle" className='x-close-icon' onClick={closeSlidingMenu} />
            <OpenMenu  />
        
         </>
        ) : ( <FontAwesomeIcon icon="bars" className='hamburger-icon' onClick={openSlidingMenu} />)}
        </>
    )
}





export default Menu;