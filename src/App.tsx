import React from 'react';
import { hot } from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './main.global.css'
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext"

function AppComponent() {

    const {Provider} = tokenContext;
    const [token] = useToken();

    return (
        <Provider value={token}>
       <Layout>
           <Header/>
           <Content>
              <CardsList />
              <br/>
           </Content>
       </Layout>
        </Provider>

    );
}

export const App = hot(() => <AppComponent/>);