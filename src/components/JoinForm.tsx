import { styled } from "styled-components";
import Button from "./Button";
import InputSelectButton from "./InputSelectButton";
import InputText from "./InputText";

const JoinFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const JoinForm = () => {
  return (
    <JoinFormWrapper>
      <InputText type="text" placeholder="Name" />
      <InputText type="email" placeholder="Name" />
      <InputSelectButton options={["Army", "Navy", "Inquisition"]} />
      <Button label="Apply"></Button>
    </JoinFormWrapper>
  );
};

export default JoinForm;
