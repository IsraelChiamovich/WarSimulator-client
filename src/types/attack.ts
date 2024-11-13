// src/types/attack.ts

export interface IAttack {
  _id: string; // מזהה ייחודי עבור כל התקפה
  name: string; // שם ההתקפה
  timeToHit: number; // הזמן עד לפגיעה (בשניות או כל יחידת זמן אחרת)
  regionAttacked: string; // אזור התקפה
  id_attacker: string; // מזהה של התוקף
  id_intercepted?: string; // מזהה של מיירט, אם קיים
}
