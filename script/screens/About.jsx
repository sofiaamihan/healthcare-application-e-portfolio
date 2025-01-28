import React from 'react';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;

export default function About(){
    const navigate = useNavigate();

    return(
        <Layout className='layout'>
            <h1>About</h1>
        </Layout>
    )
};