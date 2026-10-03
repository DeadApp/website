const Module = require('module');
const path = require('path');

// typescript-eslint still imports the TypeScript 6 compiler API. Next's build
// typecheck uses the TypeScript 7 `typescript` package, so lint resolves
// `typescript` to the side-by-side 6.x API instead.
const ts6Root = path.dirname(
  require.resolve('@typescript/typescript6/package.json'),
);

const resolveFilename = Module._resolveFilename;

Module._resolveFilename = function (request, parent, isMain, options) {
  if (request === 'typescript' || request.startsWith('typescript/')) {
    const target =
      request === 'typescript'
        ? path.join(ts6Root, 'lib', 'typescript.js')
        : path.join(ts6Root, request.slice('typescript/'.length));

    return target;
  }

  return resolveFilename.call(this, request, parent, isMain, options);
};
