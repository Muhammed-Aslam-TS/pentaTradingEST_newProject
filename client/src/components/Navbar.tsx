
import BottomNavbar from './BottomNavbar';
import TopNavbar from './TopNavbar'


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