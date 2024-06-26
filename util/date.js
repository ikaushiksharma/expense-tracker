import { format } from "date-fns";
export function getFormattedDate(date) {
  return format(date, "PPp");
}
export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
