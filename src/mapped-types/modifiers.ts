/* eslint-disable @typescript-eslint/no-unused-vars */

type Type = {
  [K in readonly 'apple' | 'orange' ]? : string
};

type RequiredType = { [K in keyof Type]-?: string };

type ReadonlyType = { readonly [K in keyof Type]: string };

type WritableType = { -readonly [K in keyof ReadonlyType]: string };


