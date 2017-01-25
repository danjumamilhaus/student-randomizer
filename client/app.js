angular.module('randomizer', []);

angular.module('randomizer')
  .controller('rando-ctrl', ['$scope', 'randoFactory',function($scope, randoFactory) {
    $scope.student = '';

    $scope.getRandom = function() {
      randoFactory.getStudent()
        .then(function(student) {
          $scope.student = student;
        })
        .catch(function(err) {
          console.error(err);
        });
    };
  }])
  .factory('randoFactory', ['$http', function($http) {
    var getStudent = function() {
      return $http({
        method: 'GET',
        url: '/students',
      })
      .then(function(res) {
        console.log('Student: ', res.data);
        return res.data;
      });
    };

    return {
      getStudent: getStudent
    };
  }]);
