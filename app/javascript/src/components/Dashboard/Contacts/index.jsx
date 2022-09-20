import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import MenuBar from "./MenuBar";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MenuBar showMenu={showMenu} />
      <Container>
        <Header
          actionBlock={<Button icon="ri-add-line" label="Add Contacts" />}
          title="All Contacts"
          menuBarToggle={() => {
            setShowMenu(showMenuStatus => !showMenuStatus);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: " Search Name, Email etc.",
          }}
        />
        <Table />
      </Container>
    </>
  );
};

export default Contacts;
