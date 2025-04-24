// 수입, 지출 전역 상태 저장소
// 이 파일은 수입과 지출을 관리하는 전역 상태를 저장하는 컨텍스트를 정의합니다.
// 이 컨텍스트는 수입과 지출의 상태를 관리하고, 상태를 업데이트하는 디스패치 함수를 제공합니다.

import {
  createContext,
  useReducer,
  useContext,
  PropsWithChildren,
} from "react";
import { entriesReducer } from "./entriesReducer";
import { EntriesState, EntriesAction } from "./entriesTypes";

interface Ctx {
  state: EntriesState;
  dispatch: React.Dispatch<EntriesAction>;
}

const EntriesContext = createContext<Ctx | null>(null);

export const EntriesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(entriesReducer, []);
  return (
    <EntriesContext.Provider value={{ state, dispatch }}>
      {children}
    </EntriesContext.Provider>
  );
};

export const useEntriesState = () => {
  const ctx = useContext(EntriesContext);
  if (!ctx) throw new Error("useEntriesState must be inside provider");
  return ctx.state;
};
export const useEntriesDispatch = () => {
  const ctx = useContext(EntriesContext);
  if (!ctx) throw new Error("useEntriesDispatch must be inside provider");
  return ctx.dispatch;
};
