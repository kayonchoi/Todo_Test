import { Body } from './AppStyle.js';
import TodoList from '../src/componets/TodoList';
import produce from 'immer';
import React, { useState, useRef } from 'react';

function App() {
  const list =
    [
      { title: 'Buy car signal lights', id: 1, btnCheck: true, done: true },
      { title: 'Return bicycle brakes', id: 2, btnCheck: false, done: true },
      { title: 'Buy A4 papers', id: 3, btnCheck: true, done: true },
      { title: 'Install grarge shed', id: 4, btnCheck: false, done: true }
    ]
  const listId = useRef(4);
  const [addList, setAddList] = useState(list);
  const [inputValue, setInptValue] = useState('');
  const [infoValue, setInfoValue] = useState('');

  //App InputChange Event
  const handleChage = (e) => {
    setInptValue(e.target.value);
  }

  //App Enter Keypress Event & InsertData 
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      listId.current++;
      const nextState = produce(addList, draftState => {
        draftState.push({ title: inputValue, id: listId.current, btnCheck: false, done: true })
      })
      setAddList(nextState)
      setInptValue('');
    }
  }

  //Delete Event
  const handleClickDelete = (id) => {
    const nextState = produce(addList, draftState => {
      draftState.splice(draftState.findIndex((info) => info.id === id), 1)
    })
    setAddList(nextState);
  }

  //Edit Event
  const handleClickEditIcon = (id) => {
    const nextState = produce(addList, draftState => {
      const idx = draftState.findIndex(i => i.id === id);
      draftState[idx].done = false;
      setInfoValue(draftState[idx].title)
    })
    setAddList(nextState);
  }

  //수정완료 Event
  const handleClick = (id) => {
    const nextState = produce(addList, draftState => {
      const idx = draftState.findIndex((info) => info.id === id);
      draftState[idx].title = infoValue;
      draftState[idx].done = true;
    })
    setAddList(nextState);
  }

  //ListInfoChange Event
  const handleOnChange = (e) => {
    setInfoValue(e.target.value);
  }

  //CheckBoxState Event
  const handleCheckClick = (infoData) => {
    const nextState = produce(addList, draftState => {
      const index = draftState.findIndex((info) => infoData.id === info.id);
      if (draftState[index].btnCheck) {
        draftState[index].btnCheck = false;
      } else {
        draftState[index].btnCheck = true;
      }
    });
    setAddList(nextState);
  }

  return (
    <Body>
      <div>
        <h1>My Todo</h1>
      </div>
      <div>
        <input type="text" value={inputValue} placeholder="Input task name then tap Enter to add"
          onKeyPress={handleOnKeyPress} onChange={handleChage}
        />
      </div>
      <TodoList
        list={addList}
        handleCheckClick={handleCheckClick}
        handleClick={handleClick}
        handleClickDelete={handleClickDelete}
        handleClickEditIcon={handleClickEditIcon}
        handleOnChange={handleOnChange}
      />
    </Body>
  );
}

export default App;
