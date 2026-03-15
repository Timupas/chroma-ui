export class Chroma {
  private r: number;
  private g: number;
  private b: number;
  private a: number = 1;

  constructor(hex: string) {
    // Убираем решетку и обрабатываем сокращенный HEX (типа #fff)
    let core = hex.replace('#', '');
    if (core.length === 3) {
      core = core.split('').map(s => s + s).join('');
    }
    this.r = parseInt(core.substring(0, 2), 16) || 0;
    this.g = parseInt(core.substring(2, 4), 16) || 0;
    this.b = parseInt(core.substring(4, 6), 16) || 0;
  }

  // Метод затемнения
  darken(amount: number): this {
    const factor = 1 - amount / 100;
    this.r = Math.round(Math.max(0, this.r * factor));
    this.g = Math.round(Math.max(0, this.g * factor));
    this.b = Math.round(Math.max(0, this.b * factor));
    return this;
  }

  // Метод выбора цвета текста (черный или белый)
  getContrastText(): string {
    const yiq = (this.r * 299 + this.g * 587 + this.b * 114) / 1000;
    return yiq >= 128 ? '#000000' : '#ffffff';
  }

  toCss(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

// Удобная функция-обертка
export const chroma = (hex: string) => new Chroma(hex);