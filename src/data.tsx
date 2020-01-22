import { Point } from 'react-simple-maps';

export enum Units {
  SUBSCRIBER = '',
  VOLUME = 'GB'
}

export enum TextAppend {
  SUBSCRIBER = '',
  VOLUME_VIDEO = 'in the last hour',
  VOLUME_SAVED = 'savings'
}

export interface IKPIs {
  subscriber: IKPIData;
  volumeVideo: IKPIData;
  volumeSaved: IKPIData;
}

export interface IKPIData {
  value: number;
  percent: number;
}

export interface ITrafficData {
  time: number;
  volume: number;
}

export interface IDeviceData {
  name: string;
  value: number;
  percent: number;
}
export interface IServiceData {
  name: string;
  value: number;
}
export interface IData {
  coordinates: Point;
  kpi: IKPIs;
  traffic: ITrafficData[];
  device: IDeviceData[];
  service: IServiceData[];
}

export const data: IData[] = [
  {
    coordinates: [-58.3816, -34.6037],
    kpi: {
      subscriber: {
        value: 214000,
        percent: 36
      },
      volumeVideo: {
        value: 768,
        percent: 36
      },
      volumeSaved: {
        value: 297,
        percent: 6
      }
    },
    traffic: [
      { time: new Date('2019/12/22 12:00 AM').getHours(), volume: 175 },
      { time: new Date('2019/12/22 01:00 AM').getHours(), volume: 125 },
      { time: new Date('2019/12/22 02:00 AM').getHours(), volume: 133 },
      { time: new Date('2019/12/22 03:00 AM').getHours(), volume: 222 },
      { time: new Date('2019/12/22 04:00 AM').getHours(), volume: 156 },
      { time: new Date('2019/12/22 05:00 AM').getHours(), volume: 221 },
      { time: new Date('2019/12/22 06:00 AM').getHours(), volume: 19 },
      { time: new Date('2019/12/22 07:00 AM').getHours(), volume: 180 },
      { time: new Date('2019/12/22 08:00 AM').getHours(), volume: 112 },
      { time: new Date('2019/12/22 09:00 AM').getHours(), volume: 87 },
      { time: new Date('2019/12/22 10:00 AM').getHours(), volume: 96 },
      { time: new Date('2019/12/22 11:00 AM').getHours(), volume: 170 },
      { time: new Date('2019/12/22 12:00 PM').getHours(), volume: 172 },
      { time: new Date('2019/12/22 1:00 PM').getHours(), volume: 179 },
      { time: new Date('2019/12/22 2:00 PM').getHours(), volume: 198 },
      { time: new Date('2019/12/22 3:00 PM').getHours(), volume: 123 },
      { time: new Date('2019/12/22 4:00 PM').getHours(), volume: 141 },
      { time: new Date('2019/12/22 5:00 PM').getHours(), volume: 156 },
      { time: new Date('2019/12/22 6:00 PM').getHours(), volume: 167 },
      { time: new Date('2019/12/22 7:00 PM').getHours(), volume: 112 },
      { time: new Date('2019/12/22 8:00 PM').getHours(), volume: 122 },
      { time: new Date('2019/12/22 9:00 PM').getHours(), volume: 102 },
      { time: new Date('2019/12/22 10:00 PM').getHours(), volume: 69 },
      { time: new Date('2019/12/22 11:00 PM').getHours(), volume: 78 }
    ],
    device: [
      {
        name: 'iPhone 11',
        value: 1.22,
        percent: 11
      },
      {
        name: 'Galaxy 9',
        value: 0.55,
        percent: 3
      },
      {
        name: 'LG C9 OLED TV',
        value: 0.88,
        percent: 7
      },
      {
        name: 'Samsung Q90',
        value: 1.08,
        percent: 9
      },
      {
        name: 'QLED TV',
        value: 0.66,
        percent: 6
      },
      {
        name: 'iPhone X',
        value: 3.22,
        percent: 44
      },
      {
        name: 'Windows',
        value: 1.99,
        percent: 18
      },
      {
        name: 'Galaxy 10',
        value: 2.44,
        percent: 22
      },
      {
        name: 'iPad Pro',
        value: 3.66,
        percent: 33
      },
      {
        name: 'Note 10',
        value: 1.75,
        percent: 15
      }
    ],
    service: [
      { name: 'Youtube', value: 997 },
      { name: 'Netflix', value: 759 },
      { name: 'HTTP media stream', value: 729 },
      { name: 'Amazon Prime', value: 689 },
      { name: 'Hulu', value: 563 },
      { name: 'iTunes purchase', value: 541 },
      { name: 'SSL v3', value: 540 },
      { name: 'HBO Now', value: 521 },
      { name: 'Xbox', value: 472 }
    ]
  },
  {
    coordinates: [-68.1193, -16.4897],
    kpi: {
      subscriber: {
        value: 413000,
        percent: 55
      },
      volumeVideo: {
        value: 432,
        percent: -12
      },
      volumeSaved: {
        value: 180,
        percent: 3
      }
    },
    traffic: [
      { time: new Date('2019/12/22 12:00 AM').getHours(), volume: 15 },
      { time: new Date('2019/12/22 01:00 AM').getHours(), volume: 152 },
      { time: new Date('2019/12/22 02:00 AM').getHours(), volume: 112 },
      { time: new Date('2019/12/22 03:00 AM').getHours(), volume: 201 },
      { time: new Date('2019/12/22 04:00 AM').getHours(), volume: 141 },
      { time: new Date('2019/12/22 05:00 AM').getHours(), volume: 200 },
      { time: new Date('2019/12/22 06:00 AM').getHours(), volume: 109 },
      { time: new Date('2019/12/22 07:00 AM').getHours(), volume: 18 },
      { time: new Date('2019/12/22 08:00 AM').getHours(), volume: 11 },
      { time: new Date('2019/12/22 09:00 AM').getHours(), volume: 80 },
      { time: new Date('2019/12/22 10:00 AM').getHours(), volume: 82 },
      { time: new Date('2019/12/22 11:00 AM').getHours(), volume: 171 },
      { time: new Date('2019/12/22 12:00 PM').getHours(), volume: 87 },
      { time: new Date('2019/12/22 1:00 PM').getHours(), volume: 213 },
      { time: new Date('2019/12/22 2:00 PM').getHours(), volume: 123 },
      { time: new Date('2019/12/22 3:00 PM').getHours(), volume: 143 },
      { time: new Date('2019/12/22 4:00 PM').getHours(), volume: 132 },
      { time: new Date('2019/12/22 5:00 PM').getHours(), volume: 121 },
      { time: new Date('2019/12/22 6:00 PM').getHours(), volume: 111 },
      { time: new Date('2019/12/22 7:00 PM').getHours(), volume: 99 },
      { time: new Date('2019/12/22 8:00 PM').getHours(), volume: 62 },
      { time: new Date('2019/12/22 9:00 PM').getHours(), volume: 139 },
      { time: new Date('2019/12/22 10:00 PM').getHours(), volume: 42 },
      { time: new Date('2019/12/22 11:00 PM').getHours(), volume: 99 }
    ],
    device: [
      {
        name: 'iPhone 11',
        value: 1.36,
        percent: 12
      },
      {
        name: 'Galaxy 9',
        value: 1.55,
        percent: 14
      },
      {
        name: 'LG C9 OLED TV',
        value: 0.99,
        percent: 9
      },
      {
        name: 'Samsung Q90',
        value: 1.98,
        percent: 6
      },
      {
        name: 'QLED TV',
        value: 1.1,
        percent: 10
      },
      {
        name: 'iPhone X',
        value: 4.1,
        percent: 31
      },
      {
        name: 'Windows',
        value: 1.04,
        percent: 12
      },
      {
        name: 'Galaxy 10',
        value: 2.0,
        percent: 20
      },
      {
        name: 'iPad Pro',
        value: 3.06,
        percent: 28
      },
      {
        name: 'Note 10',
        value: 1.16,
        percent: 12
      }
    ],
    service: [
      { name: 'Youtube', value: 940 },
      { name: 'Xbox', value: 876 },
      { name: 'HTTP media stream', value: 721 },
      { name: 'Amazon Prime', value: 682 },
      { name: 'Netflix', value: 653 },
      { name: 'Hulu', value: 562 },
      { name: 'iTunes purchase', value: 512 },
      { name: 'HBO Now', value: 223 },
      { name: 'SSL v3', value: 113 }
    ]
  }
];
