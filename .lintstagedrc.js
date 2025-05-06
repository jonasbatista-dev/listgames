// .lintstagedrc.js
module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.map((f) => `"${f}"`).join(' ')}`,
    `npm run lint --fix . ${filenames.map((f) => `--file "${f}"`).join(' ')}`,
    `npm run test -- --findRelatedTests ${filenames.map((f) => `"${f}"`).join(' ')}`,
  ],
};
