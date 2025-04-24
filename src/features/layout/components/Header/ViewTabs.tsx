import styled from "@emotion/styled";
import EntriesIcon from "../../../../assets/icons/EntriesIcon.svg";
import CalendarIcon from "../../../../assets/icons/CalendarIcon.svg";
import StatsIcon from "../../../../assets/icons/StatsIcon.svg";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const ViewTabs = () => {
  const { year, month } = useParams<{ year: string; month: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { key: "entries", icon: EntriesIcon },
    { key: "calendar", icon: CalendarIcon },
    { key: "stats", icon: StatsIcon },
  ];

  return (
    <Container>
      {tabs.map((tab) => {
        const path = `/${year}/${month}/${tab.key}`;
        const isActive = location.pathname === path;
        const Icon = tab.icon;
        return (
          <TabButton
            key={tab.key}
            onClick={() => navigate(path)}
            isActive={isActive}
          >
            <img src={Icon} alt={tab.key} />
          </TabButton>
        );
      })}
    </Container>
  );
};

export default ViewTabs;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? "white" : "none")};
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  outline: none;
  &:focus {
    outline: none;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
