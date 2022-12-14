import { Video } from "./components/Video/index";
import { Layout } from "./components/layout";

import sampleVideo from "./assets/BigBuckBunny_512kb.mp4";

function App() {
  return (
    <Layout>
      <Video source={sampleVideo} poster="https://picsum.photos/900" />
    </Layout>
  );
}

export default App;
