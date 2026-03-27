# 🧠 Smart Interview Preparation Platform

A full-stack web application that simulates real technical interviews using AI, coding challenges, and video-based mock interviews.

---

## 📌 Project Description

The **Smart Interview Preparation Platform** is designed to help users prepare for technical interviews in a structured and interactive way.

It combines:

* Coding practice
* AI-generated interview questions
* Voice-based answering
* Video mock interviews
* Performance analytics

This platform mimics real-world interview environments and provides feedback to improve performance.

---

## ⚙️ Tech Stack

### 🔹 Frontend

* React.js
* Tailwind CSS
* Recharts (Analytics)
* Monaco Editor (Code Editor)
* WebRTC (Video Interviews)

### 🔹 Backend

* Spring Boot (Java)
* REST APIs
* JWT Authentication

### 🔹 Database

* PostgreSQL

### 🔹 AI & APIs

* AI API (for question generation & evaluation)
* Judge0 API (code execution)

---

## 🚀 Features

### 🔐 Authentication

* User Registration & Login
* JWT-based secure authentication

### 💻 Coding Challenges

* Solve coding problems
* Real-time code execution
* Multiple language support

### 🤖 AI Interview

* Generate interview questions by topic & difficulty
* Submit answers and receive AI feedback
* Voice-based answer input (Speech-to-Text)

### 🎥 Video Interview

* Record mock interviews using webcam
* Simulate real interview environment

### 📊 Performance Analytics

* Track scores across modules
* Visual charts with percentage labels
* Analyze strengths & weaknesses

### 🎨 UI/UX

* Professional dashboard layout
* Sidebar navigation
* Responsive design
* Smooth animations

---

## 📷 Screenshots

### 🔹 Login Page

![Login](./screenshots/login.png)

### 🔹 Dashboard

![Dashboard](./screenshots/dashboard.png)

### 🔹 Coding Editor

![Coding](./screenshots/coding.png)

### 🔹 AI Interview

![AI Interview](./screenshots/ai-interview.png)

### 🔹 Mock-Video-Interview

![Mock-Video-Interview](./screenshots/Mock-Video-Interview.png)


### 🔹 Analytics

![Analytics](./screenshots/analytics.png)

---

## ▶️ How to Run the Project

### 🔹 Backend (Spring Boot)

1. Navigate to backend folder:

```
cd smart-interview-platform
```

2. Run application:

```
mvn spring-boot:run
```

3. Server runs on:

```
http://localhost:8080
```

---

### 🔹 Frontend (React)

1. Navigate to frontend folder:

```
cd smart-interview-frontend
```

2. Install dependencies:

```
npm install
```

3. Start application:

```
npm start
```

4. Open in browser:

```
http://localhost:3000
```

---

## 🔑 Environment Setup

Update your API keys in backend:

* Judge0 API Key
* AI API Key (if used)

Example (application.properties):

```
judge0.api.key=YOUR_API_KEY
```

---

## 📈 Future Enhancements

* Save interview history
* Leaderboard system
* AI resume analysis
* Real-time interview simulation with timer

---

## 👩‍💻 Author

**Rutuja Mehare**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
