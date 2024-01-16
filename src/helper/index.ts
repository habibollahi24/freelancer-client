import moment from "jalali-moment";

const persianNumbers = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];

export const toLocaleDateString = (date: Date) => {
  return new Date(date).toLocaleDateString("fa-IR", {});
};
// .toLocaleDateString("fa-IR")

export const toPersianNumnersWithComma = (num: number) => {
  const numberWithComma = withComma(num);
  const result = toFarsiNumber(numberWithComma);
  return result;
};

const withComma = (number: number) => {
  const str = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str;
};

function toFarsiNumber(n: string) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export function trauncate(str: string, length: number) {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
}

export const convertPersianToEnglisg = function (str: any) {
  if (typeof str === "string") {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i);
    }
  }
  return str;
};

export const miladiDate = (persianDate: any) => {
  const date = moment
    .from(convertPersianToEnglisg(persianDate), "fa", "YYYY/MM/DD")
    .format("YYYY/MM/DD");
  return date;
};
