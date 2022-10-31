import { format } from "date-fns";

export const parseToHumanDateTime = (date: Date | number) => {
  return format(date, "Y-MM-dd h:mm a");
};
