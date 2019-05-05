import 'mocha';
import { expect } from 'chai';
import shuffle from '@/shuffle';

describe('shuffle', () => {
  const list = [1, 2, 3, 4, 5];

  it('returns a empty array when the input is empty', () => {
    expect(shuffle().join('')).to.equal('');
    expect(shuffle([]).join('')).to.equal('');
  });

  it('returns a unequal list in every loop', () => {
    for (let i = 0; i < 3; i++) {
      expect(shuffle(list).join('')).not.to.equal(list.join(''));
    }
  });
});
