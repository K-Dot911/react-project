import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IPostData {
    posts?: [];
}

export function usePostsData() {
    const [data, setData] = useState<IPostData>({})
    const token = useContext(tokenContext)

    useEffect(() => {
        axios.get('https://www.reddit.com/r/popular/best.json?sr_detail=true', {
            // headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const postData = resp.data;
                setData({posts: postData.data.children});
            })
            .catch(console.log)
    }, [token])

    return [data]
}