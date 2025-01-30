import { Layout } from 'antd';
import React from 'react';
import background from '../../public/background.png';

export default function Home(){
    return(
        <Layout className='layout'>
            <img src={background} alt='background' className='background'></img>
        </Layout>
    );
};