import { argv } from 'process';
import { day as dayOne } from '2023/1.js';

const main = (): void => {
  const rawDayArg = argv[2];

  if (!rawDayArg) {
    console.log('Please provide a day argument');
    return;
  }

  const dayArgument = parseInt(rawDayArg, 10);

  if (isNaN(dayArgument)) {
    console.log('The first argument needs to be a number');
    return;
  }

  if (dayArgument < 1 || dayArgument > 25) {
    console.log('The first argument needs to be between 1 and 25');
    return;
  }

  console.log(`Running day ${rawDayArg}`);

  switch (dayArgument) {
    case 1:
      runDay(dayOne);
      break;
    default:
      console.log('Day not implemented yet');
      break;
  }
};

const runDay = (day: AocDay): void => {
  day.part1();
  day.part2();
};

export type AocDay = {
  part1: () => void;
  part2: () => void;
};

main();
