import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";
import { createNewGroup, getAllGroups} from "./store/group";
import DnD from "./components/DnD";

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


  //--------------------------------------------------------------------------------------------------------------------
    //Test block for createNewGroup Dispatch
  //--------------------------------------------------------------------------------------------------------------------
  // useEffect(() => {
  //   (async () => {
  //     await dispatch(createNewGroup(
  //         "My Campaign",
  //         "New players Welcome",
  //         "DnD Beyond",
  //         "Ebberon",
  //         "Monday",
  //         3,
  //         5,
  //         "PM",
  //         1,
  //         4
  //         ));
  //   })();
  // }, []);


  //--------------------------------------------------------------------------------------------------------------------
    //Test block for getAllGroups Dispatch
  //--------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    (async () => {
      await dispatch(getAllGroups());
    })();
  }, []);


  if (!loaded) {
    return null;
  }

  return (
    <DnD/>
  );
}

export default App;
