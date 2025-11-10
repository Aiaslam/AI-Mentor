
# AI Mentor

An AI powered interview practice tool. Choose a topic like JavaScript, Node.js, or MongoDB and chat with an AI interviewer. It asks questions, evaluates your answers, gives score and suggests areas to improve.

---

## Features
- Smart interview chatbot
- Topic-based questioning
- Basic → Advanced difficulty progression
- Score and feedback after each answer
- Weak-area suggestions for improvement

---

## Tech Stack

| Part | Technology |
|------|------------|
| Frontend UI | React + Vite |
| AI Engine | CopilotKit Cloud (internally uses GPT) |
| UI Components | CopilotKit React UI |

---

## Setup Instructions

### 1. Clone this repository
```sh
git clone https://github.com/Aiaslam/AI-Mentor.git
cd AI-Mentor
````

### 2. Install dependencies

```sh
npm install
```

### 3. Create a `.env` file in the project root

```
VITE_COPILOT_PUBLIC_KEY=your_public_key_here
```

### 4. Run the project

```sh
npm run dev
```

---

## Folder Structure

```
src/
  App.jsx                 → Main app UI layout
  ai/reviewerPrompt.js    → AI interview logic
  assets/                 → App images & icons
```

---

## Future Enhancements

* Difficulty levels (Easy / Medium / Hard)
* Voice mode interviews
* Dashboard tracking progress over time

---

## License

This project is open to collaborate and improve.


