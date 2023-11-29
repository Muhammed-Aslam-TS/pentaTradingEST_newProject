
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer2 from '../components/Footer2'
import { useEffect } from 'react';
import ScrollTop from '../components/ScrollTop';

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <Navbar activeLink={'gallery'}/>
        <Header/>
       
        <Footer2/>
        <ScrollTop/>
    </div>
  )
}

export default GalleryPage