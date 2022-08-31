import Image from 'next/image';
import React from 'react';
import {Card} from "react-bootstrap";


const Brand = ({data}) => {
    const {img}=data;
    return (
        <Card className='p-0 overflow-hidden h-100  ' style={{border:"0px"}}>
            <div className='p-3 overflow-hidden rounded bg-light text-center brandSliders'>
                {/* <Image src="/Images/Brand/brand-1-1.png" width="100" height="100"/> */}
                <Image src={img} alt="image"/>

            </div>
            
        </Card>
    );
};

export default Brand;