import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import image1 from '../../../assets/Supply/413s0kKT9JL.jpg';
import image2 from '../../../assets/Supply/INFRARED-DIGITAL-THERMOMETER.jpg';
import image3 from '../../../assets/Supply/pressuremeter.jpg';
import image4 from '../../../assets/Supply/thermo.jpg';
import image5 from '../../../assets/Supply/omran-3.jpg';
import ProductCard from '../../../Components/PoductCard/ProductCard';

const SuppliesHome = () => {
    const supplies = [
        {
            id: 1,
            title: 'Jumper Pulse Oximeter',
            type: 'Device',
            img: image1,
            price: 890.00,
        },
        {
            id: 2,
            title: 'Infrared Digital Thermomteter',
            type: 'Device',
            img: image2,
            price: 2770.00,
        },
        {
            id: 3,
            title: 'ALPK2 Blood Pressure Machine with Stethoscope',
            type: 'Device',
            img: image3,
            price: 2100,
        },
        {
            id: 4,
            title: 'Thermometer',
            type: 'Device',
            img: image4,
            price: 170.00,
        },
        {
            id: 5,
            title: 'OMRON JPN-500 (Digital Blood Pressure Machine)',
            type: 'Device',
            img: image5,
            price: 5100.10,
        },
    ]
    return (
        <div className='max-w-6xl mx-auto my-5 relative'>
            <h3 className='text-4xl font-bold text-center lg:text-left mb-3'>Medical Supplies & Equipment</h3>
            <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-6 py-8 px-12 sm:px-0 cursor-pointer'>
                {
                    supplies.map(product => <ProductCard
                        key={product.id}
                        product={product}>
                    </ProductCard>)
                }
            </div>
            <div className='text-center md:absolute top-0 right-0'>
                <Link to='/supplies-equipment'><PrimaryButton classes={`btn-sm normal-case hover:scale-105 duration-500`}><span className='text-xl'>View all</span></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default SuppliesHome;