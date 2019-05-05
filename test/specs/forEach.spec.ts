import 'mocha';
import { expect } from 'chai';
import forEach from '@/forEach';

describe('forEach', () => {
  const lists = [12, 15, 20];

  it('gets a list', () => {
    let list: number[] = [];
    forEach(lists, item => {
      list.push(item + 2);
    });
    expect(list.join('')).to.equal('141722');
  });

  it('handles empty list', () => {
    let list: number[] = [];
    forEach([], item => {
      list.push(item);
    });
    expect(list.join('')).to.equal('');
  });

  it('gets a list of length 2', () => {
    let list: number[] = [];
    forEach(lists, (item, index) => {
      if (index < 2) {
        list.push(item);
      }
    });
    expect(list.join('')).to.equal('1215');
  });

  it('Stop loop when the callback returns true', () => {
    let list: number[] = [];
    forEach(lists, (item, index) => {
      if (index !== 1) {
        list.push(item);
      } else {
        return true;
      }
    });
    expect(list.join('')).to.equal('12');
  });
});
