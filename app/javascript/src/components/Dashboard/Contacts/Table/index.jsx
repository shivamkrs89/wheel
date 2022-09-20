import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS_TABLE_COLUMN } from "./column";

import { CONTACTS_DETAILS } from "../constants";

const Table = () => (
  <div className="w-full">
    <NeetoUITable
      columnData={CONTACTS_TABLE_COLUMN}
      currentPageNumber={2}
      defaultPageSize={5}
      rowData={CONTACTS_DETAILS}
      onRowClick={() => {}}
      onRowSelect={() => {}}
    />
  </div>
);

export default Table;
