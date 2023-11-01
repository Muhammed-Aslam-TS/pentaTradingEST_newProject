
import TopNavbar from './TopNavbar'
import BottomNavbar from './BottomNavbar'


const Navbar = () => {
    return (
        <div>
            <div className='hidden lg:block'>
                <TopNavbar/>
            </div>
            <BottomNavbar/>
        </div>
    );
}

export default Navbar