import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

export const INSERT_ITEM = 'todo/INSERT_ITEM';
export const EDIT_ITEM = 'todo/EDIT_ITEM';
export const DELETE_ITEM = 'todo/DELETE_ITEM';
export const EDIT_MOVE_ITEM = 'todo/EDIT_MOVE_ITEM';
export const EDIT_NOMOVE = 'todo/EDIT_NOMOVE';
export const DELETE_LIST = 'todo/DELETE_LIST';
export const INSERT_LIST = 'todo/INSERT_LIST';

let titleId = 2;
let listId = 9;
export const insetItem = createAction(INSERT_ITEM, data => data);
export const editItem = createAction(EDIT_ITEM, data => data);
export const editMoveItem = createAction(EDIT_MOVE_ITEM, data => data);
export const deleteItem = createAction(DELETE_ITEM, id => id);
export const editNomove = createAction(EDIT_NOMOVE, data => data);
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
      { item_title: '운동가기1', listId: 2 },
      { item_title: '운동가기2', listId: 3 },
      { item_title: '운동가기3', listId: 4 },
      { item_title: '운동가기4', listId: 5 },
      { item_title: '운동가기5', listId: 6 },
    ]
  },
  {
    title: 'Done',
    titleId: 2,
    item: [
      { item_title: '퇴근하기', listId: 7 },
      { item_title: '운동가기', listId: 8 },
      { item_title: '운동가기5', listId: 9 },
    ]
  },
];

export default handleActions({
  [INSERT_ITEM]: (baseState, action) => {
    return produce(baseState, draftState => {
      const { titleId, value } = action.payload;
      const parent_idx = draftState.findIndex(info => info.titleId === titleId);
      const parents = draftState[parent_idx];
      parents.item.push({ item_title: value, listId: ++listId });
    });
  },
  [DELETE_ITEM]: (baseState, action) => {
    return produce(baseState, draftState => {
      const { titleId, id } = action.payload;
      const parent_idx = draftState.findIndex(info => info.titleId === titleId);
      const parents = draftState[parent_idx];
      const child_idx = parents.item.findIndex(info => info.listId === id);
      parents.item.splice(child_idx, 1);
    });
  },
  [EDIT_ITEM]: (baseState, action) => {
    return produce(baseState, draftState => {
      const { titleId, id, value } = action.payload;
      const parent_idx = draftState.findIndex(info => info.titleId === titleId);
      const parents = draftState[parent_idx];
      const child_idx = parents.item.findIndex(info => info.listId === id);
      const child = parents.item[child_idx];
      child.item_title = value;
    });
  },
  [EDIT_MOVE_ITEM]: (baseState, action) => {
    return produce(baseState, draftState => {
      const { titleId, id, value, titleName } = action.payload;
      const parent_idx = draftState.findIndex(info => info.titleId === titleId);
      const parent = draftState[parent_idx];
      const child_idx = parent.item.findIndex(info => info.listId === id);
      const child = parent.item[child_idx];
      if (action.payload.value) {
        child.item_title = value;
      }
      if (child) {
        parent.item.splice(child_idx, 1);
        draftState.forEach(list => {
          if (list.title === titleName) {
            list.item.push({
              item_title: child.item_title,
              listId: id
            });
          }
        });
      }
    });
  },
  [EDIT_NOMOVE]: (baseState, action) => {
    return produce(baseState, draftState => {
      const { oldIndex, newIndex, titleId } = action.payload;
      const parent_idx = draftState.findIndex(info => info.titleId === titleId);
      const parent = draftState[parent_idx];
      const changeData = parent.item[oldIndex];
      parent.item.splice(oldIndex, 1);
      parent.item.splice(newIndex, 0, changeData);
    });
  },
  [DELETE_LIST]: (baseState, action) => {
    return produce(baseState, draftState => {
      const idx = draftState.findIndex(info => info.titleId === action.payload);
      draftState.splice(idx, 1);
    });
  },
  [INSERT_LIST]: (baseState, action) => {
    return produce(baseState, draftState => {
      draftState.push({ title: action.payload, titleId: ++titleId, item: [] });
    });
  }
}, initState);
