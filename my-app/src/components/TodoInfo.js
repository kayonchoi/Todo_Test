import React, { Component } from 'react';
import { SpanLain } from './TodoListStyle';


class TodoInfo extends Component {
    render() {
        const list = this.props.data;
        return (
            <>
                { list.EditState ?
                    (
                        <label>
                            <input type="checkBox" checked={list.btnCheck} onChange={() => this.props.handleCheckClick(list)} />
                            <SpanLain btnCheck={list.btnCheck}>{list.title}</SpanLain>
                        </label>
                    ) : (
                        <label>
                            {list.btnCheck ? (<input type="checkBox" />) : (<input type="checkBox" defaultChecked />)}
                            <input type="text" onChange={this.props.handleOnChage} defaultValue={list.title} />
                        </label>
                    )
                }
            </>
        )
    }
}

export default TodoInfo