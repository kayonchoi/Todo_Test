import React from 'react';
import TodoInfo from './TodoInfo';
import { Content } from './Styled';

function TodoList({ list }) {
    return (
        <div className='TodoList-view'>
            {list.map((data) =>
                <Content key={data.id}>
                    <div className="TodoList-content-data">
                        <TodoInfo data={data} />
                    </div>
                </Content>
            )}
        </div>
    )

}

export default TodoList;