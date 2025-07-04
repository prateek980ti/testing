import Sidebar from "../components/Mainpage/Sidebar/Sidebar";
// import Aivoice from '../components/Mainpage/Ai-voice/Aivoice'
import ConversationTableSection from "../components/ConversationDataCard/ConversationTableSection";

function MainPage() {
  return (
    <div className="flex min-hull h-screen">
      <Sidebar />
      <ConversationTableSection />
    </div>
  );
}

export default MainPage;
