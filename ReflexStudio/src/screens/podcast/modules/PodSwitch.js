import React from "react";
import { Latest, Fav, Archive, Download } from "../components/ContentSwitch";

export const headerSwitch = (selectHeader) => {
  switch (selectHeader) {
    default:
      return <> /Podcast/Reflex/Latest </>;
    case "Favourites":
      return <> /Podcast/Reflex/Fav </>;
    case "Archive":
      return <> /Podcast/Reflex/Archive </>;
    case "Downloaded":
      return <> /Podcast/Reflex/Saved </>;
  }
};

export const podSwitch = (select) => {
  switch (select) {
    default:
      return <Latest layout={2} />;
    case "C":
      return <Archive layout={4} />;
    case "B":
      return (
        <Fav
          layout={4}
          epTitle={<>Episode Title</>}
          desc={
            <>Description: Lorem ipsum dolor sit amet, consectetur … … … ...</>
          }
          epNum={<>Ep. 2</>}
        />
      );

    case "D":
      return (
        <Download
          layout={4}
          epTitle={<>Episode Title</>}
          desc={
            <>Description: Lorem ipsum dolor sit amet, consectetur … … … ...</>
          }
          epNum={<>Ep. 4</>}
        />
      );
  }
};
