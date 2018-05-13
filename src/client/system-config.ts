// declare var System: SystemJSLoader.System;

System.config(JSON.parse('<%= SYSTEM_CONFIG_DEV %>'));
(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      // Other components are here...

      'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.min.js',
      '@ng-dynamic-forms/core': 'npm:@ng-dynamic-forms/core/bundles/core.umd.js',
      '@ng-dynamic-forms/ui-bootstrap': 'npm:@ng-dynamic-forms/ui-bootstrap/bundles/ui-bootstrap.umd.js'

    },
    packages: {

    }
  });
})(this);
