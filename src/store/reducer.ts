import {ActionCreator, AnyAction, Reducer} from "redux";
import {
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";
import {SAVE_TOKEN} from "./st/actions";
import {stReducer, TokenState} from "./st/reduser";

export type RootState = {
    commentText: string;
    token: string;
    me: MeState;
    st: TokenState;

}

const initialState = {
    commentText: 'Привет SkillBox',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    },
    st: {
        data: {},
    },
}

const UPDATE_COMMENT = 'UPDATE_COMMENT'
const SET_TOKEN = 'SET_TOKEN'

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
})

export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token
})


export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            };
        case SAVE_TOKEN:
            return {
                ...state,
                st: stReducer(state.st, action)
            }
        default:
            return state
    }
}