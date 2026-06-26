export class Playback {
  frame = 0;
  playing = false;
  fps = 15;
  private numFrames: number;
  private accumulator = 0;
  private onFrameChange: (frame: number) => void;

  constructor(numFrames: number, onFrameChange: (frame: number) => void) {
    this.numFrames = numFrames;
    this.onFrameChange = onFrameChange;
  }

  setFrame(frame: number) {
    this.frame = Math.min(Math.max(frame, 0), this.numFrames - 1);
    this.onFrameChange(this.frame);
  }

  step(delta: number) {
    if (!this.playing) return;
    this.accumulator += delta;
    const frameTime = 1 / this.fps;
    while (this.accumulator >= frameTime) {
      this.accumulator -= frameTime;
      this.setFrame((this.frame + 1) % this.numFrames);
    }
  }
}
