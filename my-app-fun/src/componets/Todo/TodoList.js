import React from 'react';
import TodoInfo from './TodoInfo';
import { Content } from './Styled';


function TodoList({ list, handleCheckClick, handleClick, handleClickDelete, handleClickEditIcon, handleOnChange }) {
    return (
        <div className='TodoList-view'>
            {list.map((data) =>
                <Content key={data.id}>
                    <div className="TodoList-content-data">
                        <TodoInfo
                            data={data}
                            handleOnChange={handleOnChange}
                            handleCheckClick={handleCheckClick}
                            handleCheckClick={handleCheckClick}
                            handleCheckClick={handleCheckClick}
                            handleClick={handleClick}
                            handleClickDelete={handleClickDelete}
                            handleClickEditIcon={handleClickEditIcon}
                        />
                    </div>
                </Content>
            )}
        </div>
    )

}

export default TodoList;