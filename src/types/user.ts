// src/types/user.ts

export interface IUser {
  _id: string; // מזהה ייחודי עבור כל משתמש
  username: string; // שם המשתמש
  password: string; // סיסמת המשתמש
  organization: string; // שם הארגון אליו שייך המשתמש
  region?: string; // אזור גיאוגרפי עבור משתמשים בצה"ל (אופציונלי)
  userMissiles: {
    name: string; // שם המשאב (סוג הטיל)
    amount: number; // כמות המשאב הזמינה למשתמש (מספר טילים)
  }[];
  userBudget: number; // התקציב הכולל של המשתמש
  isAttacker: boolean; // האם המשתמש יכול לבצע תקיפות
}
