<h1 align="center">🎙️ LiveKit + Google Gemini 2.0 Realtime Voice Assistant</h1>

<p align="center">
  <b>⚡ Real-Time AI Voice Assistant with Ultra-Low Latency, Noise Cancellation & Custom Personality ⚡</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10%2B-blue?logo=python" />
  <img src="https://img.shields.io/badge/LiveKit-Agents-orange?logo=webrtc" />
  <img src="https://img.shields.io/badge/Google-Gemini_2.0-purple?logo=google" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## 📌 Features
✅ **Real-time Voice Interaction** – Instant AI replies with natural-sounding speech.  
✅ **Powered by Google Gemini 2.0 Flash (Realtime)** – Context-aware & lightning-fast.  
✅ **Noise Cancellation (BVC)** – Crystal-clear voice input in noisy environments.  
✅ **Fully Customizable** – Change `Agent_Instructions` & `Agent_Response` to fit your use case.  
✅ **LiveKit Integration** – Works with rooms, telephony, and streaming audio/video.  

---

## 📊 System Architecture

```mermaid
graph LR
    A[🎙️ User Speaks<br><sub>Voice Input</sub>] -->|🔊 Audio Stream| B[🖥️ LiveKit Room<br><sub>WebRTC Connection</sub>]
    B -->|✨ Noise Filtering| C[🌀 Noise Cancellation (BVC)<br><sub>Clear Audio</sub>]
    C -->|📡 Send to AI| D[🤖 Google Gemini 2.0 Flash (Realtime)<br><sub>STT + Reasoning</sub>]
    D -->|💬 AI Output| E[🧠 AgentSession<br><sub>Logic Handler</sub>]
    E --> F[👨‍💻 Assistant Class<br><sub>Personality Applied</sub>]
    F -->|🔈 Speak Back| G[🎧 User Hears Response<br><sub>Natural AI Voice</sub>]
