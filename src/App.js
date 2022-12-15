import { CommentsContextProvider } from "./components/context/CommentsContext";

import { Video } from "./components/Video/index";
import { Layout } from "./components/layout";
import { Comments } from "./components/Comments";

import sampleVideo from "./assets/BigBuckBunny_512kb.mp4";

function App() {
  return (
    <Layout>
      <CommentsContextProvider>
        <Video source={sampleVideo} poster="https://picsum.photos/900" />
        <Comments />
      </CommentsContextProvider>
    </Layout>
  );
}

export default App;
