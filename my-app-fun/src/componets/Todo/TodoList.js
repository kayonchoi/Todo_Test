import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiFillPlusCircle, AiOutlineClose } from "react-icons/ai";
import TodoItem from '../Todo/TodoItem';
import { insetItem, deleteList } from '../../store/modules/Todo';
import { Lavel, ListWrap, ListAddIconDiv, ShowInput, ListDeleteIcon, ListH1, LitAddWrap } from './Styled';

function TodoList({ title, items, titleId }) {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleListClick = () => {
    setShowInput(true);
  }

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      dispatch(insetItem({ value: inputValue, titleId: titleId }));
      setInputValue('');
      setShowInput(false);
    }
  }

  const handleListDeleteClick = () => {
    if (0 < items.length) return
    dispatch(deleteList(titleId));
  }

  const handleBack = () => {
    setShowInput(false);
    setInputValue('');
  }

  return (
    <ListWrap >
      <ListDeleteIcon onClick={handleListDeleteClick}>
        <AiOutlineClose />
      </ListDeleteIcon>
      <ListH1>{title}</ListH1>
      {items.map((item, index) => (
        <TodoItem
          item={item}
          key={index}
          titleId={titleId}
          title={title}
        />
      ))}
      <LitAddWrap >
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
  )
}
export default TodoList;
