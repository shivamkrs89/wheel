import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Tag, Tooltip, Avatar } from "neetoui";

import { calculateCreatedAgo, formatDatetoWeekDay } from "./utils";

const NotesList = ({ key, note, setSelectedNoteIds, setShowDeleteAlert }) => {
  const handleDelete = () => {
    setShowDeleteAlert(true);
    setSelectedNoteIds(key);
  };

  return (
    <div className="neeto-ui-shadow-xs neeto-ui-rounded-none neeto-ui-border-gray-800 mb-4 w-full space-y-2 border p-5">
      <div className="flex justify-between">
        <Typography style="h4">{note.title}</Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          <li className="m-2">Edit</li>
          <li className="m-2" onClick={handleDelete}>
            Delete
          </li>
        </Dropdown>
      </div>
      <div className="mb-2">
        <Typography className="neeto-ui-text-gray-500" style="body1">
          {note.description}
        </Typography>
      </div>
      <hr />
      <div className="mt-3 flex align-middle ">
        <Tag
          className="neeto-ui-rounded-none bg-gray-200"
          label="Getting Started"
        />
        <div className="item-center ml-auto flex space-x-2">
          <Clock size="20" />
          <Tooltip
            content={formatDatetoWeekDay(note.created_at)}
            position="bottom"
          >
            <Typography style="body3">
              Created {calculateCreatedAgo(note.created_at)}
            </Typography>
          </Tooltip>
          <Avatar
            size="medium"
            user={{
              imageUrl: "https://i.pravatar.cc/189",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotesList;
