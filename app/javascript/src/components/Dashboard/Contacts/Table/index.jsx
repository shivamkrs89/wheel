import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { buildContactsTableColumnData } from "./utils";

import { CONTACTS_DETAILS } from "../constants";

const Table = ({ setshowDeleteAlert }) => (
  <div className="w-full">
    <NeetoUITable
      columnData={buildContactsTableColumnData(setshowDeleteAlert)}
      currentPageNumber={2}
      defaultPageSize={5}
      rowData={CONTACTS_DETAILS}
      onRowClick={() => {}}
      onRowSelect={() => {}}
    />
  </div>
);

export default Table;
