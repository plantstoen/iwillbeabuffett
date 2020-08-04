import styled from "styled-components";

const StockInput = styled.input`
  color: black;
  background-color: #eaeaea;
  padding: 8px 13px;
  margin-right: 5px;
  border: 0px solid;
  border-radius: 8px;
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const StartButton = styled.button`
  border-radius: 8px;
  border: 0px;
  padding: 8px 20px;
  background-color: #0067ff;
  color: white;
  font-size: 20px;
  font-weight: bold;
  height: 50px;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default function TextInputBar() {
  return (
    <div>
      <StockInput
        placeholder="text stockname"
        className="textinputbox"
        required=""
        autofocus=""
      />
      <StartButton>start</StartButton>
      <style jsx>{`
        .textinputbox {
          color: black;
          ::
        }
      `}</style>
    </div>
  );
}
