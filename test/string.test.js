import { describe, expect, it } from 'vitest';
import { capitalize, reverse } from '../src/string.js';

describe('string utils', () => {
  it('capitalizes text', () => {
    expect(
      capitalize('abc')
    ).toBe('Abc');
  });

  it('reverses text', () => {
    expect(
      reverse('abc')
    ).toBe('cba');
  });
});
