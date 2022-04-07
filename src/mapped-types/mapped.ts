/* eslint-disable @typescript-eslint/no-unused-vars */

type MappedTypeName = { [K in UnionType]: ExistingType };

type Union = 'apple' | 'laim';

type Mapped = { [K in keyof Union]: string };
