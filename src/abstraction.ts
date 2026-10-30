// oop = abstraction

// idea
// implementation pore korbo

/*

1. interface
2. abstract class

*/
/*
// interface
interface MediaPlayer {
    // we only get idea of what Media Player will have
    play(): void;
    pause(): void;
    stop(): void;
}

//implementation
class MusicPlayer implements MediaPlayer {
    play(){
        console.log('Playing Music')
    }
    pause() {
        console.log("Music is paused")
    }
    stop() {
        console.log("Music Stopped")
    }
}

const myMusicPlayer = new MusicPlayer()
myMusicPlayer.play();
*/

// abstraction class
// idea
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
    play(){
        console.log('Playing Music')
    }
    pause(){
        console.log('Paused Music')
    }
    stop(){
        console.log('Stopped Music')
    }
}

const jubairPlayer = new MusicPlayer()
jubairPlayer.play()