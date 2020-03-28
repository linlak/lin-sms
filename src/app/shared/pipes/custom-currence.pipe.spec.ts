import { CustomCurrencePipe } from './custom-currence.pipe';

describe('CustomCurrencePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomCurrencePipe();
    expect(pipe).toBeTruthy();
  });
});
