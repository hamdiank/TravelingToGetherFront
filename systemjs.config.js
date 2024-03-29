/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    
    },
    // map tells the System loader where to look for things
    map: {
      
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'underscore':                 'npm:underscore/underscore.js',
      'moment':                 'npm:moment/moment.js',
      'lodash':                 'npm:lodash/lodash.js',
      'angular2-jwt': 'npm:angular2-jwt/angular2-jwt.js',
      'ng2-pagination': 'npm:ng2-pagination',
       'primeng':                   'npm:primeng',
       '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js', 
      
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js',
        main: 'Rx.js'
      },
      "angular2-jwt": {
                defaultExtension: "js"
            },
      'ng2-pagination': { 
        //add configuration to load
            main: './index.js',
            defaultExtension: 'js'
        },  
              primeng: {
          defaultExtension: 'js'
      },    
    }
  });
})(this);

(function (global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            // Other components are here...

            'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.min.js'
        },
        packages: {
        }
    });
})(this);
