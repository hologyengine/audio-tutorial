import 'reflect-metadata'
import './App.css';
import { HologyScene, useService } from '@hology/react'
import shaders from './shaders'
import actors from './actors'
import Game from './services/game'

function PlayButton() {
  const game = useService(Game)
  
  return <>
    <button onClick={() => game.playSound()}>Play</button>
  </>
}


function App() {
  return (
    <HologyScene gameClass={Game} sceneName='demo' dataDir='data' shaders={shaders} actors={actors}>
      <PlayButton/>
    </HologyScene>
  );
}

export default App;