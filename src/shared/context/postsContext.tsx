import React from "react";
import {usePostsData} from '../../hooks/usePostsData'


export interface IPostContextData {
    posts?: any
}

export const postsContext = React.createContext<IPostContextData>({})


export function PostContextProvider({children}: {children: React.ReactNode}) {
    const [data] = usePostsData()
    return (
        <postsContext.Provider value={data}>
            {children}
        </postsContext.Provider>
    )
}