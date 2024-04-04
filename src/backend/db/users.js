import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Girindra",
    lastName: "kaushik",
    email: "gk47@apple.com",
    password: "Kaushik47",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
