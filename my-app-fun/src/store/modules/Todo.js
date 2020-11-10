import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

export const INSERTLIST = 'INSERTLIST';
export const EDITLIST = 'EDITLIST';
export const DELETELIST = 'DELETELIST';
export const UPDATEBTNSTATE = 'UPDATEBTNSTATE';
export const BACKBTN = 'BACKBTN';

let listId = 5;
export const insetList = createAction('INSERTLIST', test => test);
export const editList = createAction('EDITLIST', data => data);
export const deleteList = createAction('DELETELIST', id => id);
export const updateBtnState = createAction('UPDATEBTNSTATE', id => id);
export const backbtn = createAction('BACKBTN', data => data);

const initState = [
    { title: 'Buy car signal lights', id: 1, btnCheck: true },
    { title: 'Return bicycle brakes', id: 2, btnCheck: false },
    { title: 'Buy A4 papers', id: 3, btnCheck: true },
    { title: 'Install grarge shed', id: 4, btnCheck: false }
]

//리듀서 생성
export default handleActions({
    [INSERTLIST]: (initState, action) => {
        return produce(initState, draft => {
            draft.push({ title: action.payload, id: listId++, btnCheck: false})
        })
    },
    [DELETELIST]: (initState, action) => {
        return produce(initState, draft => {
            const idx = draft.findIndex((info) => info.id === action.payload);
            draft.splice(idx, 1)
        })
    },
    [EDITLIST]: (initState, action) => {
        return produce(initState, draft => {
            const idx = draft.findIndex((info) => info.id === action.payload.data.id);
            draft[idx].title = action.payload.value;
        })
    },
    [UPDATEBTNSTATE]: (initState, action) => {
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
