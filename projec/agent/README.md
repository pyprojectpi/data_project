## 📊 System Architecture

```mermaid
graph LR
    A[🎙️ User Speaks<br><sub>Voice Input</sub>] -->|🔊 Audio Stream| B[🖥️ LiveKit Room<br><sub>Session Connection</sub>]
    B -->|✨ Noise Filtering| C[🌀 Noise Cancellation (BVC)<br><sub>Clear Audio</sub>]
    C -->|📡 Send to AI| D[🤖 Google Gemini 2.0 Flash (Realtime)<br><sub>Speech-to-Text + Reasoning</sub>]
    D -->|💬 AI Output| E[🧠 AgentSession<br><sub>Handles Logic & Context</sub>]
    E --> F[👨‍💻 Assistant Class<br><sub>Applies Agent Instructions</sub>]
    F -->|🔈 Speak Back| G[🎧 User Hears Response<br><sub>Natural AI Voice</sub>]
