interface IDateProvider {
  convertToUtc(date: Date): string;
  dateNow(): Date;
  compareIfBeforeNow(date: Date): boolean;
  compareIfBefore(start_date: Date, end_date: Date): boolean;
}

export { IDateProvider };
