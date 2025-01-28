import React, {useState} from 'react';
import { Layout, Row, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Content, Sider } = Layout;

export default function About(){
    const [selectedKey, setSelectedKey] = useState('1');
    
    function getItem(label, key) {
        return {
          key,
          label,
        };
      }

    const items = [
        getItem('About Me', '1'),
        getItem('Project', '2'),
        getItem('Context', '3'),
        getItem('Proposal', '4'),
        getItem('Learning Contract', '5'),
    ]

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };

    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return <div>About Me Content</div>;
            case '2':
                return <div>Project Content</div>;
            case '3':
                return <div>Context Content</div>;
            case '4':
                return <div>Proposal Content</div>;
            case '5':
                return <div>Learning Contract Content</div>;
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
                    <Sider style={{
                        background: "#FFFFFF",
                        borderRadius: 16,
                    }}>
                        <Menu 
                            defaultSelectedKeys={['1']} 
                            selectedKeys={[selectedKey]} 
                            onClick={handleMenuClick} 
                            items={items} style={{
                                padding:'16px 0px',
                                background: "#FFFFFF",
                                borderRadius: 16,
                        }}/>
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