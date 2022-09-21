import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  CONTACTS_FORM_VALIDATION_SCHEMA,
  CONTACTS_FORM_INITIAL_VALUES,
  ROLES,
} from "../constants";

const Form = ({ onClose, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    Toastr.success("Contact Added Successfully.");
    onClose();
  };

  return (
    <Formik
      initialValues={CONTACTS_FORM_INITIAL_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-8">
            <div className="flex w-full flex-row space-x-6">
              <Input
                required
                className="w-full flex-grow-0"
                label="First Name"
                name="first_name"
                placeholder="Enter first name"
              />
              <Input
                required
                className="w-full flex-grow-0"
                label="Last Name"
                name="last_name"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              isClearable
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLES}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save Changes"}
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
