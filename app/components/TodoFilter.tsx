import Link from "next/link";
import { FilterType } from "../lib/types";

type Props = {
  currentFilter: FilterType;
};

const filters = [
  {
    label: "all",
    value: "all",
  },
  {
    label: "完了済み",
    value: "completed",
  },
  {
    label: "未完了",
    value: "incompleted",
  },
];

export default function TodoFilter({ currentFilter }: Props) {
  return (
    <>
      {filters.map((f) => {
        return (
          <Link 
          className={`filter-btn ${currentFilter===f.value?"active":""}`}
          
          key={f.value} href={`/?filter=${f.value}`}>
            {f.label}
          </Link>
        );
      })}
    </>
  );
}
