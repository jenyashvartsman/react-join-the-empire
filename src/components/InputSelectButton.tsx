import { styled } from "styled-components";

interface InputSelectButtonProps {
  options: string[];
}

const InputSelectButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const InputSelectButton = ({ options }: InputSelectButtonProps) => {
  return (
    <InputSelectButtonWrapper>
      {options.map((option) => (
        <button key={option}>{option}</button>
      ))}
    </InputSelectButtonWrapper>
  );
};

export default InputSelectButton;
