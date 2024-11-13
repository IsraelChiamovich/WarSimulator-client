// src/types/Missile.ts

export interface IMissile {
  _id: string; // מזהה ייחודי עבור כל טיל
  name: string; // שם הטיל
  description: string; // תיאור מפורט על הטיל
  speed: number; // מהירות הטיל
  intercepts: string[]; // רשימה של סוגי טילים אותם ניתן ליירט
  price: number; // מחיר הטיל
}
