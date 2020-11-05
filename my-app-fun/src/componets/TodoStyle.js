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