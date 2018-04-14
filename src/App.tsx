import * as React from 'react';
import './App.css';

import { Card, Input, Layout, Menu } from 'antd';
const { Item } = Menu;
const { Header, Content, Sider } = Layout;

import { Heatmap, heatmapDataMapper } from 'sharkparty-heatmap';
import RawData from './mock_data';

import 'antd/dist/antd.css'

const App = () => (
    <Layout>
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}
            >
                <Item>
                    <Input
                        placeholder="Search This Repo"
                    />
                </Item>
                <Item>
                    Pull requests
                </Item>
                <Item>
                    Issues
                </Item>
                <Item>
                    Marketplace
                </Item>
                <Item>
                    Explore
                </Item>
            </Menu>
        </Header>
        <Layout>
            <Sider className="side-menu" style={{ background: '#fff' }}>
                <img className="avatar" src="//avatars3.githubusercontent.com/u/24923730?s=460&v=4" alt="Shark Party"/>
                <h2>Kameron</h2>
                <p>sharkparty</p>
            </Sider>
            <Layout className="content">
                <Content>
                    <h3>Repos</h3>
                    <div className="repos-container">
                        {[1, 2, 3].map(item => (
                            <Card key={item} title={`Repo ${item}`} bordered={false} style={{ width: 300 }}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Ut accumsan viverra risus, id vehicula sapien tristique eget.
                                    Fusce ut ante semper, dignissim dui eu, tincidunt nisi.</p>
                            </Card>
                        ))}
                    </div>
                    <br/><br/>
                    <h3>Commit Activity</h3>
                    <Heatmap
                        data={heatmapDataMapper({ default: RawData })}
                    />
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default App;
