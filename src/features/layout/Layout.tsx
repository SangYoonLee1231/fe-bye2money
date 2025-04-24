// src/features/layout/Layout.tsx
import { useCallback } from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import LogoButton from "./components/Header/LogoButton";
import MonthNavigator from "./components/Header/MonthNavigator";
import ViewTabs from "./components/Header/ViewTabs";
import { useYearMonthRouter } from "../../hooks/useYearMonthRouter";

export default function Layout() {
  const fetchLogs = useCallback(async (year: number, month: number) => {
    const res = await fetch(`/api/logs?year=${year}&month=${month}`);
    const data = await res.json();
    console.log("Loaded logs:", data);
    // → 전역 상태나 Context, Recoil 등에 저장
  }, []);

  const { year, month, prevMonth, nextMonth } = useYearMonthRouter({
    onChange: fetchLogs,
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
