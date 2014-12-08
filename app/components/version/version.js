'use strict';

angular.module('mytodoApp.version', [
  'mytodoApp.version.interpolate-filter',
  'mytodoApp.version.version-directive'
])

.value('version', '0.1');
