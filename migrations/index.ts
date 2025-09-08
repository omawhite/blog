import * as migration_20250825_002945 from './20250825_002945';
import * as migration_20250908_221558 from './20250908_221558';

export const migrations = [
  {
    up: migration_20250825_002945.up,
    down: migration_20250825_002945.down,
    name: '20250825_002945',
  },
  {
    up: migration_20250908_221558.up,
    down: migration_20250908_221558.down,
    name: '20250908_221558'
  },
];
