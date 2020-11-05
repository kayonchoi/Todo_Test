# Step 1 ) ToDo 만들기

## 사용한 라이브러리
* styled-Components
* immer
* useState , useRef

## 컴포넌트 구조
* App.js
* TodoLit.js
* TodoInfo.js

* AppStyle.js
* TodoStyle.js

---
 

## App.js 
```
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

```
---

## TodoList.js
```
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
                    {data.done ? (
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
```
---

## TodoInfo.js
```
import React from 'react';
import { SpanLain } from './TodoStyle';

function TodoInfo(props) {
    return (
        <>
            { props.data.done ?
                (
                    <label>
                        <input type="checkBox" checked={props.data.btnCheck} onChange={() => props.handleCheckClick(props.data)} />
                        <SpanLain btnCheck={props.data.btnCheck}>{props.data.title}</SpanLain>
                    </label>
                ) : (
                    <label>
                        <input type="checkBox" />
                        <input type="text" onChange={props.handleOnChange} defaultValue={props.data.title} />
                    </label>
                )
            }
        </>
    )
}

export default TodoInfo;
```

---
## TodoStyle.js
```
import styled, { css } from 'styled-components';

export const Content = styled.div`
    border: 1px solid blue;
    margin-top: 10px;

    .TodoList-content-data{
        display: inline;
    }

    .TodoList-content-icon{
        float: right;

        > button {
            width: 40px;
        }
    }

`

export const SpanLain = styled.span`
    ${({ btnCheck }) => btnCheck && css`
        text-decoration: line-through;
    `}
 `

export const Button = styled.button`
    height : 20px;
    width : 63px;
 `
```
---

## AppStyle.js
```
import styled from 'styled-components';

export const Body = styled.div`
    margin: 10px;
    width: 300px;
    height: 400px;
    border: 1px solid;
`

```