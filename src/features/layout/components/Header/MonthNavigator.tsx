import styled from "@emotion/styled";
import LeftArrow from "../../../../assets/icons/chevron-left.svg";
import RightArrow from "../../../../assets/icons/chevron-right.svg";

interface MonthNavigatorProps {
  year: number;
  month: number;
  monthEng: string;
  onPrev: () => void;
  onNext: () => void;
}

function MonthNavigator({
  year,
  month,
  monthEng,
  onPrev,
  onNext,
}: MonthNavigatorProps) {
  return (
    <Container>
      <img src={LeftArrow} onClick={onPrev} alt="LeftArrow" />
      <CurrDateArea>
        <CurrYear>{year}</CurrYear>
        <CurrMonth>{month}</CurrMonth>
        <CurrMonthEng>{monthEng}</CurrMonthEng>
      </CurrDateArea>
      <img src={RightArrow} onClick={onNext} alt="RightArrow" />
    </Container>
  );
}

export default MonthNavigator;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* */
  position: absolute; // relative한 부모 요소를 기준으로 정중앙 배치
  left: 50%;
  transform: translateX(-50%);
  /* */
  width: 14.5rem;
  height: 7rem;

  img {
    cursor: pointer;
  }
`;

const CurrDateArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 7.5rem;
  height: 7rem;
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const CurrYear = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

const CurrMonth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize["serif-48"][0]};
  font-family: "ChosunCentennial", sans-serif;
`;

const CurrMonthEng = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;
