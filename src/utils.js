import chroma from 'chroma-js';
import { START_YEAR, END_YEAR } from './constants';

export const colorScale = chroma
  .scale(['#2A4858', '#F8E800'])
  .mode('lch')
  .colors(END_YEAR - START_YEAR + 1);

export const maxCoord = array => {
  const values = [];
  array.forEach(coordinate => {
    values.push(coordinate[0]);
    values.push(coordinate[1]);
  });
  return Math.max(...values);
};

export const writeTitleFromFields = fields => {
  const field = fields[0];
  if (field === 'ALL') {
    return 'in all fields';
  } else if (field === 'TOTALS') {
    return 'in science and engineering';
  } else if (field) {
    return 'in ' + field.toLowerCase();
  }
  return 'in science and engineering';
};
