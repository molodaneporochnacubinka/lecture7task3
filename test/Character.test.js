import Character from '../src/js/Character';

test('Character points 10', () => {
  const daemon = new Character('демон', 'Daemon');
  daemon.damage(10);
  expect(daemon.health).toEqual(6);
});
