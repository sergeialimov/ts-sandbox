enum someEnum {
  KEY1 = 'value1',
  KEY2 = 'value2',
  KEY3 = 'value3',
  KEY4 = 'value4',
}

type NewType = Record<Exclude<someEnum, 'value1'>, 'basePairingServiceType'>;
type NewType2 = Record<someEnum, 'basePairingServiceType'>;
