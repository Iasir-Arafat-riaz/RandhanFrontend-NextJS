import Image from 'next/image';
import React from 'react';
import {Card} from "react-bootstrap";


const Brand = ({data}) => {
    const {img}=data;
    return (
        <Card className='p-0 overflow-hidden h-100  ' style={{border:"0px"}}>
            <div className='p-4    brandSliders d-flex align-items-center  justify-content-center'>
                {/* <Image src="/Images/Brand/brand-1-1.png" width="100" height="100"/> */}
                <Image src={img} width={150} height={100} alt="image"/>

            </div>
            
        </Card>
    );
};

export default Brand;