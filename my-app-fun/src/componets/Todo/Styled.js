import styled, { css } from 'styled-components';

export const SpanLain = styled.span`
    ${({ btnCheck }) => btnCheck && css`
        text-decoration: line-through;
    `}
 `
export const Button = styled.button`
    height : 20px;
    width : 63px;
 `
export const Title = styled.h1`
    margin: 10px;
    font-size: 30px;
    text-align : center;
`
export const ItemDiv = styled.div`
    background: white;
    width: 290px;
    height: 50px;
    margin: 0px auto;
`
export const Lavel = styled.label`
    margin-left: 10px;
`
export const TitleDiv = styled.div`
    display: inline-flex;
    border: 1px solid;
    width: 300px;
    height: 90px;
    background: #54454f;
    color: white;
`
export const ListWrap = styled.div`
    margin: 0px auto;
    background: #5e94bd;
    border-radius: 3px;
    box-shadow: 3px 5px 5px grey;
    width: 230px;
`
export const ListAddIconDiv = styled.div`
    margin: 20px 0 0 15px;
    font-size: 18px;
`
export const Item = styled.div`
    background: #eeeeee;
    border-radius: 8%;
    text-align: center;
    font-size: 15px;
    width: 230px;
    height: 50px;   

`
export const ModalWrap = styled.div`
    width: 400px;
    height: 300px;
    background-color: white;
    box-sizing: border-box;
    margin: 50px auto;
    padding: 20px;
    background: #fff;
    z-index: 2;
`
export const ModalNone = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
`
export const H3 = styled.h3`
    padding: 5px;
    
`
export const ModalTitle = styled.div`
    display: flex;
`
export const ModalInput = styled.textarea`
    width: 350px;
    height: 130px;
`
export const ModalBtn = styled.div`
    margin-top : 10px;
`
export const ModalH2 = styled.h2`
    display : contents;
`
export const ModalIcon = styled.div`
    float : right;
    font-size : 30px;
`
export const ShowInput = styled.input`
    margin-left: 15px;
    width: 160px;
`
export const ListDeleteIcon = styled.div`
    font-size: 30px;
    float: right;
    margin: 10px 10px 5px 0px;
`
export const LitAddWrap = styled.div`
    margin: 10px 0px 5px 5px;
`

export const H2 = styled.h2`
    display: none;
`
 