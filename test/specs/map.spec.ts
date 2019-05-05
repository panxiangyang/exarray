import 'mocha';
import { expect } from 'chai';
import map from '@/map';

describe('map', () => {
  const list = [1, 2, 3];

  it('returns a list', () => {
    expect(map(list, item => item * 2).join('')).to.equal('246');
  });

  it('returns empty list when the input is empty', () => {
    expect(map([], item => item).length).to.equal(0);
  });
});
