import React from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { SpanLain, Button } from './Styled';

function TodoInfo({ data, handleCheckClick, handleClick, handleClickDelete, handleClickEditIcon, handleOnChange }) {

    function editEventState(id) {
        console.log("###", id)
        if(1){

        }
    }
    return (
        <>
            { data.done ?
                (
                    <>
                        <label>
                            <input type="checkBox" checked={data.btnCheck} onChange={() => handleCheckClick(data)} />
                            <SpanLain btnCheck={data.btnCheck}>{data.title}</SpanLain>
                        </label>
                        <div className="TodoList-content-icon">
                            <AiFillEdit onClick={() => editEventState(data.id)} />
                            <AiFillDelete onClick={() => handleClickDelete(data.id)} />
                        </div>
                    </>
                ) : (
                    <>
                        <label>
                            <input type="checkBox" />
                            <input type="text" onChange={handleOnChange} defaultValue={data.title} />
                        </label>
                        <div className="TodoList-content-icon">
                            <Button onClick={console.log("#")}>취소</Button>
                            <Button onClick={() => handleClick(data.id)}>수정</Button>
                            <AiFillDelete onClick={() => handleClickDelete(data.id)} />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default TodoInfo;