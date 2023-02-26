const path = require('path');
const fs = require('fs');

function loadPagesInfo(appDir) {
  const infoPath = path.join(appDir, '_pages_.json');

  if (fs.existsSync(infoPath)) {
    return JSON.parse(fs.readFileSync(infoPath));
  }

  return [];
}

function savePagesInfo(appDir, pagesInfo) {
  const infoPath = path.join(appDir, '_pages_.json');

  fs.writeFileSync(infoPath, JSON.stringify(pagesInfo, null, 2));
}

module.exports = {
  loadPagesInfo,
  savePagesInfo,
};
