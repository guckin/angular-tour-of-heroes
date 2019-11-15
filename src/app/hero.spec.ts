import {Hero} from './hero';

describe('Hero', () => {
  it('has an ID and a name', () => {
    const hero = new Hero();

    hero.name = 'foo';
    hero.id = 1;

    expect(hero.name).toEqual('foo');
    expect(hero.id).toEqual(1);
  });
});
