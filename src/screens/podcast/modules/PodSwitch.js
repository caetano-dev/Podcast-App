import React from "react";
import { Latest, Fav, Archive, Download } from "../components/ContentSwitch";

export const headerSwitch = (selectHeader) => {
  switch (selectHeader) {
    default:
      return <> /Podcast/Latest </>;
    case "Favourites":
      return <> /Podcast/Favourites</>;
    case "Archive":
      return <> /Podcast/Archive </>;
    case "Downloaded":
      return <> /Podcast/Downloads </>;
  }
};

export const podSwitch = (select) => {
  switch (select) {
    default:
      return <Latest layout={2} />;
    case "C":
      return <Archive layout={2} />;
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
