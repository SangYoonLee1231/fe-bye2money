import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../features/layout/Layout";
import EntriesPage from "../features/entries/EntriesPage";
import CalendarPage from "../features/calendar/CalendarPage";
import StatsPage from "../features/stats/StatsPage";

const now = new Date();
const curY = now.getFullYear();
const curM = String(now.getMonth() + 1).padStart(2, "0");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={`/${curY}/${curM}`} replace />,
  },
  {
    path: "/:year/:month",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="entries" replace /> },
      { path: "entries", element: <EntriesPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "stats", element: <StatsPage /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
