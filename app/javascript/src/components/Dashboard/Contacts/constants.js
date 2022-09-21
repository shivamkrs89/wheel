import * as yup from "yup";

export const CONTACTS_DATA = [
  {
    name: "Ronald Richards",
    role: "Owner",
    imageUrl: "https://i.pravatar.cc/300?img=52",
    email: "albertronald@borer.com",
    created_at: "Feb 5, 2021",
  },
  {
    name: "Jacob Jones",
    role: "User",
    imageUrl: "https://i.pravatar.cc/300?img=47",
    email: "albertjacob@borer.com",
    created_at: "Feb 5, 2021",
  },
];

export const CONTACTS_DETAILS = Array(10)
  .fill(CONTACTS_DATA)
  .flat()
  .map((contact, idx) => ({ ...contact, id: idx }));

export const CONTACTS_FORM_INITIAL_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  role: null,
};

export const ROLES = [
  {
    label: "Owner",
    value: "owner",
  },
  {
    label: "User",
    value: "user",
  },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .required("Role is required"),
});
