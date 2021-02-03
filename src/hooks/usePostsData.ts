import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducer";

interface IPostData {
    posts?: [];
}

export function usePostsData() {
    const [data, setData] = useState<IPostData>({})
    const token = useSelector<RootState>(state => state.st.data?.token);

    useEffect(() => {
        axios.get('https://www.reddit.com/r/popular/best.json?sr_detail=true', {})
            .then((resp) => {
                const postData = resp.data;
                setData({posts: postData.data.children});
            })
            .catch(console.log)
    }, [token])

    return [data]
}