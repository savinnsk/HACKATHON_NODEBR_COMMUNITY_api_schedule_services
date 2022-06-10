interface IDateProvider {
  convertToUtc(date: Date): string;
  dateNow(): Date;
  compareIfBefore(start_date: Date, end_date: Date): boolean;
}

export { IDateProvider };
