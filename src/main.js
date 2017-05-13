import 'pixi'
import 'p2'
import Phaser from 'phaser'

import LoadState from './states/load';
import PlayState from './states/play';

class Game extends Phaser.Game {
  constructor () {
    super(640, 480, Phaser.AUTO, 'game', null)

    this.state.add('load', LoadState, false)
    this.state.add('play', PlayState, false)
    this.state.start('load');
  }
}

const game = new Game();
