import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({})
    const token = useSelector<RootState, string>(state => state.token);
    const dispatch = useDispatch()

    useEffect(() => {
        if (token.length < 1) return;

        dispatch({type: 'MY_REQUEST'})
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const userData = resp.data;
                setData({name: userData.name, iconImg: userData.icon_img})
                dispatch({type: 'MY_REQUEST_SUCCESS'})
            })
            .catch((error) => {
                console.log(error)
                dispatch({type: 'MY_REQUEST_ERROR'})
            })
    }, [token])

    return [data]
}