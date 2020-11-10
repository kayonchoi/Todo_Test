import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { editList, updateEditState, deleteList } from '../../store/modules/Todo';
import { SpanLain, Button } from './Styled';

function TodoInfo({ data }) {
    const dispatch = useDispatch();
    const [infoValue, setInfoValue] = useState('');
    const [done, setDone] = useState(true);

    const handleCheckClick = (id) => {
        dispatch(updateEditState(id))
    }

    const handleOnChange = (e) => {
        setInfoValue(e.target.value);
    }

    const handleEditEventState = (list) => {
        if (data.btnCheck && data.id === list.id) {
            return false;
        } else {
            setDone(false)
        }
    }

    const handleEdit = (list) => {
        let value_ = infoValue;
        if (value_ === '') {
            value_ = data.title
        }
        dispatch(editList({ data: list, value: value_ }))
        setDone(true)
    }

    const handleBackBtn = () => {
        setDone(true)
    }

    return (
        <>
            {done ?
                (
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
                            <input type="text" onChange={handleOnChange} defaultValue={data.title} />
                        </label>
                        <div className="TodoList-content-icon">
                            <Button onClick={() => handleBackBtn()}>취소</Button>
                            <Button onClick={() => handleEdit(data)}>수정</Button>
                            <AiFillDelete onClick={() => dispatch(deleteList(data.id))} />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default TodoInfo;
