import React, { useState } from "react";

import { Button, Alert, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import NewContactPane from "./Pane/Create";
import MenuBar from "./SideMenu";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleSubmit = () => {
    setShowDeleteAlert(false);
    Toastr.success("Contact deleted successfully.");
  };

  return (
    <>
      <MenuBar showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          menuBarToggle={() => {
            setShowMenu(showMenuStatus => !showMenuStatus);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: " Search Name, Email etc.",
          }}
        />
        <Table setshowDeleteAlert={setShowDeleteAlert} />
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        <Alert
          closeButton={false}
          isOpen={showDeleteAlert}
          message="Are you sure you want to delete this contact? This change cannot be undone."
          size="medium"
          title="Delete Contact"
          onClose={() => setShowDeleteAlert(false)}
          onSubmit={() => handleSubmit()}
        />
      </Container>
    </>
  );
};

export default Contacts;
