import styled, { css } from 'styled-components';


export const ListWrap = styled.div`
    border: 1px solid white;
    width: 330px;
    margin: 0px auto;
    background: #fbfbfb;
    border-radius: 5%;
`
export const Content = styled.div`
    margin: 10px;

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
