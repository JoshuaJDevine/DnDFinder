import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/session";
import { createNewGroup, getAllGroups} from "./store/group";

//DnD -----------------------------------------------------
import DnD from "./components/DnD";

function App() {
  const user = useSelector(state => state.session.user)
  const groups = useSelector(state => state.group.groups)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {

    (async () => {
      await dispatch(createNewGroup(
          "20 Week Campaign",
          "Experienced player LFG",
          "Roll20",
          "Homebrew",
          "Saturday",
          1,
          3,
          "AM",
          1,
          5
          ));
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
