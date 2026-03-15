import { describe, it, expect } from 'vitest';
import { chroma } from './index';

describe('Chroma Library', () => {
  it('should convert HEX to RGB correctly', () => {
    const color = chroma('#ffffff');
    expect(color.toCss()).toBe('rgb(255, 255, 255)');
  });

  it('should darken the color', () => {
    const color = chroma('#ffffff').darken(50);
    // 50% от 255 это примерно 128
    expect(color.toCss()).toBe('rgb(128, 128, 128)');
  });

  it('should return correct contrast text color', () => {
    const whiteBg = chroma('#ffffff');
    const blackBg = chroma('#000000');
    
    expect(whiteBg.getContrastText()).toBe('#000000'); // На белом — черный
    expect(blackBg.getContrastText()).toBe('#ffffff'); // На черном — белый
  });
});