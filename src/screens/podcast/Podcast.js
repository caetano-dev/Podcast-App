import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Text, Button, Spinner, Icon } from "@ui-kitten/components";
import AppContext from "../../../context/AppContext";
import PodCard from "../../components/PodCard.js";
import {
  DemoLogo,
  Background,
  Logo,
  Header,
  TextInput,
  BackButton,
  Toast,
} from "../../components/onBoard";
// import { logoutUser } from "../../api/auth-api";
// import { BackHomeButton } from "../../components/Icons/Icons";
import PlayerControls from "./components/PlayerControls";
import { headerSwitch, podSwitch } from "./modules/PodSwitch";
import { LogoutButton } from "../../components/Icons/Icons";

export default Podcast = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);
  const [select, setSelect] = useState("A");
  const [selectHeader, setSelectHeader] = useState("A");
  const [latest, setLatest] = useState(true);
  const [fav, setFav] = useState(false);
  const [archive, setArchive] = useState(false);
  const [download, setDownload] = useState(false);
  const [controls, setControls] = useState(true);

  //return to implicit
  const onLatest = () => {
    return (
      setControls(true),
      setLatest(!latest),
      setFav(false),
      setArchive(false),
      setDownload(false),
      setSelect(),
      setSelectHeader()
    );
  };
  const onFav = () => {
    return (
      setControls(false),
      setFav(!fav),
      setLatest(false),
      setArchive(false),
      setDownload(false),
      setSelect("B"),
      setSelectHeader("Favourites")
    );
  };

  const onArchive = () => {
    return (
      setControls(false),
      setArchive(!archive),
      setLatest(false),
      setFav(false),
      setDownload(false),
      setSelect("C"),
      setSelectHeader("Archive")
    );
  };

  const onDownload = () => {
    return (
      setControls(false),
      setDownload(!download),
      setLatest(false),
      setFav(false),
      setArchive(false),
      setSelect("D"),
      setSelectHeader("Downloaded")
    );
  };
  const handleStop = async () => {
    if (state.playbackInstance != null) {
      return (
        await state.playbackInstance.stopAsync(),
        dispatch({
          type: "UPDATE_PLAYER_STATUS",
          payload: "noaudio",
        }),
        dispatch({
          type: "UPDATE_MEDIA_CONTROL",
          payload: null,
        }),
        dispatch({
          type: "ARCHIVE_PLAYER_CLEAR",
        })
      );
    }
  };
  return (
    console.log("player status", Boolean(state.playbackInstance)),
    (
      <View style={{ flex: 1, backgroundColor: "#A0A1B5", paddingTop: 10 }}>
        {archive ? null : (
          <>
            <View
              style={{
                flex: 1,
                width: 500,
                height: 500,
                justifyContent: "space-between",
              }}
            >
              {/* <BackHomeButton navigation={navigation} /> */}
              <View style={{ flex: 1 }}>
                <LogoutButton />
              </View>

              <DemoLogo
                width={"80%"}
                height={"180%"}
                style={{ marginTop: 20 }}
              />
            </View>
            <Layout style={styles.logo} />
          </>
        )}

        <Layout
          style={{
            flex: 1,
            backgroundColor: null,
            marginTop: archive ? 15 : null,
          }}
        >
          <PodCard
            borderWidth={3}
            radius={10}
            bgColor={"white"}
            content={
              <>
                <Text
                  category="h3"
                  style={{
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  {headerSwitch(selectHeader)}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    status={latest ? null : "basic"}
                    appearance="ghost"
                    onPress={() => onLatest()}
                  >
                    Latest
                  </Button>
                  <Button
                    status={archive ? null : "basic"}
                    appearance="ghost"
                    onPress={() => onArchive()}
                  >
                    Archive
                  </Button>
                  <Button
                    status={fav ? null : "basic"}
                    appearance="ghost"
                    onPress={() => onFav()}
                  >
                    Favourites
                  </Button>
                  <Button
                    status={download ? null : "basic"}
                    appearance="ghost"
                    onPress={() => onDownload()}
                  >
                    Downloaded
                  </Button>
                </View>
              </>
            }
          />
          {archive ? (
            //TODO: create state player for archive
            <PodCard
              flex={1}
              borderWidth={3}
              radius={20}
              content={
                state.archivePlayerObj ? (
                  <Layout
                    style={{
                      flex: 1,
                      flexWrap: "wrap",
                      flexDirection: "column",
                      backgroundColor: null,
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 5,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "left",
                          marginLeft: 10,
                        }}
                      >
                        <Text
                          category="h6"
                          style={{ fontWeight: "bold", color: "white" }}
                        >
                          {state.archivePlayerObj.title}
                        </Text>
                      </View>

                      {/* <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "baseline",
                    }}
                  >
                    <LikeButton />
                    <FavButton /> 
                  </View> */}
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
                        {state.playbackInstance ? (
                          <Button
                            size="medium"
                            appearance="ghost"
                            status="primary"
                            onPress={() => {
                              handleStop();
                            }}
                          >
                            STOP!
                          </Button>
                        ) : (
                          <Spinner />
                        )}
                      </View>

                      <View
                        style={{
                          flex: 1,
                          alignItems: "flex-end",
                        }}
                      >
                        <Text category="h4" style={{ color: "white" }}>
                          Ep.{state.archivePlayerObj.id}
                        </Text>
                      </View>
                    </View>
                  </Layout>
                ) : (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "left",
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      category="h4"
                      style={{ fontWeight: "bold", color: "black" }}
                    >
                      No Episode Loaded
                    </Text>
                  </View>
                )
              }
            />
          ) : null}
        </Layout>

        {podSwitch(select)}

        {controls ? (
          <Layout
            style={{
              flex: 1,
              backgroundColor: null,
            }}
          >
            {state.latestEpisode && (
              <PlayerControls
                primarySpinner
                src={state.latestEpisode.url}
                cid={state.latestEpisode.cid}
                size={85}
                margins={20}
              />
            )}
          </Layout>
        ) : null}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#A0A1B5",
    flex: 1,
    flexDirection: "column",
  },

  logo: {
    flex: 1,
    backgroundColor: null,
    alignSelf: "center",
  },
  date: {
    fontSize: 15,
    marginRight: 50,
    left: 15,
    marginBottom: 100,
  },
  id: {
    fontWeight: "bold",
    fontSize: 17,
    position: "absolute",
    top: 3,
    left: 230,
  },
  description: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    alignSelf: "center",
  },
  content: {
    margin: 15,
    borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 5,
    padding: 10,
    width: 300,
    backgroundColor: "#799688",
  },
  newContent: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  titleHome: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "auto",
    marginRight: 40,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
