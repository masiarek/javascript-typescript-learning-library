// The mistakes use-isnan and no-constant-binary-expression flag, with types.
const reading: number = Number("n/a");
const failed = reading === NaN;

const items: string[] = [];
const empty = items === [];
