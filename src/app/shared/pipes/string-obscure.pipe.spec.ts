import { StringObscurePipe } from './string-obscure.pipe';

describe('StringObscurePipe', () => {
  it('create an instance', () => {
    const pipe = new StringObscurePipe();
    expect(pipe).toBeTruthy();
  });
});
