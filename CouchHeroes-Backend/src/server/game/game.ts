import '@geckos.io/phaser-on-nodejs'
import commonConfig from './config'

import RoomManager from '../managers/roomManager'

export class PhaserGame extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config)
  }
}

const Game = (roomManager: RoomManager, roomId: string, options: { scene: string; level: number }) => {
  let config = { ...commonConfig }

  // @ts-ignore
  config.customEnvironment = true

  // a very hackie trick to pass some custom data
  // but it work well :)
  config.callbacks = {
    preBoot: () => {
      return { level: +options.level, roomManager, roomId }
    }
  }

  return new PhaserGame(config)
}
export default Game