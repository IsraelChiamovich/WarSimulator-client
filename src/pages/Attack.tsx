// src/pages/Attack.tsx

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { IUser } from "../types/user";
import { IMissile } from "../types/Missile";

export default function Attack() {
  const user = useAppSelector((state) => state.user.user) as IUser;
  const attacks = useAppSelector((state) => state.attacks.attacks);
  const [missiles, setMissiles] = useState<IMissile[]>(user.userMissiles);
  const dispatch = useAppDispatch();

  const handleLaunch = async (missileName: string) => {
    try {
      const response = await fetch("http://localhost:3000/api/attacks/launch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ name: missileName, id_attacker: user._id }),
      });

      if (!response.ok) throw new Error("Failed to launch missile");

      setMissiles((prevMissiles) =>
        prevMissiles.map((missile) =>
          missile.name === missileName
            ? { ...missile, amount: missile.amount - 1 }
            : missile
        )
      );
    } catch (error) {
      console.error("Error launching missile:", error);
    }
  };

  return (
    <div>
      <h2>Attack Page</h2>
      <h3>Organization: {user.organization}</h3>
      <h3>Location: {user.region}</h3>
      <h3>Available Ammo</h3>
      <div>
        {missiles.map((missile) => (
          <button
            key={missile._id}
            disabled={missile.amount <= 0}
            onClick={() => handleLaunch(missile.name)}
          >
            {missile.name} x {missile.amount}
          </button>
        ))}
      </div>
    </div>
  );
}
