import axios from "axios";

export const request = axios.create({
  baseURL: "https://demo.api.satsure.co/region",
  headers: {
    "x-api-key": "xJH2KK5Mm08qm0GgC6peX5nN8QJFoESF8NrmREFc",
  },
});

