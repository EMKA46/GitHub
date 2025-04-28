import React from "react";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div style={styles.app}>
      <Chat />
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
  },
};

export default App;
