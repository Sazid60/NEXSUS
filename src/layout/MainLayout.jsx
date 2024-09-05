import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';

const MainLayout = () => {
    return (
        <div className='bg-[#000105] text-white min-h-screen'>
            <div className="relative h-[800px] bg-cover bg-right-top bg-no-repeat bg-fixed"
                style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 4, 19, 0) 70%, #000413 100%), url('Banner1.jpg')" }}>
                {/* Dimming overlay with z-index to place it behind the content */}
                <div className="absolute inset-0 bg-black/55 z-0"></div>
                <div className="relative z-10">
                    <Navbar />
                    <div className='flex justify-center items-center min-h-[800px]'>
                        <Banner />
                    </div>
                </div>
            </div>


            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
