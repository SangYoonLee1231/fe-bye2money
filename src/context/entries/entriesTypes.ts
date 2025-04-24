export interface Entry {
  id: string;
  date: string; // YYYY-MM-DD
  amount: number;
  content: string;
  paymentMethod: string;
  category: string;
  type: "income" | "expense";
  createdAt: string;
}

export type EntriesState = Entry[];

export type EntriesAction =
  | { type: "SET_ENTRIES"; payload: Entry[] }
  | { type: "ADD"; payload: Entry }
  | { type: "UPDATE"; payload: Entry }
  | { type: "REMOVE"; payload: string };
