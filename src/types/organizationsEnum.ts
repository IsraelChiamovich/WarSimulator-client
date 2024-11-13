// src/types/OrganizationsEnum.ts

export enum organizationsEnum {
  IDF_North = "IDF - North", // אזור צפון של צה"ל
  IDF_South = "IDF - South", // אזור דרום של צה"ל
  IDF_Center = "IDF - Center", // אזור מרכז של צה"ל
  IDF_West_Bank = "IDF - West Bank", // אזור יהודה ושומרון של צה"ל
  Hezbollah = "Hezbollah", // ארגון חיזבאללה
  Hamas = "Hamas", // ארגון חמאס
  IRGC = "IRGC", // משמרות המהפכה האיראניים
  Houthis = "Houthis", // ארגון החות'ים בתימן
}

export interface IOrganization {
  _id: string; // מזהה ייחודי עבור כל ארגון
  name: string; // שם הארגון
  resources: {
    name: string; // שם המשאב (לדוגמה, סוג הטיל)
    amount: number; // כמות המשאב הזמינה לארגון
  }[];
  budget: number; // התקציב הכולל של הארגון
}
