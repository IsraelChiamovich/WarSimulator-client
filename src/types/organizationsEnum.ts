// src/types/OrganizationsEnum.ts

export enum OrganizationsEnum {
  IDF = "IDF",
  Hezbollah = "Hezbollah",
  Hamas = "Hamas",
  IRGC = "IRGC",
  Houthis = "Houthis",
}

export enum IDFRegionsEnum {
  North = "North",
  South = "South",
  Center = "Center",
  WestBank = "West Bank",
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
