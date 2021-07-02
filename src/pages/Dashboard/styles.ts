import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  padding-bottom: 10px;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  input[type=text] {
    height: 38px;
    border-radius: 4px;
    border: 5px solid #003300;
    padding: 0 20px;
    font-size: 14px;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 3px  #003300;
    background: #003300;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Table = styled.table`
  padding-top: 10px;
  width: 100%;
  border: 1px;

  button {
    color: #fff;
    background-color: #000000;
    border-radius: 5px;
  }

  thead {
    tr {
      td {
        font-weight: 800;
      }
    }
  }
`;

export const Backbox = styled.div`
    padding-right: 20px;
    padding-left: 20px;
    padding: 30px;
    margin-top: 30px;
    background-color: #fdc700;
    opacity: 0.9;
    border: solid #003300;
    border-width: 15px;
    border-radius: 15px 15px 15px 15px;

    span {
      font-weight: 800;
      font-size: 30px;
      padding-bottom: 50px;
    }
    p {
      padding-top: 10px;
    }
`;
