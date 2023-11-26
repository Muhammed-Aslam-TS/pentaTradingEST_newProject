import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';

interface NavbarProps {
    activeLink: string; // Change the type based on what 'activeLink' should be
}

const Navbar: React.FC<NavbarProps> = ({ activeLink }) => {
    return (
        <div>
            <div className='hidden lg:block'>
                <TopNavbar />
            </div>
            <BottomNavbar activeLink={activeLink} />
        </div>
    );
}

export default Navbar;
