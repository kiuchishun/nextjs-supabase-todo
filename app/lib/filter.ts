import type { FilterType } from "./types";

export default function normalizeFilter(
  filter: string | undefined,
): FilterType {
  if (filter === "completed") return "completed";
  if (filter === "incompleted") return "incompleted";
  return "all";
}
