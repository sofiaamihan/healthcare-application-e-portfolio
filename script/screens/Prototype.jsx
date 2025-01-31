import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

export default function Prototype(){
    const [selectedKey, setSelectedKey] = useState('1');
        
    function getItem(label, key) {
        return {
            key,
            label,
        };
        }

    const items = [
        getItem('Interactive High-Fi Prototype', '1'),
        getItem('Project Proposal', '2'),
        getItem('Self-Directed Learning Report', '3'),
        getItem('Test Report', '4'),
        getItem('Powerpoint Presentation Slides', '5'),
        getItem('Final Working Application', '6'),
    ]

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };

    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return <div>Uno</div>;
            case '2':
                return <div>Dos</div>;
            case '3':
                return <div>Tres</div>;
            case '4':
                return <div>Apat</div>;
            case '5':
                return <div>Lima</div>;
            case '6':
                return <div>6</div>;
            default:
                return <div>Select a tab to see content</div>;
        }
    };

    return(
        <Layout className='layout'>
            <Content className='context-box' style={{
                padding: '64px',
            }}>
                <Layout style={{
                    padding: '24px',
                    background: "#D0DDD0",
                    borderRadius: 24,
                    height: '70vh'
                }}>
                    <Sider 
                    style={{
                        background: "#FFFFFF",
                        borderRadius: 16,
                    }}
                    width={260}
                    >
                        <Menu 
                            defaultSelectedKeys={['1']} 
                            selectedKeys={[selectedKey]} 
                            onClick={handleMenuClick} 
                            items={items} 
                            style={{
                                padding:'16px 0px',
                                background: "#FFFFFF",
                                borderRadius: 16,
                            }}
                        />
                    </Sider>
                    <Content
                        style={{
                        padding: '0 24px',
                        minHeight: 280,
                        }}
                    >
                        {renderContent()}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
};