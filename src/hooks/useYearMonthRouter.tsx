// src/hooks/useYearMonthRouter.ts
import { useParams, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

interface Props {
  onChange: (year: number, month: number) => void;
}

export function useYearMonthRouter({ onChange }: Props) {
  const { year: yParam, month: mParam } = useParams<{
    year: string;
    month: string;
  }>();
  const navigate = useNavigate();
  const today = new Date();

  const year = yParam ? parseInt(yParam, 10) : today.getFullYear();
  const month = mParam ? parseInt(mParam, 10) : today.getMonth() + 1;

  const normalize = (y: number, m: number) => {
    if (m < 1) return { y: y - 1, m: 12 };
    if (m > 12) return { y: y + 1, m: 1 };
    return { y, m };
  };

  const prevMonth = useCallback(() => {
    const { y, m } = normalize(year, month - 1);
    navigate(`/${y}/${String(m).padStart(2, "0")}`, { replace: true });
  }, [year, month, navigate]);

  const nextMonth = useCallback(() => {
    const { y, m } = normalize(year, month + 1);
    navigate(`/${y}/${String(m).padStart(2, "0")}`, { replace: true });
  }, [year, month, navigate]);

  useEffect(() => {
    onChange(year, month);
  }, [year, month, onChange]);

  return { year, month, prevMonth, nextMonth };
}
