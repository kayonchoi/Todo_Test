import React from 'react';
import TodoInfo from './TodoInfo';
import { ListWrap, Content } from './Styled';

function TodoList({ list }) {
  return (
    <ListWrap>
      {list.map((data) =>
        <Content key={data.id}>
          <div className="TodoList-content-data">
            <TodoInfo data={data} />
          </div>
        </Content>
      )}
    </ListWrap>
  )
}
export default TodoList;
