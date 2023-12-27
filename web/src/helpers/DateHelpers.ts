import { formatRelative } from "date-fns/formatRelative"

export const prettifyDate = (dateString) => {
  const date = new Date(dateString);
  const baseDate = new Date();
  return formatRelative(date, baseDate);
}