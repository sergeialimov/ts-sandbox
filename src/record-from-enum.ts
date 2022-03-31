enum AudienceTypeEnum {
  NPI = 'npi',
  COUNTRY = 'country',
  INSTITUTION = 'institution',
  LAL = 'lal',
}

type NewType = Record<Exclude<AudienceTypeEnum, 'lal'>, 'basePairingServiceType'>;
type NewType2 = Record<AudienceTypeEnum, 'basePairingServiceType'>;
