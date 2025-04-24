import { useEntriesDispatch } from "../context/entries/EntriesContext";
import { Entry } from "../context/entries/entriesTypes";

export const useEntryActions = () => {
  const dispatch = useEntriesDispatch();

  // fetchEntries는 특정 연도와 월에 해당하는 수입/지출 항목을 '가져오는' 함수입니다.
  const fetchEntries = async (year: number, month: number) => {
    const res = await fetch(`/api/${year}/${month}/entries`);
    const data: Entry[] = await res.json();
    dispatch({ type: "SET_ENTRIES", payload: data });
  };

  // createEntry는 새로운 수입/지출 항목을 '생성'하는 함수입니다.
  const createEntry = async (entry: Omit<Entry, "id" | "createdAt">) => {
    const res = await fetch("/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    const newEntry: Entry = await res.json();
    dispatch({ type: "ADD", payload: newEntry });
  };

  // updateEntry는 기존 수입/지출 항목을 '업데이트'하는 함수입니다.
  const updateEntry = async (entry: Entry) => {
    const res = await fetch(`/api/logs/${entry.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    const updated: Entry = await res.json();
    dispatch({ type: "UPDATE", payload: updated });
  };

  // deleteEntry는 기존 수입/지출 항목을 '삭제'하는 함수입니다.
  const deleteEntry = async (id: string) => {
    await fetch(`/api/logs/${id}`, { method: "DELETE" });
    dispatch({ type: "REMOVE", payload: id });
  };

  return { fetchEntries, createEntry, updateEntry, deleteEntry };
};
