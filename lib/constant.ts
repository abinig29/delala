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
  inquiry,
  product,
  profile,
  auth,
  service,
  classified
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


export const paginationKeys = (searchTextName: string) => ['per_page', 'sort', 'page', searchTextName];


export const categoryFieldsMap = {
  SERVICE: ['vehicleDetail', 'jobDetail', 'classifiedDetail', "propertyDetail"],
  VEHICLE: ['serviceDetail', 'jobDetail', 'classifiedDetail', "propertyDetail"],
  JOB: ['vehicleDetail', 'serviceDetail', 'classifiedDetail', "propertyDetail"],
  CLASSIFIED: ['vehicleDetail', 'serviceDetail', 'jobDetail', "propertyDetail"],
  PROPERTY: ['vehicleDetail', 'serviceDetail', 'jobDetail', "classifiedDetail"],
};
