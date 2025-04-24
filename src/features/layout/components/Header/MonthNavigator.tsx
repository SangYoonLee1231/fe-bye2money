import styled from "@emotion/styled";

interface MonthNavigatorProps {
  year: number;
  month: number;
  onPrev: () => void;
  onNext: () => void;
}

function MonthNavigator({ year, month, onPrev, onNext }: MonthNavigatorProps) {
  return (
    <Container>
      <button onClick={onPrev}>Previous</button>
      <span>
        {year}-{month}
      </span>
      <button onClick={onNext}>Next</button>
    </Container>
  );
}

export default MonthNavigator;

const Container = styled.div``;
