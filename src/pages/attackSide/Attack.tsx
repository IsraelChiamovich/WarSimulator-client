// src/pages/Attack.tsx

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { IUser } from "../../types/user";
import "../../index.css";

export default function Attack() {
  const user = useAppSelector((state) => state.user.user) as IUser;
  const [activeMissiles, setActiveMissiles] = useState<
    { name: string; amount: number }[]
  >([]);
  const [regionAttacked, setRegionAttacked] = useState<string>("");

  useEffect(() => {
    setActiveMissiles(
      () => user?.userMissiles.filter((missile) => missile.amount > 0) || []
    );
  }, [user?.userMissiles]);

  const handleLaunch = async (missileName: string) => {
    if (!regionAttacked) {
      console.error("Please select a region to attack.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/attacks/launch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          missileName,
          attackerId: user._id,
          regionAttacked,
        }),
      });

      if (!response.ok) throw new Error("Failed to launch missile");

      setActiveMissiles((prevMissiles) =>
        prevMissiles.map((missile) =>
          missile.name === missileName && missile.amount > 0
            ? { ...missile, amount: missile.amount - 1 }
            : missile
        )
      );
    } catch (error) {
      console.error("Error launching missile:", error);
    }
  };

  return (
    <div className="attack">
      <h2>Attack Page</h2>
      <h3>Organization: {user.organization}</h3>
      <h3>Location:</h3>
      <select
        value={regionAttacked}
        onChange={(e) => setRegionAttacked(e.target.value)}
      >
        <option value="">Select Region</option>
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="Center">Center</option>
        <option value="West Bank">West Bank</option>
      </select>
      <h3>Available Ammo</h3>
      <div className="missile-list">
        {activeMissiles.map((missile) => (
          <button
            key={missile.name}
            disabled={missile.amount <= 0 || !regionAttacked}
            onClick={() => handleLaunch(missile.name)}
          >
            {missile.name} x {missile.amount}
          </button>
        ))}
      </div>
    </div>
  );
}
