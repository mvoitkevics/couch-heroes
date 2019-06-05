
export enum EStat {
    Strength,
    Constitution,
    Dexterity,
    Intelligence,
    Wisdom
}

export enum EClassType {
    Acolyte,
    Warrior,
    Rogue,
    Scholar
}

export interface Stat {
    name: string;
    value: number;
    type: EStat;
}

export interface Stats {
    [stat: string]: Stat
}

export interface Class {
    name: string;
    baseStats: Stats;
    classType: EClassType;
}
