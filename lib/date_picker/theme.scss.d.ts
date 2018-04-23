declare interface IthemeScss {
  input: string;
  inputElement: string;
  header: string;
  year: string;
  date: string;
  calendarWrapper: string;
  yearsDisplay: string;
  monthsDisplay: string;
  dialog: string;
  calendar: string;
  prev: string;
  next: string;
  title: string;
  years: string;
  week: string;
  days: string;
  day: string;
  month: string;
  disabled: string;
  active: string;
}

// noinspection JSUnusedGlobalSymbols
declare let themeScss: IthemeScss;

export = themeScss;
export as namespace themeScss;
