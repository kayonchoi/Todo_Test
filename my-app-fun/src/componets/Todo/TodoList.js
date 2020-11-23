import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillPlusCircle, AiOutlineClose } from 'react-icons/ai';
import TodoItem from '../Todo/TodoItem';
import { insetItem, deleteList, editMoveItem, editNomove } from '../../store/modules/Todo';
import { Lavel, ListWrap, ListAddIconDiv, ShowInput, ListDeleteIcon, LitAddWrap, H2 } from './Styled';

function TodoList({ title, items, titleId }) {
  const list = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const [defultList, setDefultList] = useState(list);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleListClick = () => {
    setShowInput(true);
  };

  const handleChange = e => {
    setInputValue(e.currentTarget.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      dispatch(insetItem({ value: inputValue, titleId: titleId }));
      setInputValue('');
      setShowInput(false);
    }
  };

  const handleListDeleteClick = () => {
    if (0 < items.length) return;
    dispatch(deleteList(titleId));
  };

  const handleBack = () => {
    setShowInput(false);
    setInputValue('');
  };

  const dragEnd = evt => {
    const targetTitle = evt.to.getElementsByTagName('h2')[0].innerText;
    const parentId = evt.item.dataset.parent;
    const childId = evt.item.dataset.id;
    if (evt.pullMode) {
      dispatch(editMoveItem({ titleId: +parentId, titleName: targetTitle, id: +childId }));
    } else {
      dispatch(editNomove({ titleId: +parentId, oldIndex: evt.oldDraggableIndex - 1, newIndex: evt.newDraggableIndex - 1 }));
    }
  };

  return (
    <ListWrap>
      <ListDeleteIcon onClick={handleListDeleteClick}>
        <AiOutlineClose />
      </ListDeleteIcon>
      <h2>{title}</h2>
      <div>
        <ReactSortable
          disabled={false}
          animation={150} group="todo" list={defultList ? list : []}
          setList={setDefultList} onEnd={dragEnd} >
          <H2 data-id={titleId}>{title}</H2>
          <>
            {items.map((item, index) => (
              <TodoItem
                item={item}
                key={index}
                titleId={titleId}
                title={title}
              />
            ))}
          </>
        </ReactSortable>
      </div>
      <LitAddWrap>
        <ListAddIconDiv onClick={handleListClick}>
          <AiFillPlusCircle />
          <Lavel>Add a Item</Lavel>
        </ListAddIconDiv>
        {showInput && (
          <>
            <ShowInput type="text" value={inputValue} onKeyPress={handleKeyPress} onChange={handleChange} />
            <button onClick={handleBack}>취소</button>
          </>
        )}
      </LitAddWrap>
    </ListWrap>
  );
}
export default TodoList;
