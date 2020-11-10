import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

export const INSERT_LIST = "todo/EINSERT_LIST";
export const EDIT_LIST = 'todo/EDIT_LIST';
export const DELETE_LIST = 'todo/DELETE_LIST';
export const UPDATE_EDIT_STATE = 'todo/UPDATE_EDIT_STATE';

let listId = 5;
export const insetList = createAction(INSERT_LIST, test => test);
export const editList = createAction(EDIT_LIST, data => data);
export const deleteList = createAction(DELETE_LIST, id => id);
export const updateEditState = createAction(UPDATE_EDIT_STATE, id => id);

const initState = [
    { title: 'Buy car signal lights', id: 1, btnCheck: true },
    { title: 'Return bicycle brakes', id: 2, btnCheck: false },
    { title: 'Buy A4 papers', id: 3, btnCheck: true },
    { title: 'Install grarge shed', id: 4, btnCheck: false }
]

//리듀서 생성
export default handleActions({
    [INSERT_LIST]: (initState, action) => {
        return produce(initState, draft => {
            draft.push({ title: action.payload, id: listId++, btnCheck: false})
        })
    },
    [DELETE_LIST]: (initState, action) => {
        return produce(initState, draft => {
            const idx = draft.findIndex((info) => info.id === action.payload);
            draft.splice(idx, 1)
        })
    },
    [EDIT_LIST]: (initState, action) => {
        return produce(initState, draft => {
            const idx = draft.findIndex((info) => info.id === action.payload.data.id);
            draft[idx].title = action.payload.value;
        })
    },
    [UPDATE_EDIT_STATE]: (initState, action) => {
        return produce(initState, draft => {
            const idx = draft.findIndex((info) => info.id === action.payload);
            if (draft[idx].btnCheck) {
                draft[idx].btnCheck = false
            } else {
                draft[idx].btnCheck = true
            }
        })
    }
}, initState)
