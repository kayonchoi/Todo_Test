import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from "react-icons/ai";
import { editItem, deleteItem, editMoveItem } from '../../store/modules/Todo';
import { ModalIcon, ModalH2, ModalNone, ModalWrap, ModalTitle, ModalInput, ModalBtn } from './Styled';

function TodoModal({ title, item, titleId, handleClose }) {
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(item.item_title);
  const [selectValue, setSeleteValue] = useState(title);

  const handleChage = e => {
    setInputValue(e.currentTarget.value);
  }

  const handleEditSubmit = () => {
    if(title === selectValue){
      dispatch(editItem({ value: inputValue, id: item.listId, titleId: titleId, titleName: selectValue }));
    }else{
      dispatch(editMoveItem({ value: inputValue, id: item.listId, titleId: titleId, titleName: selectValue }));
    }
    handleClose();
  }

  const handleSeleteChage = e => {
    setSeleteValue(e.currentTarget.value);
  }

  const handleDelete = () => {
    dispatch(deleteItem({ id: item.listId, titleId: titleId }));
    handleClose();
  }

  return (
    <ModalNone>
      <ModalWrap>
        <ModalH2>{title}</ModalH2>
        <ModalIcon>
          <AiOutlineClose onClick={handleClose} />
        </ModalIcon>
        <ModalTitle>
          <p>
            상태 :
            <select value={selectValue} onChange={handleSeleteChage}>
              {list.map((data, index) => (
                <option key={index}>{data.title}</option>
              ))}
            </select>
          </p>
        </ModalTitle>
        <div>
          <ModalInput type="text" onChange={handleChage} value={inputValue} />
        </div>
        <ModalBtn>
          <button onClick={handleDelete}>삭제</button>
          <button onClick={handleEditSubmit}>수정하기</button>
        </ModalBtn>
      </ModalWrap>
    </ModalNone>
  )
}
export default TodoModal;
