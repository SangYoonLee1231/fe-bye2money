import { Outlet } from "react-router-dom";
import Layout from "../features/layout/Layout";
import styled from "@emotion/styled";
import { EntriesProvider } from "../context/entries/EntriesContext";

const App = () => (
  <EntriesProvider>
    <Container>
      <Layout />
      <main>
        <Outlet />
      </main>
    </Container>
  </EntriesProvider>
);

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`;
