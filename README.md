# Kushal Sharma — Morningstar & PitchBook Presentation Website

An interactive, presentation-grade web application designed for Kushal Sharma's technical interview with the **Product and Engineering team at PitchBook / Morningstar** for the **PitchBook Collection Applications** Senior Software Engineer role.

---

## 🌟 Why This Replaces a Traditional Slide Deck

Instead of presenting with a static PowerPoint or Google Slides, this web application acts as a **living technical demonstration** of Kushal's engineering capabilities:
- **Financial-Tech Design Language**: Sleek Morningstar / PitchBook aesthetic (Morningstar Red, deep slate, dark glassmorphism, responsive data cards).
- **Interactive Slide Presentation**: 8 structured, presentation-ready slides navigated via keyboard (`←` / `→` or `Space`), complete with a progress bar.
- **Presenter Talking Notes Drawer (`P` shortcut)**: Built-in, private speaking cues customized for every slide so Kushal can deliver points with ease while presenting.
- **Job Description 1-to-1 Alignment Matrix**: Direct mapping between PitchBook’s JD requirements (Java, Spring, SQL/NoSQL, AI-augmented engineering, TDD, K8s, DB migration) and Kushal’s actual production deliverables.
- **Live Interactive Data Pipeline Simulator**: A functional interactive console simulating PitchBook's collection architecture (Ingestion &rarr; L1 Deduplication &rarr; Kafka Bus &rarr; TDD Validation &rarr; Dual-DB Persistence).
- **Interview Q&A Hub**: Interactive technical accordion addressing common interview questions (legacy modernization, multi-DB reconciliation, enterprise AI, TDD).

---

## 🚀 How to Run the Website Locally

You can open the website directly in any modern browser without needing to build or install external dependencies:

### Option 1: Direct File Open
Double-click `index.html` or open it in your browser:
```bash
open index.html
```

### Option 2: Local HTTP Server (Recommended)
Run using Python’s built-in web server:
```bash
python3 -m http.server 3000
```
Then visit: [http://localhost:3000](http://localhost:3000)

---

## ⌨️ Keyboard Shortcuts (For Smooth Presenting)

| Key | Action |
| :--- | :--- |
| `→` or `Space` or `PageDown` | Go to Next Slide |
| `←` or `Shift + Space` or `PageUp` | Go to Previous Slide |
| `P` | Toggle Presenter Talking Notes drawer |
| `F` | Toggle Fullscreen Mode |
| `Esc` | Close Presenter Notes drawer |

---

## 📑 Slide-by-Slide Outline & Strategy

1. **Slide 1: Executive Summary & PitchBook Fit**: Overview of 7+ years of experience, core metrics (300% ingestion boost, 30% K8s gain, MS in CS from University of Florida), and target role alignment.
2. **Slide 2: Why Morningstar & PitchBook**: Passion for PitchBook's private market data mission, empathy for legacy Java/JSP to Spring Boot/React modernization, and alignment with Morningstar's core culture (customer empathy, positive intent).
3. **Slide 3: Professional Journey & Timeline**: Filterable experience breakdown across Wissen Technology, Remora, Itiviti, QualityKiosk, Verdantis, and Sonos.
4. **Slide 4: Job Description Alignment Matrix**: Detailed side-by-side evidence matrix matching every JD requirement.
5. **Slide 5: Architecture Deep-Dives**:
   - Case Study 1: High-throughput Collection & Ingestion Pipeline (300% throughput gain).
   - Case Study 2: Enterprise Spring AI & RAG Engine in Java backend.
   - Case Study 3: Spring Security Audit System with interactive JSON diffing.
6. **Slide 6: Live Interactive Collection Simulator**: Interactive widget demonstrating multi-source ingestion, duplicate detection, and dual-database parity.
7. **Slide 7: Education & Academic Rigor**: Master of Science in CS at University of Florida, Graduate Teaching Assistantship under Prof. Ruogu Fang, and key systems projects.
8. **Slide 8: Engineering Philosophy & Q&A Discussion Hub**: TDD discipline, Strangler Fig pattern, mentorship with positive intent, and technical deep-dive answers.

---

## 📄 Export & Print

Click the **"Print Dossier"** button in the header or press `Cmd+P` (`Ctrl+P` on Windows) to generate a clean, printer-friendly PDF dossier of your credentials and achievements.

