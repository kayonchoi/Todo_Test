import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { editList, updateEditState, deleteList } from '../../store/modules/Todo';
import { SpanLain, Button } from './Styled';

function TodoInfo({ data }) {
  const dispatch = useDispatch();
  const [infoValue, setInfoValue] = useState(data.title);
  const [editState, setDone] = useState(true);

  const handleCheckClick = (id) => {
    dispatch(updateEditState(id));
  }

  const handleOnChange = (e) => {
    setInfoValue(e.currentTarget.value);
  }

  const handleEditEventState = (list) => {
    if (data.btnCheck && data.id === list.id) {
      return;
    } else {
      setDone(false);
    }
  }

  const handleEdit = () => {
    let _value = infoValue;
    if (_value === '') {
      _value = data.title
    }
    dispatch(editList({ id: data.id, value: _value }));
    setDone(true);
  }

  const handleBackBtn = () => {
    setInfoValue(data.title);
    setDone(true);
  }

  return (
    editState ? (
      <>
        <label>
          <input type="checkBox" checked={data.btnCheck} onChange={() => handleCheckClick(data.id)} />
          <SpanLain btnCheck={data.btnCheck}>{data.title}</SpanLain>
        </label>
        <div className="TodoList-content-icon">
          <AiFillEdit onClick={() => handleEditEventState(data)} />
          <AiFillDelete onClick={() => dispatch(deleteList(data.id))} />
        </div>
      </>
    ) : (
      <>
        <label>
          <input type="checkBox" checked={data.btnCheck} />
          <input type="text" onChange={handleOnChange} value={infoValue} />
        </label>
        <div className="TodoList-content-icon">
          <Button onClick={handleBackBtn}>취소</Button>
          <Button onClick={handleEdit}>수정</Button>
          <AiFillDelete onClick={() => dispatch(deleteList(data.id))} />
        </div>
      </>
    )
  )
}

export default TodoInfo;
