'use strict';
// Login panel animation
$(document).ready(function() {
    $('#signup,#signin').click(function(e) {
        e.preventDefault();
        $('div.form-auth').toggle('500');
    });
});

angular.module('slack-clone', [])
  .factory('GUI', function() {
    return require('nw.gui');
  })
  .factory('Window', ['GUI', function(gui) {
    return gui.Window.get();
  }])
  .controller('Toolbar', ['$scope', 'Window',
    function($scope, Window) {
      /*
      
      Custom Control for Window operations

      $scope.minimize = function() {
        Window.minimize();
      };

      $scope.toggleFullscreen = function() {
        Window.toggleKioskMode();
      };

      $scope.close = function() {
        Window.close();
      };*/
    }
  ]);
