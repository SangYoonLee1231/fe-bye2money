import styled from "@emotion/styled";
import Logo from "../../../../assets/Logo.svg";

const LogoButton = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <LogoContainer onClick={handleRefresh}>
      <img src={Logo} alt="Logo" />
    </LogoContainer>
  );
};

export default LogoButton;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
