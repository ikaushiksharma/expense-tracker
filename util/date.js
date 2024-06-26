import { format } from "date-fns";
export function getFormattedDate(date) {
  return format(date, "PPp");
}
