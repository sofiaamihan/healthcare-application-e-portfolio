import React from 'react';
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;

export default function Progress(){
    const navigate = useNavigate();

    return(
        <Layout className='layout'>
            <h1>Progress</h1>
        </Layout>
    )
};