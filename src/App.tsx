import React from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './main.global.css'
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./shared/context/userContext";
import {PostContextProvider} from "./shared/context/postsContext";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

function AppComponent() {
    return (
        <Provider store={store}>
            <PostContextProvider>
            <UserContextProvider>
                <Layout>
                    <Header/>
                        <Content>
                            <CardsList/>
                        </Content>
                </Layout>
            </UserContextProvider>
            </PostContextProvider>
        </Provider>
    );
}

export const App = hot(() => <AppComponent/>);