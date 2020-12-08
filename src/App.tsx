import React, {useEffect, useState} from 'react';
import { hot } from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './main.global.css'
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";

function AppComponent() {
    const [token] = useToken();
    return (
       <Layout>
           <Header token={token}/>
           <Content>
              <CardsList />
              <br/>
           </Content>
       </Layout>

    );
}

export const App = hot(() => <AppComponent/>);