import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 1px 4px #bbb;
    border-radius: 5px;
    width: 250px;
    margin-bottom: 15px;
    background: #fff;
`;


export const Title = styled.h1`
    font-weight: 400;
    font-size: 16px;
    padding: 15px 10px 10px 15px;
`;

export const Avatar = styled.img`
    width: 25px;
    border-radius: 100%;
    border: 1px #dbdbdb solid;
    background: #fff;
    margin: 7px 0 0 10px;
    z-index: 99;
`;


export const Label = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 5px 5px 0 0;
    background: ${props => props.color };
    border-bottom: 1px #dbdbdb solid;
`;