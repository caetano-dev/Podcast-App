import React from "react";
import { Latest, Fav, Archive, Download } from "../components/ContentSwitch";
import { AppContext } from "../../../context/AppContext";

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
      return (
        <AppContext.Consumer>
          {(context) => {
            const ep1 = context.state.episodes.ep1;
            return (
              ep1 && (
                <Latest
                  layout={2}
                  epTitle={<>{ep1.title}</>}
                  desc={<>{ep1.description}</>}
                  epNum={<>Ep. {ep1.id}</>}
                  ad={<>{ep1.ads}</>}
                />
              )
            );
          }}
        </AppContext.Consumer>
      );
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
    case "C":
      return (
        <Archive
          layout={4}
          epTitle={<>Episode Title</>}
          desc={
            <>Description: Lorem ipsum dolor sit amet, consectetur … … … ...</>
          }
          epNum={<>Ep. 3</>}
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
