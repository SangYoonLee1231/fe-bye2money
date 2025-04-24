import { useEntriesDispatch } from "../context/entries/EntriesContext";
import { Entry } from "../context/entries/entriesTypes";

export const useEntryActions = () => {
  const dispatch = useEntriesDispatch();

  const fetchEntries = async (year: number, month: number) => {
    const ym = `${year}-${String(month).padStart(2, "0")}`;
    const res = await fetch(`/api/logs?date_like=${ym}`);
    const data: Entry[] = await res.json();
    dispatch({ type: "SET_ENTRIES", payload: data });
  };

  const createEntry = async (entry: Omit<Entry, "id" | "createdAt">) => {
    const res = await fetch("/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    const newEntry: Entry = await res.json();
    dispatch({ type: "ADD", payload: newEntry });
  };

  const updateEntry = async (entry: Entry) => {
    const res = await fetch(`/api/logs/${entry.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    const updated: Entry = await res.json();
    dispatch({ type: "UPDATE", payload: updated });
  };

  const deleteEntry = async (id: string) => {
    await fetch(`/api/logs/${id}`, { method: "DELETE" });
    dispatch({ type: "REMOVE", payload: id });
  };

  return { fetchEntries, createEntry, updateEntry, deleteEntry };
};
