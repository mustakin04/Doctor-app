# Doctor Appointment Management System (Frontend)

A modern **React.js** frontend for booking and managing doctor appointments. This repository currently ships the **Patient** side (MVP) and focuses on clean state management and API integration. **Responsiveness is partially pending**; desktop-first layouts are implemented and mobile/tablet polishing is listed in the Roadmap.

---

## ✨ Features (Patient MVP)

* **Auth**: Login / Register (Patient)
* **Doctor Directory**: Paginated, searchable list; filter by specialization
* **Book Appointment**: Modal with date picker and success feedback
* **My Appointments**: View by status (Pending / Completed / Cancelled), cancel pending
* **Optimistic UI**: Fast updates on booking/cancel

> **Note**: Doctor dashboard (provider side) will be added next (see Roadmap).

---

## 🧰 Tech Stack

* **React.js** + **React Router**
* **Redux Toolkit** (global state)
* **Axios** (HTTP client with interceptors)
* **Tailwind CSS** for styling
* **DaisyUI** components (utility-first, themeable)
* **Material Tailwind** components (for richer UI building blocks)

---

## 🔗 API

**Base URL**: `https://appointment-manager-node.onrender.com/api/v1`

**Endpoints used in Patient MVP**

* `POST /auth/register/patient`
* `POST /auth/login` (body includes `role: "PATIENT"`)
* `GET /specializations`
* `GET /doctors?page={page}&limit={limit}&search={name?}&specialization={spec?}`
* `POST /appointments` (body: `{ doctorId, date }`)
* `GET /appointments/patient?status={status?}&page={page}`
* `PATCH /appointments/update-status` (body: `{ status, appointment_id }`)

> Doctor endpoints are planned for the next milestone.

---

## 🚀 Getting Started

### 1) Clone

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <my-project>
```

### 2) Install

```bash
# npm\ npm install
```
### 3) Run Dev Server

```bash
npm run dev     # Vite
# or CRA
# npm start
```

### 4) Build

```bash
npm run build
```

---

## 🗂️ Project Structure

```
src/
├─ App.js
├─ index.js
├─ routes/
│  └─ PrivateRoute.js
├─ pages/
│  ├─ Login.js
│  ├─ Register.js
│  └─ patient/
│     ├─ Dashboard.js
│     └─ Appointments.js
├─ components/
│  ├─ Navbar.js
│  ├─ ui/
│  │  ├─ Button.js
│  │  ├─ Modal.js
│  │  ├─ Input.js
│  │  ├─ Select.js
│  │  └─ DatePicker.js
│  ├─ doctors/
│  │  ├─ DoctorCard.js
│  │  └─ DoctorList.js
│  └─ appointments/
│     ├─ AppointmentCard.js
│     └─ AppointmentList.js
├─ redux/
│  ├─ store.js
│  └─ slices/
│     ├─ authSlice.js
│     ├─ doctorSlice.js
│     └─ appointmentSlice.js
├─ services/
│  ├─ axiosInstance.js
│  ├─ authService.js
│  ├─ doctorService.js
│  ├─ appointmentService.js
│  └─ specializationService.js
├─ hooks/
│  ├─ useAuth.js
│  └─ usePagination.js
├─ utils/
│  └─ formatDate.js
└─ styles/
   └─ globals.css
```

---

## 🔐 Authentication Flow (Patient)

1. Register via `POST /auth/register/patient`
2. Login via `POST /auth/login` with `role: "PATIENT"`
3. On success, store `{ token, role }` in Redux and persist (localStorage)
4. Protected routes use `PrivateRoute` to check auth state

---

## 🌐 Axios Setup

* Centralized in `src/services/axiosInstance.js`
* Adds `Authorization: Bearer <token>` header when present
* Handles 401 globally (logout + redirect to `/login`)

---

## 🧭 Navigation

* `/login` — Patient login
* `/register` — Patient/Doctor tabs (Patient active for MVP)
* `/patient/dashboard` — Doctor list, search, filter, pagination, booking
* `/patient/appointments` — My Appointments with status filters

---

## 🧱 UI Libraries

* **DaisyUI** for quick themed components (cards, modals, buttons)
* **Material Tailwind** for form elements, date pickers, and complex widgets

> You can mix-and-match, but keep styles consistent per page.

---

## 🧪 Scripts

```json
{
  "scripts": {
    "dev": "vite",          // or "start" for CRA
    "build": "vite build",  // or "build" for CRA
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx"
  }
}
```

---

## 📸 Screenshots

Add images to `public/` and reference here.

| Page              | Screenshot                           |
| ----------------- | ------------------------------------ |
| Patient Dashboard | `public/screens/dashboard.png`       |
| Book Modal        | `public/screens/book-modal.png`      |
| My Appointments   | `public/screens/my-appointments.png` |

---

## 🧭 Roadmap

* [ ] **Responsiveness**: mobile & tablet breakpoints (flex/grid, card stacking, modal sizes)
* [ ] **Doctor Dashboard**: appointment list, status updates (Complete/Cancelled)
* [ ] **Real-time Updates**: Re-fetch on focus; WebSocket/SSE (optional)
* [ ] **Form Validation**: Improve client-side validation and error states
* [ ] **Unit Tests**: Components and slices
* [ ] **Accessibility**: Focus traps for modals, ARIA labels

---

## 🐞 Known Issues

* Desktop-first layouts; some components overflow on small screens
* Date picker needs better mobile UX
* Mixed component libraries can cause inconsistent spacing (tune Tailwind presets)

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/responsive-ui`
3. Commit changes: `git commit -m "feat: improve responsive styles on patient pages"`
4. Push and open a PR

---

## 📄 License

MIT © <your-name>

---

## 👤 Maintainer

**Your Name**

* Email: [your@email.com](mailto:your@email.com)
* GitHub: [@your-username](https://github.com/your-username)

---

## ✅ Reviewer Checklist (Quick)

* [ ] Can register & login as **Patient**
* [ ] Doctor list loads with search, filter, pagination
* [ ] Can book an appointment (modal + success)
* [ ] "My Appointments" shows statuses and supports cancel
* [ ] 401 redirect works when token is removed
* [ ] No hard-coded API URLs (env-driven)
