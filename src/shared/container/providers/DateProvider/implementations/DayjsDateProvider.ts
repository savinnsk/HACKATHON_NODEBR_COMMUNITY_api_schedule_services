import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  convertToUtc(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  compareIfBeforeNow(date: Date): boolean {
    return dayjs(date).isBefore(this.dateNow());
  }

  dateNow(): Date {
    return dayjs().toDate();
  }

  compareIfBefore(start_date: Date, end_date: Date): boolean {
    return dayjs(start_date).isBefore(end_date);
  }
}

export { DayjsDateProvider };
