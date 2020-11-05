import React, { Component } from 'react';
import produce from 'immer';
import TodoList from './components/TodoList';
import { Body } from './AppStyle.js';

class App extends Component {
  id = 5
  state = {
    list: [
      { title: 'Buy car signal lights', id: 1, btnCheck: true, EditState: true },
      { title: 'Return bicycle brakes', id: 2, btnCheck: false, EditState: true },
      { title: 'Buy A4 papers', id: 3, btnCheck: true, EditState: true },
      { title: 'Install grarge shed', id: 4, btnCheck: false, EditState: true }
    ],
    input: ''
  };

  //Enter Event
  handleKeyPress(e) {
    const inputValue = e.target.value;
    if (e.key === 'Enter' && inputValue !== '') {
      this.handleCreate(inputValue);
    }
  }

  //Crate Event
  handleCreate(inputValue) {
    const item = produce(this.state.list, draftState => {
      draftState.push({
        id: this.id++,
        title: inputValue,
        EditState: true,
        btnCheck: false,
      });
    });
    this.setState({
      list: item,
    });
  }

  //Delete Event
  handleClickDelete(id) {
    const list = this.state.list;
    this.setState({
      list: list.filter(data => data.id !== id)
    })
  }

  //Edut_icon Event
  handleClickEditIcon(id) {
    const list = this.state.list;
    this.setState({
      list: list.map(data => {
        if (data.id === id) {
          return { ...data, EditState: false };
        } else {
          return data;
        }
      })
    });
  }

  //수정 완료  Event
  handleClick(id) {
    const list = this.state.list;
    const inputValue = this.state.input;
    this.setState({
      list: list.map(data => {
        if (data.id === id && inputValue !== '') {
          return { ...data, title: inputValue, EditState: true };
        } else if (inputValue === '') {
          return { ...data, EditState: true }
        } else {
          return data
        }
      }),
      input: '',
    })
  }

  //수정 onChage Event
  handleOnChage(e) {
    const infoValue = e.target.value;
    this.setState(
      {
        input: infoValue
      }
    )
  }

  //CheckBox Event
  handleCheckClick(infoList) {
    const list = this.state.list;
    this.setState({
      list: list.map(data => {
        if (data.id === infoList.id && infoList.btnCheck) {
          return { ...data, btnCheck: false }
        } else if (data.id === infoList.id && !infoList.btnCheck) {
          return { ...data, btnCheck: true }
        } else {
          return data
        }
      })
    })
  }


  render() {
    return (
      <Body>
        <div>
          <h1>My Todo</h1>
        </div>
        <div>
          <input type="text" placeholder="Input task name then tap Enter to add"
            onKeyPress={this.handleKeyPress.bind(this)} />
        </div>
        <TodoList
          list={this.state.list}
          handleCheckClick={this.handleCheckClick.bind(this)}
          handleClick={this.handleClick.bind(this)}
          handleClickDelete={this.handleClickDelete.bind(this)}
          handleClickEditIcon={this.handleClickEditIcon.bind(this)}
          handleOnChage={this.handleOnChage.bind(this)}
        />
      </Body>
    )
  }
}

export default App;
