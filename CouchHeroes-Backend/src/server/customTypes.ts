import { EngineSocket } from "socket.io";

export interface GameSocket extends EngineSocket {
    join(room: string): void;
    clientId: number;
    room: string;
}

export interface User {
    id: string
    lastUpdate: number
    clientId: number
    roomId: string
}
export interface Users {
    [userId: string]: User
}
export interface Room {
    roomId: string
    // I am not sure if it is safe to publish the roomId to the client
    // so we only create a second id
    // - If you know if it is safe or not, please tell me :) -
    //publicRoomId: string
    removing: boolean
    users: Users
}
export interface Rooms {
    [room: string]: Room
}