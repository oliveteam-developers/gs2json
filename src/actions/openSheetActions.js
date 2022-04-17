import * as actionTypes from './types/openSheetActionTypes';
import Api from '../shared/api/OpenSheetAPI';

export const getSheetData = () => ({
    type: actionTypes.GET_SHEET_DATA,
});

export const getSheetDataSuccess = (data) => ({
    type: actionTypes.GET_SHEET_DATA_SUCCESS,
    payload: data,
});

export const getSheetDataError = () => ({
    type: actionTypes.GET_SHEET_DATA_ERROR,
});

export const fetchSheetData = ({ id, name }) => {
    return (dispatch) => {
        dispatch(getSheetData());
        return Api.get(`/${id}/${name}`, {}, {})
            .then((res) => {
                dispatch(getSheetDataSuccess(res.data));
            })
            .catch(() => {
                dispatch(getSheetDataError());
            });
    };
};
