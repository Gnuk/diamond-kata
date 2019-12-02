export const distance = (firstLetter: string, secondLetter: string) =>
  Math.abs(firstLetter.charCodeAt(0) - secondLetter.charCodeAt(0));

export const spaces = (num: number, accumulator = ''): string => {
  if (num === 0) {
    return accumulator;
  }
  return spaces(num - 1, accumulator + ' ');
};

export const diamondLine = (letter: string) => {
  if (letter === 'A') {
    return 'A';
  }
  const spaceBetween = spaces(distance('A', letter)  * 2 - 1);
  return `${letter}${spaceBetween}${letter}`;
};
export const previousLetter = (letter: string): string => String.fromCharCode(letter.charCodeAt(0) - 1);

export const listLetters = (letter: string, letters: string[] = []): string[] => {
  if (letter === 'A') {
    return [...letters, 'A'].reverse();
  }
  return listLetters(previousLetter(letter), [...letters, letter]);
};

export const diamondLineWithSpaces = (dist: number) => (letter: string): string => {
  const currentDist = spaces(dist - distance('A', letter));
  return `${currentDist}${diamondLine(letter)}${currentDist}`;
};

export const diamond = (letter: string) => {
  if (letter === 'A') {
    return 'A';
  }
  const dist = distance('A', letter);
  const diamondWithSpaces = diamondLineWithSpaces(dist);
  const allLetters = [...listLetters(letter), ...listLetters(previousLetter(letter)).reverse()];
  return allLetters.map(diamondWithSpaces).join('\n');
};
