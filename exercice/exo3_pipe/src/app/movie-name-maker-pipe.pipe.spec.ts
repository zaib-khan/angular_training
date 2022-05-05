import { MovieNameMakerPipePipe } from './movie-name-maker-pipe.pipe';

describe('MovieNameMakerPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MovieNameMakerPipePipe();
    expect(pipe).toBeTruthy();
  });
});
