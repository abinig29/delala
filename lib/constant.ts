export const BASE_URL = "http://127.0.0.1:9001";

export const AppHeaders = {
  MULTIPART: {
    "Content-Type": "multipart/form-data",
  },
  JSON: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export enum MTD {
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}
export enum KY {
  clinic,
}

export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const SHORT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};
