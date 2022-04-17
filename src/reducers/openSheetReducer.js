import * as actionTypes from '../actions/types/openSheetActionTypes';

const initialState = {
    loading: false,
    sheetData: null,
};

const openSheetReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SHEET_DATA: {
            return {
                ...state,
                loading: true,
            };
        }
        case actionTypes.GET_SHEET_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                sheetData: action.payload,
            };
        }
        case actionTypes.GET_SHEET_DATA_ERROR: {
            return {
                ...state,
                loading: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default openSheetReducer;
