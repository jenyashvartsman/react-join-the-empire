import styled from "styled-components";
import BranchGallery from "./components/BranchGallery";
import JoinForm from "./components/JoinForm";
import { theme } from "./theme/theme";

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${theme.white};
  background: linear-gradient(-55deg, ${theme.black} 50%, ${theme.grey} 50%);
`;

const LeftSide = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightSide = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <MainWrapper>
      <LeftSide>
        <JoinForm />
      </LeftSide>
      <RightSide>
        <BranchGallery />
      </RightSide>
    </MainWrapper>
  );
}

export default App;
