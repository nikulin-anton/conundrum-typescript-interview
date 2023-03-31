import { ChartDataModel } from './chart-data.model';

export const base: ChartDataModel = {
  names: ['car 1', 'car 2', 'car 3', 'car 4'],
  values: [
    [1, 2, 3, 4],
    [2, 4, 1, 4],
    [2, 3, 1, 0],
    [1, null, null, null, null],
  ],
};

export const incr: ChartDataModel = {
  names: ['car 1', 'car 2', 'car 7', 'car 8'],
  values: [[4], [4], [0], [1]],
};

export const expectedResult: ChartDataModel = {
  names: ['car 1', 'car 2', 'car 3', 'car 7', 'car 8'],
  values: [
    [2, 3, 4, 4],
    [4, 1, 4, 4],
    [3, 1, 0, null],
    [null, null, null, 0],
    [null, null, null, 1],
  ],
};

export function increment(base: ChartDataModel, incr: ChartDataModel): ChartDataModel {
  return { names: [], values: [] };
}
