// declare var System: SystemJSLoader.System;

System.config(JSON.parse('<%= SYSTEM_CONFIG_DEV %>'));
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
