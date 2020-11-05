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