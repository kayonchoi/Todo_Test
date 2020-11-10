import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './componets/Todo/TodoList';
import { insetList } from './store/modules/Todo';
import { Body, Input, Title } from './Styled';

function App() {
  const list = useSelector((state) => state.handleActions);
  const dispatch = useDispatch();
  const [inputValue, setInptValue] = useState('');

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(insetList(inputValue));
      setInptValue('');
    }
  }

  const handleChage = (e) => {
    setInptValue(e.target.value);
  }

  return (
    <Body>
      <div>
        <Title>My Todo</Title>
      </div>
      <div>
        <Input type="text" value={inputValue} placeholder="Input task name then tap Enter to add"
          onKeyPress={handleOnKeyPress} onChange={handleChage}
        />
      </div>
      <TodoList list={list} />
    </Body>
  );
}
export default App;
