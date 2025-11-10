import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { reviewerPrompt } from "./ai/reviewerPrompt";
function App() {
  return (
    <CopilotKit
      publicApiKey={import.meta.env.VITE_COPILOT_PUBLIC_KEY}
      url="https://api.copilotkit.ai/v1" 
    >
      <div style={{ display: "flex", height: "100vh" }}>
        
     
        <div style={{ flex: 1, padding: "32px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#7e3ff2" }}>
          AI Mentor
          </h1>
          <p style={{ marginTop: "8px", fontSize: "15px", color: "#555" }}>
           Chat with the AI on the right. It will ask you questions about the selected topic, evaluate your answers, and give you feedback.
          </p>
        </div>

        {/* Right side AI chat */}
        <CopilotSidebar
          defaultOpen={true}
          instructions={reviewerPrompt}
          labels={{title: "Your reviewer",
        initial: "Hi! 👋 Give me a topic and let's get started with the review."}}
        />
      </div>
    </CopilotKit>
  );
}

export default App;
