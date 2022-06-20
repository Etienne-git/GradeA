export interface Grade{
  grade : string;
  fill : string;
  colorPlus : string;
  pathId : string;
  shape : string;

}

export const grades = [
  { grade : 'A',
    fill : 'rgb(139, 152, 98)',
    colorPlus : '',
    pathId: 'a-path',
    shape : 'M115.37 117.77L77.78 17.81a2.242 2.242 0 0 0-2.1-1.45H52.32c-.94 0-1.77.58-2.1 1.45l-37.59 99.96c-.26.69-.17 1.46.25 ' +
      '2.06s1.1.97 1.84.97h24.64c.96 0 1.82-.62 2.13-1.54l5.7-17.18H80.8l5.71 17.18c.3.92 1.16 1.54 2.13 1.54h24.64a2.236 2.236 0 0 ' +
      '0 2.09-3.03zm-61.14-36.9L64 51.45l9.77 29.43H54.23z'
  },
  {
    grade : 'B',
    fill : 'rgb(139, 152, 98)',
    colorPlus: '',
    pathId : 'b-path',
    shape : 'M93.22 66.17c5.68-5.41 9.19-12.68 9.19-20.7c0-16.63-15.01-30.15-33.46-30.15H31.08c-1.24 0-2.24 1-2.24 2.24v100.96c0 ' +
      '1.24 1 2.24 2.24 2.24H73.7c18.46 0 33.47-13.53 33.47-30.16c0-10.05-5.52-18.95-13.95-24.43zM67.4 56.82H53.41c-.21 0-.36-.14-.44-' +
      '.33c-.03-.06-.08-.12-.08-.19V36c0-.07.05-.13.08-.19c.08-.18.23-.33.44-.33H67.4c5.61 0 10.18 4.78 10.18 10.66c0 5.89-4.57 10.68-10.18 ' +
      '10.68zm.85 44.48H53.49c-.04 0-.07-.04-.11-.05c-.22-.06-.4-.23-.4-.47V77.14c0-.24.18-.41.4-.47c.05-.01.07-.05.11-.05h14.75c.28 0 .' +
      '56.02.83.05c5.84.47 10.46 5.79 10.46 12.29c0 6.48-4.6 11.8-10.43 12.29c-.27.02-.56.05-.85.05z'
  },
  { grade : 'C',
    fill : 'rgb(139, 152, 98)',
    colorPlus : '',
    pathId: 'c-path',
    shape : 'M111.21 107.69L99.92 85.46c-.16-.32-.46-.55-.81-.63s-.71.01-.99.23c-6.32 5.01-17.18 8.79-25.27 8.79c-15.63 0-26.55-10.58-26.55-25.' +
      '73s10.92-25.73 26.55-25.73c8.46 0 17.14 2.72 22.64 7.11c.27.22.64.3.98.24c.34-.07.64-.29.81-.6l12.52-22.81c.28-.51.15-1.15-.31-1.51c-9.47' +
      '-7.5-21.49-11.15-36.75-11.15c-32.5 0-56.08 22.91-56.08 54.46c0 31.56 23.58 54.46 56.08 54.46c14.87 0 27.72-4.52 38.18-13.45c.42-.36.54-.96.' +
      '29-1.45z'
  },
  { grade : 'D',
    fill : 'rgb(139, 152, 98)',
    colorPlus : '',
    pathId: 'd-path',
    shape : 'M65.71 15.31h-43.6c-1.25 0-2.24 1-2.24 2.24v100.96c0 1.24 1 2.24 2.24 2.24H65.7c30.15 0 50.43-21.19 50.43-52.73c0-31.53-20.27-52.71-50.' +
      '42-52.71zm-1.29 80.8c-.28 0-.54-.07-.79-.16c-.06.01-.11.03-.17.03c-.08.01-.14.04-.22.04h-14.7c-1.2 0-2.16-.97-2.16-2.16V42.19c0-1.19.96-2.16 2.' +
      '16-2.16h14.7c.08 0 .14.03.22.04c.05 0 .11.02.17.03c.25-.09.51-.16.79-.16c.43 0 .86.04 1.29.06c.75.03 1.5.09 2.24.18c13.11 1.63 21.69 12.39 21.69 ' +
      '27.84s-8.59 26.21-21.69 27.84c-.74.09-1.49.15-2.24.18c-.43.03-.86.07-1.29.07z'
  },
  { grade : 'E',
    fill : 'rgb(139, 152, 98)',
    colorPlus : '',
    pathId: 'e-path',
    shape : 'M98.89 36.51c1.23 0 2.24-1 2.24-2.24V17.55c0-1.24-1.01-2.24-2.24-2.24H29.1c-1.24 0-2.24 1-2.24 2.24v100.97c0 1.24 1 2.24 2.24 2.24h69.8c1.23' +
      ' 0 2.24-1 2.24-2.24V101.8c0-1.24-1.01-2.24-2.24-2.24H53.24V77.51h35.12c1.23 0 2.24-1 2.24-2.24V58.55c0-1.24-1.01-2.24-2.24-2.24H53.24v-19.8h45.65z'
  },
  { grade : 'F',
    fill : 'rgb(139, 152, 98)',
    colorPlus : '',
    pathId: 'f-path',
    shape : 'M101.15 15.54H34.86c-1.23 0-2.24 1-2.24 2.24v100.97c0 1.24 1.01 2.24 2.24 2.24h21.89c1.24 0 2.24-1 2.24-2.24v-44H94.1c1.24 0 2.24-1 2.24-2.' +
      '24V55.79c0-1.24-1-2.24-2.24-2.24H58.99v-16.8h42.16c1.24 0 2.24-1 2.24-2.24V17.78c0-1.24-1-2.24-2.24-2.24z'
  },
]

export const plus = {
  grade : '+',
  fill : 'rgb(139, 152, 98)',
  colorPlus : '',
  pathId: 'plus',
  shape : 'M294.061,101.395c-1.851-1.849-4.359-2.887-6.976-2.887l-88.617,0.012l0.013-88.655c0-2.617-1.038-5.126-2.888-6.977C193.742,1.038,191.233,0,' +
    '188.616,0l-80.188,0.012c-5.445,0.002-9.859,4.415-9.86,9.86l-0.016,88.662L9.926,98.548c-5.446,0-9.86,4.415-9.861,9.86L0.051,188.63c0,2.618,1.038,5.' +
    '126,2.889,6.977c1.85,1.85,4.359,2.888,6.976,2.888l88.621-0.012l-0.014,88.653c0,2.617,1.04,5.126,2.889,6.977c1.851,1.85,4.36,2.89,6.977,2.888l80.187' +
    '-0.016c5.445,0,9.859-4.415,9.86-9.86l0.014-88.658l88.629-0.016c5.445,0,9.859-4.415,9.86-9.86l0.012-80.22C296.949,105.754,295.911,103.246,294.061,101.395z'
}