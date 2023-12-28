import { formatRelative } from "date-fns/formatRelative"

export const prettifyDate = (dateString) => {
  const date = new Date(dateString);
  const baseDate = new Date();
  return formatRelative(date, baseDate);
}

export const formatDateFromDbForInput = (dateString) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`

}
