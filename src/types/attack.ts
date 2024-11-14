// src/types/attack.ts

export interface IAttack {
  _id: string; // מזהה ייחודי עבור כל התקפה
  name: string; // שם הטיל
  timeToHit: number; // הזמן עד לפגיעה (בשניות או כל יחידת זמן אחרת)
  regionAttacked: string; // אזור התקפה
  attackerId: string; // מזהה של התוקף
  interceptedId?: string; // מזהה של מיירט, אם קיים
  intercepted: boolean;
  status: "Launched" | "Hit" | "Intercepted";
}
