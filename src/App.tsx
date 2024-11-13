// src/App.tsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { RootState, useAppSelector } from "./store/store";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  const { user } = useAppSelector((state: RootState) => state.user);
  return (
    <div className="app">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Navigate to={"/login"} />} />
          {/* {user && (
            <Route
              path="/game"
              element={user.attacker ? <AttackSide /> : <DefenceSide />}
            />
          )} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
