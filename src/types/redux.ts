// src/types/redux.ts

import { IAttack } from "./attack";
import { IUser } from "./user";

export enum DataStatus {
  LOADING = "LOADING", // מצב טעינה
  SUCCESS = "SUCCESS", // טעינה הושלמה בהצלחה
  FAILED = "FAILED", // כשלון בטעינה
  IDLE = "IDLE", // מצב ריק/ללא טעינה
}

export interface userState {
  error: string | null; // הודעת שגיאה במידה ויש (null אם אין)
  status: DataStatus; // סטטוס הנתונים (טוען, הצלחה, כשלון או במצב המתנה)
  user: null | IUser; // נתוני המשתמש או null אם לא קיים
}

export interface attacksState {
  error: string | null; // הודעת שגיאה במידה ויש (null אם אין)
  status: DataStatus; // סטטוס הנתונים
  attacks: IAttack[]; // מערך של התקפות
}
