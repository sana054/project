import { join } from 'path';

import { SeedConfig } from './seed.config';
import {ExtendPackages} from "./seed.config.interfaces";
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = ['node_modules/font-awesome/fonts/**'];
  PRIME_NG_THEME = 'bootstrap';
  CSS_IMAGE_DEST = `${this.CSS_DEST}/images`;
  CSS_IMAGE_SRC = [
    'node_modules/primeng/resources/themes/' + this.PRIME_NG_THEME + '/images/**'
  ];
  THEME_FONTS_DEST = `${this.APP_DEST}/css/fonts`;
  THEME_FONTS_SRC = [
    'node_modules/primeng/resources/themes/' + this.PRIME_NG_THEME + '/fonts/**',
  ];


  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.




    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
      { src: 'primeng/resources/primeng.css', inject: true },
      { src: 'primeng/resources/themes/bootstrap/theme.css', inject: true },
      { src: 'C:\\Users\\cheff\\Desktop\\project\\node_modules\\font-awesome\\css\\font-awesome.min.css', inject: true },
      {src:  'C:\\Users\\cheff\\Desktop\\project\\node_modules\\primeng\\resources\\primeng.min.css', inject: true},
      {src: 'C:\\Users\\cheff\\Desktop\\project\\node_modules\\jquery\\dist\\jquery.js',inject: 'libs'},
      {src: 'C:\\Users\\cheff\\Desktop\\project\\node_modules\\datatables.net\\js\\jquery.dataTables.js',inject: 'libs'},
      {src:'C:\\Users\\cheff\\Desktop\\project\\node_modules\\bootstrap\\dist\\css\\bootstrap.css', inject: true},
      {src:'C:\\Users\\cheff\\Desktop\\project\\node_modules\\primeng\\resources\\themes\\omega\\theme.css', inject: true},




    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [

      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},

    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];


    const additionalPackages: ExtendPackages[] = [{
      name: 'jquery',
      path: 'node_modules/jquery',
      packageMeta: {
        defaultExtension: 'js'
      }
    },{
      name: 'DataTablesModule',
      path: 'angular-datatables',
      packageMeta: {
      defaultExtension: 'js'
    }
  },
      {
        name: 'InputTextModule',
        path: 'inputtext',
        packageMeta: {
          defaultExtension: 'js'
        }

      },
      {
        name: 'MultiSelectModule',
        path: 'multiselect',
        packageMeta: {
          defaultExtension: 'js'
        }

      }
    ];


    this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
