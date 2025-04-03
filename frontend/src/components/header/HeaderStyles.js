import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: blue;
    position: sticky;
    top: 0;
    left: 0;
    padding: 0 20px;
`;
export const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderLogo = styled.div`
    font-size: 20px;
    font-family: cursive;
    cursor: pointer;
    color: #fff;
`;
export const HeaderButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

    button {
        width: 120px;
        height: 40px;
        background-color:#ccc;
        border-radius: 10px;
        transition: 0.5s ease all;
        cursor: pointer;

        &:hover {
            background-color: lightskyblue;
        }
    }
`;
