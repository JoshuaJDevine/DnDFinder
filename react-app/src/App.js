import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";
import { createNewGroup, getAllGroups} from "./store/group";
import DnD from "./components/DnD";
import {ModalProvider} from "./components/modals/Modal";

function App() {
  // const user = useSelector(state => state.session.user)
  // const groups = useSelector(state => state.groupData.groups)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);


//----------------------------------------------------------------------------------------------------------------------
  //Test block for createNewGroup Dispatch
//----------------------------------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   (async () => {
  //     await dispatch(createNewGroup(
  //         "101112!",
  //         "New players Welcome forever and forever ",
  //         "DnD Beyond",
  //         "Tomb of Loot",
  //         "Saaturday",
  //         1,
  //         3,
  //         "PM",
  //         1,
  //         3,
  //         "EST",
  //         ));
  //   })();
  // }, []);


//----------------------------------------------------------------------------------------------------------------------
  //Test block for getAllGroups Dispatch
//----------------------------------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   (async () => {
  //     await dispatch(getAllGroups());
  //   })();
  // }, []);


  if (!loaded) {
    return null;
  }

  return (
      <ModalProvider>
        <DnD/>
      </ModalProvider>
  );
}

export default App;
