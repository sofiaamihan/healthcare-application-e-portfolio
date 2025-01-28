import React from 'react';
import { Layout, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Content } = Layout;

export default function About(){
    const navigate = useNavigate();

    return(
        <Layout className='layout'>
            <Row>
            <h1>About</h1>
            </Row>
        </Layout>
    )
};