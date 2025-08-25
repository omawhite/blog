import * as migration_20250825_002945 from './20250825_002945';

export const migrations = [
  {
    up: migration_20250825_002945.up,
    down: migration_20250825_002945.down,
    name: '20250825_002945'
  },
];
