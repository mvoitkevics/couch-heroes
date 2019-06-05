
export enum ETargetType {
    Self,
    Single,
    Multi
}

export enum EActionType {
    Melee,
    Ranged,
    Skill
}

export interface Action {
    actionType: EActionType;
    source: string;
    target: string;
    targetType: ETargetType;
}

export interface ControllerPayload {
    id: string;
    action: Action;
    payload: any;
}