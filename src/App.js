import { ActionBar } from "./components/ActionBar/index";

function App() {
  return (
    <>
      <ActionBar
        profileImg={"https://picsum.photos/200"}
        likes={10}
        shares={2}
      />
    </>
  );
}

export default App;
