# 📈 Stock Trading Platform (Full Stack)

A complete **Stock Trading Platform** inspired by modern trading apps (like Zerodha/Kite), built using a **full-stack architecture**.

This project includes:

* 🌐 Landing Website (Frontend)
* 📊 Trading Dashboard
* ⚙️ Backend API (Node.js + Database)

---

## 🚀 Features

### 🧑‍💻 Frontend (User Website)

* 🏠 Landing page (modern UI)
* 🔐 User Authentication (Login/Register)
* 📄 Product, Pricing, About & Support pages
* 🎨 Responsive design

### 📊 Dashboard (Trading Interface)

* 📈 Portfolio summary
* 📉 Holdings & Positions tracking
* 🧾 Orders management
* 💰 Funds overview
* 📊 Charts & analytics (graphs)

### ⚙️ Backend (API)

* 🔐 Authentication system (JWT-based)
* 📦 User data management
* 📊 Holdings, Orders, Positions models
* 🗄️ Database integration
* 🔑 Secure token handling

---

## 🛠️ Tech Stack

### Frontend

* **React (Vite)**
* **CSS / Custom Styling**

### Dashboard

* **React**
* **Chart Components**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **JWT Authentication**

---

## 📂 Project Structure

```bash
Stock-trading-platform/
│
├── frontend/          # Landing website (React + Vite)
├── dashboard/         # Trading dashboard UI
├── backend/           # Node.js backend (API + DB)
│
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Hemant1282/Stock-trading-platform.git
cd Stock-trading-platform
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

### 4️⃣ Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

---

## ▶️ How It Works

1. User registers/logs in via frontend
2. Backend authenticates using JWT
3. Dashboard fetches user data:

   * Holdings
   * Positions
   * Orders
4. User can simulate trading and view analytics

---

## 📊 Key Modules

* **Auth System** → Login/Register with JWT
* **Holdings Model** → Tracks owned stocks
* **Orders Model** → Buy/Sell transactions
* **Positions Model** → Active trades
* **Dashboard UI** → Visual insights & charts

---

## ⚠️ Disclaimer

* This is a **simulation project**
* Not connected to real stock exchanges
* For educational purposes only

---

## 💡 Future Improvements

* 📡 Live stock market API integration
* 📊 Advanced charts (TradingView)
* 💳 Real money trading simulation
* 📱 Mobile app version
* 🔔 Notifications system
* 🤖 AI-based trading suggestions

---

## 🧠 What You Learn From This Project

* Full-stack development
* REST API design
* Authentication (JWT)
* State management in React
* Financial system basics

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork and improve this project.

---

## 📄 License

This project is open-source and free to use.

---

## 👨‍💻 Author

Developed by **Hemant**
