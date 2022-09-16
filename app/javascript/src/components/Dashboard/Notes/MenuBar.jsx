import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const NotesMenuBar = ({ showMenu }) => {
  const [isSearchCollapsedSegments, setIsSearchCollapsedSegments] =
    useState(true);
  const [isSearchCollapsedTags, setIsSearchCollapsedTags] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={showMenu} title="Notes">
        <MenuBar.Block active count={200} label="All" />
        <MenuBar.Block count={80} label="Users" />
        <MenuBar.Block count={60} label="Leads" />
        <MenuBar.Block count={60} label="Visitors" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSearchCollapsedSegments(!isSearchCollapsedSegments),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsedSegments}
          onCollapse={() => setIsSearchCollapsedSegments(true)}
        />
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsedTags(!isSearchCollapsedTags),
            },
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsedTags}
          onCollapse={() => setIsSearchCollapsedTags(!isSearchCollapsedTags)}
        />
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
      </MenuBar>
    </div>
  );
};

export default NotesMenuBar;
