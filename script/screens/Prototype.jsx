import React from 'react';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;

export default function Prototype(){
    const navigate = useNavigate();

    return(
        <Layout className='layout'>
            <h1>Prototype</h1>
        </Layout>
    )
};