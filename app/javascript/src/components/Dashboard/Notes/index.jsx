import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import NotesList from "./NotesList";
import NewNotePane from "./Pane/Create";
import SideMenu from "./SideMenu";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState([]);
  const [notes, setNotes] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <SideMenu showMenu={showMenu} />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Note"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          menuBarToggle={() => {
            setShowMenu(showMenuStatus => !showMenuStatus);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone Number etc.",
          }}
        />
        {notes.length ? (
          notes.map(note => (
            <NotesList
              key={note.id}
              note={note}
              setSelectedNoteId={setSelectedNoteId}
              setShowDeleteAlert={setShowDeleteAlert}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteId={selectedNoteId}
            setSelectedNoteId={setSelectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
