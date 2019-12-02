import { diamond, diamondLine, distance, listLetters, spaces } from './diamond';

describe('Diamond', () => {
  it('Should be A for A', () => {
    expect(diamond('A')).toBe('A');
  });
  it('Should have a distance of 1 between A and B', () => {
    expect(distance('A', 'B')).toBe(1);
    expect(distance('B', 'A')).toBe(1);
  });
  it('Should have one space for 1', () => {
    expect(spaces(1)).toBe(' ');
  });
  it('Should have three space for 3', () => {
    expect(spaces(3)).toBe('   ');
  });
  it('Should do the B case', () => {
    expect(diamond('B')).toBe(' A \n' +
      'B B\n' +
      ' A ');
  });

  it('Should line A be A', () => {
    expect(diamondLine('A')).toBe('A');
  });

  it('Should line B be B B', () => {
    expect(diamondLine('B')).toBe('B B');
  });

  it('Should line C be C   C', () => {
    expect(diamondLine('C')).toBe('C   C');
  });

  it('Should line D be D     D', () => {
    expect(diamondLine('D')).toBe('D     D');
  });

  it('Should list letters between A and A', () => {
    expect(listLetters('A')).toEqual(['A']);
  });

  it('Should list letters between A and B', () => {
    expect(listLetters('B')).toEqual(['A', 'B']);
  });

  it('Should list letters between A and C', () => {
    expect(listLetters('C')).toEqual(['A', 'B', 'C']);
  });

  it('Should do the C case', () => {
    expect(diamond('C')).toBe('  A  \n' +
      ' B B \n' +
      'C   C\n' +
      ' B B \n' +
      '  A  ');
  });

  it('Should do the D case', () => {
    expect(diamond('D')).toBe('   A   \n' +
      '  B B  \n' +
      ' C   C \n' +
      'D     D\n' +
      ' C   C \n' +
      '  B B  \n' +
      '   A   ');
  });
});
