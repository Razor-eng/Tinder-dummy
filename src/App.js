import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <TinderCards />
              <SwipeButtons />
            </>
          } />
          <Route path="/chat" element={
            <>
              <Header backButton="/" />
              <Chats />
            </>
          } />
          <Route path="/chat/:person" element={
            <>
              <Header backButton="/chat" />
              <ChatScreen />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
