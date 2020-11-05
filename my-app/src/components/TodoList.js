import React, { Component } from 'react';
import TodoInfo from './TodoInfo';
import './TodoListStyle.js';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Content, Button } from './TodoListStyle';

export default class TodoList extends Component {
  render() {
    const list = this.props.list;
    return (
      <div className='TodoList-view'>
        {list.map((data, index) => {
          return (
            <Content key={index}>
              <div className="TodoList-content-data">
                <TodoInfo
                  data={data}
                  handleOnChage={this.props.handleOnChage.bind(this)}
                  handleCheckClick={this.props.handleCheckClick.bind(this)}
                />
              </div>
              {data.EditState ? (
                <div className="TodoList-content-icon">
                  {data.btnCheck ? (
                    <>

                      <AiFillEdit onClick={(e) => e.preventDefault()} />
                      <AiFillDelete onClick={() => this.props.handleClickDelete(data.id)} />

                    </>
                  ) : (
                      <>
                        <AiFillEdit onClick={() => this.props.handleClickEditIcon(data.id)} />
                        <AiFillDelete onClick={() => this.props.handleClickDelete(data.id)} />
                      </>
                    )
                  }

                </div>
              ) : (
                  <div className="TodoList-content-icon">
                    <Button onClick={() => this.props.handleClick(data.id)}>수정</Button>
                    <AiFillDelete onClick={() => this.props.handleClickDelete(data.id)} />
                  </div>
                )
              }
            </Content>
          )
        })}
      </div>
    )
  }
}
