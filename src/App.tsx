import React, {useEffect, useState} from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './main.global.css'
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./shared/context/userContext";
import {PostContextProvider} from "./shared/context/postsContext";
import {applyMiddleware, createStore} from "redux";
import {Provider, useDispatch} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducer";
import thunk from "redux-thunk";
import {BrowserRouter, Route} from "react-router-dom";
import {Post} from "./shared/Post";
import {saveToken} from "./store/st/actions";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

function AppComponent() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Provider store={store}>
            {mounted && (
                <BrowserRouter>
                    <PostContextProvider>
                        <UserContextProvider>
                            <Layout>
                                <Header/>
                                <Content>
                                    <CardsList/>
                                    <Route path="/posts/:id">
                                        <Post/>
                                    </Route>
                                </Content>
                            </Layout>
                        </UserContextProvider>
                    </PostContextProvider>
                </BrowserRouter>
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent/>);