
import { inject, Service, World, GameInstance, ViewController } from '@hology/core/gameplay';
import * as THREE from 'three';

@Service()
class Game extends GameInstance {
  private world = inject(World)
  private view = inject(ViewController)

  private sound = new THREE.Audio(this.view.audioListener);

  onStart() {    
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('data/asset-resources/impactWood_heavy_001.ogg', (buffer) => {
      this.sound.setBuffer(buffer);
      this.sound.setLoop(false);
      this.sound.setVolume(0.5);
    });
  }

  playSound() {
    this.sound.play();
  }
}

export default Game
