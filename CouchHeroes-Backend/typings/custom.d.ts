interface GameSocket extends SocketIOClient.Socket {
    join(room: string): void;
    clientId: number;
    room: string;
    isScreen: boolean;
}

interface User {
    id: string
    lastUpdate: number
    clientId: number
    roomId: string
    isMaster: boolean
}
interface Users {
    [userId: string]: User
}
interface Room {
    roomId: string
    // I am not sure if it is safe to publish the roomId to the client
    // so we only create a second id
    // - If you know if it is safe or not, please tell me :) -
    //publicRoomId: string
    removing: boolean
    users: Users
}
interface Rooms {
    [room: string]: Room
}

interface Object {
    Matter: any
    matter: any
  }
  
  interface Window {
    game: Phaser.Game
  }
  
  interface Latency {
    current: number
    high: number
    low: number
    ping: number
    id: string
    canSend: boolean
    history: any[]
  }