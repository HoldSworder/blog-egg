// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/service/Home';
import ExportOverview from '../../../app/service/Overview';

declare module 'egg' {
  interface IService {
    home: ExportHome;
    overview: ExportOverview;
  }
}
