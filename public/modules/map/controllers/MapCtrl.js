'use strict';

var MapController = App.controller('MapCtrl', [ '$scope', '$http', '$compile' ,'leafletData' ,
  function($scope, $http, $compile, leafletData){
    angular.extend($scope, {
      center: {
        lng: 124.671876,
        lat: 10.9578115,
        zoom: 14
      }
    });

   

    //get the geojson data from backend API
    $http.get('/assets/libs/polygon_coordinate.json').success(function(data, status){      
      angular.extend($scope, {
        geojson: {
          data: data,
          style: {
            weight: 2,
            opacity: 1,
            color: 'red',
            fillOpacity: 0
          },
          onEachFeature: function(feature, layer) {
            var html = '<div style="padding-left:1px;"><damage-button></damage-button><fine-button></fine-button><unknown-button></unknown-button><next-button></next-button></div>';
            var btns = $compile(html)($scope);
            layer.bindPopup(btns[0]);
          }
        }
      });
    }); 
  }]);