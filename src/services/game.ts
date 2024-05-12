
import { inject, Service, World, GameInstance, ViewController, AssetLoader } from '@hology/core/gameplay';
import * as THREE from 'three';

@Service()
class Game extends GameInstance {
  private world = inject(World)
  private view = inject(ViewController)
  private assetLoader = inject(AssetLoader)

  private sound = new THREE.Audio(this.view.audioListener);

  async onStart() {    
    const buffer = await this.assetLoader.getAudioAtPath('data/asset-resources/impactWood_heavy_001.ogg')
    this.sound.setBuffer(buffer).setVolume(0.5)
  }

  playSound() {
    if (this.sound.isPlaying) {
      this.sound.stop()
    }
    this.sound.play();
  }
}

export default Game
