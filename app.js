angular.module('myApp', ['nvd3'])
    .controller('myCtrl', function($scope){

        /* Chart options */
        $scope.options = $scope.options = {
    // chart options
          chart: {
              type: 'lineChart',
              ...
          },

          // title options
          title: {
              enable: true,
              text: 'Title for Line Chart'
          },

          // subtitle options
          subtitle: {
              enable: true,
              text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet...',
              css: {
                  'text-align': 'center',
                  'margin': '10px 13px 0px 7px'
              }
          },

          // caption options
          caption: {
              enable: true,
              html: 'Figure 1. Lorem ipsum dolor sit amet...',
              css: {
                  'text-align': 'justify',
                  'margin': '10px 13px 0px 7px'
              }
          }
      }


        /* Chart data */
        $scope.data = { /* JSON data */ }

    })
