import produce from 'immer';
import { useRef } from 'react';
import { createAction } from 'redux-actions';

//action Type 선언
export const INSERTLIST = 'INSERTLIST';
export const EDITLIST = 'EDITLIST';
export const DELETELIST = 'DELETELIST';

//action fun 생성
export const insetList = createAction('INSERTLIST');
export const editList = createAction('EDITLIST');
export const deleteList = createAction('DELETELIST');

//초기값 선언
const initState = [
    { title: 'Buy car signal lights', id: 1, btnCheck: true, done: true },
    { title: 'Return bicycle brakes', id: 2, btnCheck: false, done: true },
    { title: 'Buy A4 papers', id: 3, btnCheck: true, done: true },
    { title: 'Install grarge shed', id: 4, btnCheck: false, done: true }
]
// const listId = useRef(4);

//리듀서 생성
// export const todoReducer = (state = initState, action) => {
//     return produce(state, (draftState) => {
//         switch (action.type) {
//             case 'INSERTLIST':
//                 listId.current++;
//                 draftState.push({ title: action.title, id: listId.current, btnCheck: false, done: true })
//                 break;

//             case 'EDITLIST':
//                 const idx = draftState.findIndex(i => i.id === action.id);
//                 draftState[idx].done = false;
//                 break;

//             case 'DELETELIST':
//                 const idx2 = draftState.findIndex((info) => info.id === action.id);
//                 draftState.splice(idx2, 1)
//                 break;

//             default:
//                 state
//                 break;
//         }
//     })
// }


