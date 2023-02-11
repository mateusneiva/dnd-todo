import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 250px;
  margin-bottom: 15px;
  border-radius: 5px;

  background: #ffffff;
  box-shadow: 0px 1px 4px #bbb;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  padding: 15px 10px 10px 15px;
`;

export const Avatar = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;

  margin: 7px 0 0 10px;

  background: #fff;
  border: 1px #dbdbdb solid;
  border-radius: 100%;

  z-index: 99;
`;

export const Label = styled.header`
  width: 100%;
  height: 20px;

  border-bottom: 1px #dbdbdb solid;
  border-radius: 5px 5px 0 0;
  background: ${(props) => props.color};
`;
