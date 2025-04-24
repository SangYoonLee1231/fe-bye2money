// src/features/layout/Layout.tsx
import { useCallback } from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import LogoButton from "./components/Header/LogoButton";
import MonthNavigator from "./components/Header/MonthNavigator";
import ViewTabs from "./components/Header/ViewTabs";
import { useYearMonthRouter } from "../../hooks/useYearMonthRouter";
import { useEntryActions } from "../../hooks/useEntryActions";

export default function Layout() {
  const { fetchEntries } = useEntryActions(); // 👈 새 훅 사용

  const loadMonthLogs = useCallback(
    (year: number, month: number) => {
      fetchEntries(year, month); // 👈 Context 상태에 저장
    },
    [fetchEntries]
  );

  const { year, month, prevMonth, nextMonth } = useYearMonthRouter({
    onChange: loadMonthLogs,
  });

  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoButton />
          <MonthNavigator
            year={year}
            month={month}
            onPrev={prevMonth}
            onNext={nextMonth}
          />
          <ViewTabs />
        </HeaderContainer>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.colorchip[80]};
`;

const HeaderContainer = styled.div`
  max-width: 52.875rem;
  margin: 0 auto;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 1rem 3.75rem;
`;

const Main = styled.main`
  padding-top: 13.5rem; /* Header 높이만큼 띄우기 */
`;
