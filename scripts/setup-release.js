const glob = require('glob');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

async function copyFile(file) {
  const buildPath = path.resolve(__dirname, '../build/', file.replace('./material-ui/build/', ''));
  await fse.copy(file, buildPath);
  console.log(`Copied ${file} to ${buildPath}`);
}

async function changePackage(){
  const pkg = require(path.resolve(__dirname,"../package.json"));
  const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } = require(path.resolve(__dirname,"../material-ui/package.json"));

  var releasePkg = {
    ...packageDataOther,
    name:pkg.name,
    version:pkg.version,
    description:pkg.description,
    author:pkg.author,
    repository:pkg.repository,
    license:pkg.license,
    homepage:pkg.homepage,
    main: './index.js',
    private: false,
  };
  await fse.writeFile(path.resolve(__dirname,"../build/package.json"), JSON.stringify(releasePkg,null,'\t'), 'utf8');
}

(function() {
  console.log('Copying Material build files');
  glob('./material-ui/build/**/@(*.js|*.json|LICENSE)', function(err, files) {
    if (err) {
      reject(err);
    }
    Promise.all(files.map(function(file){
      return copyFile(file)
    }))
    .then(changePackage)
    .then(function(){
      console.log("Finished Copying Files");
    });
  });
})();
