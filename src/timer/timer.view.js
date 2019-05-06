import styled from "styled-components";

export default {
    Wrapper: styled.div`
      font-family: "Arial Black";
      width: 500px;
      background-color:#333;
      padding: 20px;
    `,
    Time: styled.div`
      font-size: 48px;
      text-align: center;
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      color: #fff;
    `,
    Line: styled.div`
      background-color:#7fffa7;
      width: ${props => props.width ? props.width : "0"}%;
      height: 50px;
      margin-bottom: 20px;
      transition: ${props => props.intervalStep ? props.intervalStep : "150"}ms
    `,
    Button: styled.img`
       width: 80px;
       height: auto;
       display: block;
       margin: 0 auto;
       cursor: pointer;
    `
}