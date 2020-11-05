import React from 'react';
import TodoInfo from './TodoInfo';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Content, Button } from './TodoStyle';


function TodoList(props) {
    return (
        <div className='TodoList-view'>
            {props.list.map((data, indx) =>
                <Content key={indx}>
                    <div className="TodoList-content-data">
                        <TodoInfo data={data} handleOnChange={props.handleOnChange} handleCheckClick={props.handleCheckClick} />
                    </div>
                    {data.EditState ? (
                        <div className="TodoList-content-icon">
                            {data.btnCheck ? (
                                <>
                                    <AiFillEdit onClick={(e) => e.preventDefault()} />
                                    <AiFillDelete onClick={() => props.handleClickDelete(data.id)} />
                                </>
                            ) : (
                                    <>
                                        <AiFillEdit onClick={() => props.handleClickEditIcon(data.id)} />
                                        <AiFillDelete onClick={() => props.handleClickDelete(data.id)} />
                                    </>
                                )
                            }
                        </div>
                    ) : (
                            <div className="TodoList-content-icon">
                                <Button onClick={() => props.handleClick(data.id)}>수정</Button>
                                <AiFillDelete onClick={() => props.handleClickDelete(data.id)} />
                            </div>
                        )
                    }
                </Content>
            )}
        </div>
    )

}

export default TodoList;