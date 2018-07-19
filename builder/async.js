import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import glob from 'glob';
import webpack from 'webpack';
import log from './modules/print';
import webpackConfig from './config/build.webpack.config.js';

function write(filePath, code) {
	mkdirp.sync(path.dirname(filePath));

	return new Promise((resolve, reject) => {
		fs.writeFile(filePath, code, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

function hasModule(filename) {
	try {
		return Boolean(require.resolve(filename));
	} catch (e) {
		return false;
	}
}

function generateSLTUIAsync(promises) {
	return new Promise((resolve, reject) => {
		glob(
			'../src/[A-Z]*/index.js',
			{
				cwd: __dirname
			},
			async function(err, files) {
				if (err) {
					log.error(err);
					reject(err);
				}

				let code = `
        if(process.env.NODE_ENV === 'development'){
          console.warn('Using development version of slt-ui');
        }

        export * from '../material/index.js';
      `;
				for (let i = 0; i < files.length; i++) {
					let file = files[i];
					let folderName = path.posix.basename(
						path.posix.dirname(file)
					);
					log.info(file);
					var module = require(file);
					let indexCode = `
          import {asyncComponent} from 'react-async-component';
        `;
					for (let component in module) {
						if (
							module.hasOwnProperty(component) === false ||
							component == '__esModule'
						) {
							continue;
						}
						let exportName = `{${component} as default}`;
						if (component == 'default') {
							component = folderName;
							exportName = `{default}`;
						}
						log.general('ASYNC SLT-UI:', file, ' - ', component);

						indexCode += `
            export const ${component} = asyncComponent({
              resolve: ()=>import('${path.posix.relative(
					`./builder/temp/slt/${folderName}`,
					path.posix.resolve(file)
				)}' /*webpackChunkName: '${component}'*/).then((module)=>module['${component}'])
            });
          `;
					}
					promises.push(
						write(
							path.resolve(
								`./builder/temp/slt/${folderName}/index.js`
							),
							indexCode
						)
					);

					code += `
          export * from './${folderName}'
        `;
				}

				promises.push(
					write(path.resolve('./builder/temp/slt/index.js'), code)
				);
				resolve();
			}
		);
	});
}

function generateMaterialAsync(promises) {
	return new Promise((resolve, reject) => {
		glob(
			'../node_modules/\\@material-ui/core/[A-Z]*/index.js',
			{
				cwd: __dirname
			},
			async function(err, files) {
				if (err) {
					log.error(err);
					reject(err);
				}

				let code = ``;
				for (let i = 0; i < files.length; i++) {
					let file = files[i];
					let folderName = path.posix.basename(
						path.posix.dirname(file)
					);
					log.info(file);
					var module = require(file);
					let indexCode = `
          import {asyncComponent} from 'react-async-component';
        `;
					for (let component in module) {
						if (
							module.hasOwnProperty(component) === false ||
							component == '__esModule'
						) {
							continue;
						}
						let exportName = `{${component} as default}`;
						if (component == 'default') {
							component = folderName;
							exportName = `{default}`;
						}
						log.general('ASYNC MATERIAL:', file, ' - ', component);
						indexCode += `
            export const ${component} = asyncComponent({
              resolve: ()=>import('${path.posix.relative(
					`./builder/temp/material/${folderName}`,
					path.posix.resolve(file)
				)}' /*webpackChunkName: '${component}'*/).then((module)=>module['${component}'])
            });
          `;
					}

					promises.push(
						write(
							path.resolve(
								`./builder/temp/material/${folderName}/index.js`
							),
							indexCode
						)
					);

					code += `
          export * from './${folderName}'
        `;
				}

				promises.push(
					write(
						path.resolve('./builder/temp/material/index.js'),
						code
					)
				);
				resolve();
			}
		);
	});
}

export async function generateAsync() {
	let promises = [];
	await generateMaterialAsync(promises);
	await generateSLTUIAsync(promises);

	await Promise.all(promises);
}
generateAsync.displayName = 'generate-async';
generateAsync.description =
	'wrap material and slt-ui components in asyncComponent';

export async function buildManifest() {
	log.info('BUILD MANIFEST STARTED');
	var finalConfig = webpackConfig('Async', {
		entry: {
			index: './manifest/index.js'
		},
		output: {
			path: path.resolve('./build/async'),
			publicPath: '/scripts/manifest/'
		}
		/*  resolve:{
      alias:{
        "@material-ui/core$":path.resolve("./builder/temp/material"),
      }
    }*/
	});

	return new Promise((resolve, reject) => {
		webpack(finalConfig, (err, stats) => {
			console.log(
				stats.toString({
					// Shows colors in the console
					colors: true
				})
			);
			log.info('BUILD MANIFEST ENDED');
			if (err || stats.hasErrors()) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

buildManifest.displayName = 'manifest';
buildManifest.description = 'manifest';
