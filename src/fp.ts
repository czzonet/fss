export const compose = (...fns: Fn[]) => (init: any) =>
  fns.reduce((p, v) => v(p), init);

type Fn = (input: any) => any;
