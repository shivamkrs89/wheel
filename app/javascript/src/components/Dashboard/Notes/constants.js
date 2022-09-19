import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  role: null,
  tags: [],
};
export const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },

  {
    label: "Non-Admin",
    value: "nonAdmin",
  },
];

export const TAGS = [
  {
    label: "Getting Started",
    value: 1,
  },
  {
    label: "Onboarding",
    value: 2,
  },
  {
    label: "User Flow",
    value: 3,
  },
  {
    label: "UX",
    value: 4,
  },
  {
    label: "Bugs",
    value: 5,
  },
  {
    label: "v2",
    value: 6,
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .required("Role is required"),
  tags: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.number().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "Tag is required")
    .required("Tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
