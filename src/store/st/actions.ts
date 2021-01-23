import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import axios from "axios";
import {meRequest, meRequestError, meRequestSuccess} from "../me/actions";

export interface ITokenData {
    token?: string;
}

export const SAVE_TOKEN = 'SAVE_TOKEN';

export type SaveTokenAction = {
    type: typeof SAVE_TOKEN;
    data?: ITokenData;
}

export const saveToken: ActionCreator<SaveTokenAction> = (data: ITokenData) => ({
    type: SAVE_TOKEN,
    data
});


export const stRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch,getState) => {
    dispatch(saveToken({token: window.__token__}))
}