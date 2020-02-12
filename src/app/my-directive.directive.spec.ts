import { MyDirectiveDirective } from './my-directive.directive';

describe('MyDirectiveDirective', () => {
  it('should create an instance', () => {
    // @ts-ignore
    const directive = new MyDirectiveDirective();
    expect(directive).toBeTruthy();
  });
});
