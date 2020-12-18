import React from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './main.global.css'
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext"
import {userContext} from "./shared/context/userContext";
import {UserContextProvider} from "./shared/context/userContext";

function AppComponent() {
    const [token] = useToken();

    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header/>
                    <Content>
                        <CardsList/>
                    </Content>
                </Layout>
            </UserContextProvider>
        </tokenContext.Provider>

    );
}

export const App = hot(() => <AppComponent/>);