import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

export const INSERT_ITEM = "todo/INSERT_ITEM";
export const EDIT_ITEM = 'todo/EDIT_ITEM';
export const DELETE_ITEM = 'todo/DELETE_ITEM';
export const DELETE_LIST = 'todo/DELETE_LIST';
export const INSERT_LIST = 'todo/INSERT_LIST';

let titleId = 2;
let listId = 6;
export const insetItem = createAction(INSERT_ITEM, data => data);
export const editItem = createAction(EDIT_ITEM, data => data);
export const deleteItem = createAction(DELETE_ITEM, id => id);
export const deleteList = createAction(DELETE_LIST, id => id);
export const insertList = createAction(INSERT_LIST, data => data);

const initState = [
  {
    title: 'Todo',
    titleId: 0,
    item: [
      { item_title: '놀러가기', listId: 0 },
      { item_title: '낮잠자기', listId: 1 }
    ]
  },
  {
    title: 'Doing',
    titleId: 1,
    item: [
      { item_title: '일 중', listId: 2 },
      { item_title: '밥 먹는 중', listId: 3 }
    ]
  },
  {
    title: 'Done',
    titleId: 2,
    item: [
      { item_title: '퇴근하기', listId: 4 },
      { item_title: '운동가기', listId: 5 }
    ]
  },
]

export default handleActions({
  [INSERT_ITEM]: (baseState, action) => {
    return produce(baseState, draftState => {
      draftState.forEach(list => {
        if (list.titleId === action.payload.titleId) {
          list.item.push({ item_title: action.payload.value, listId: ++listId })
        }
      })
    })
  },
  [DELETE_ITEM]: (baseState, action) => {
    return produce(baseState, draftState => {
      draftState.forEach(list => {
        if (list.titleId === action.payload.titleId) {
          const idx = list.item.findIndex((info) => info.listId === action.payload.id);
          list.item.splice(idx, 1);
        }
      })
    })
  },
  [EDIT_ITEM]: (baseState, action) => {
    console.log(">>>action ", action)
    return produce(baseState, draftState => {
      draftState.forEach(list => {
        if (list.titleId === action.payload.titleId) {
          list.item.forEach(data => {
            console.log(1)
            if (data.listId === action.payload.id) {
              data.item_title = action.payload.value;
            }
          })
          const idx = list.item.findIndex((info) => info.listId === action.payload.id);
          list.item.splice(idx, 1);
          console.log(2)
        }
        if (list.title === action.payload.titleName) {
          console.log(3)
          list.item.push({
            item_title: action.payload.value,
            listId: action.payload.id
          });
        }
      })
    })
  },
  [DELETE_LIST]: (baseState, action) => {
    return produce(baseState, draftState => {
      const idx = draftState.findIndex((info) => info.titleId === action.payload);
      draftState.splice(idx, 1);
    })
  },
  [INSERT_LIST]: (baseState, action) => {
    return produce(baseState, draftState => {
      draftState.push({ title: action.payload, titleId: ++titleId, item: [] })
    })
  }
}, initState)
