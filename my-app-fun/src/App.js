import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './componets/Todo/TodoList';
import { insertList } from './store/modules/Todo';
import { Wrap, AppLabel, InsertListWrap } from './Styled';

function App() {
  const list = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const [showListBox, setShowListBox] = useState(false);
  const [inputList, setInputList] = useState('');

  const handleShowAddList = () => {
    setShowListBox(true);
  };

  const handleBackAddList = e => {
    e.stopPropagation();
    setShowListBox(false);
    setInputList('');
  };

  const handleChage = e => {
    setInputList(e.currentTarget.value);
  };

  const handleAddList = e => {
    if (e.key === 'Enter') {
      dispatch(insertList(inputList));
      setInputList('');
      setShowListBox(false);
    }
  };

  return (
    <Wrap>
      {list.map((data, index) => (
        <TodoList
          titleId={data.titleId}
          items={data.item}
          key={index}
          title={data.title}
        />
      ))}
      <InsertListWrap onClick={handleShowAddList}>
        <AppLabel>+ Add a List</AppLabel>
        {showListBox && (
          <>
            <input type="text" value={inputList} onChange={handleChage} onKeyPress={handleAddList} />
            <button onClick={handleBackAddList}>취소</button>
          </>
        )}
      </InsertListWrap>
    </Wrap>
  );
}
export default App;
