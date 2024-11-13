// src/types/attack.ts

export interface IAttack {
  _id: string; // מזהה ייחודי עבור כל התקפה
  name: string; // שם ההתקפה
  tymeToHit: number; // הזמן עד לפגיעה (בשניות או כל יחידת זמן אחרת)
  intercepts: string[]; // רשימה של סוגי טילים המיועדים ליירט את ההתקפה
  id_attacker: string; // מזהה של התוקף
  id_intercepted?: string; // מזהה של מיירט, אם קיים
}
