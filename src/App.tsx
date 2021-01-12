import React, {useState} from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './main.global.css'
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext"
import {UserContextProvider} from "./shared/context/userContext";
import {PostContextProvider} from "./shared/context/postsContext";
import {commentContext} from "./shared/context/commentContext";


function AppComponent() {
    const [commentValue, setCommentValue] = useState('')
    const [token] = useToken();

    const CommentProvider = commentContext.Provider;

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue
        }}>
        <tokenContext.Provider value={token}>
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
        </tokenContext.Provider>
        </CommentProvider>

    );
}

export const App = hot(() => <AppComponent/>);