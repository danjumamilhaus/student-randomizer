angular.module('randomizer', []);

angular.module('randomizer')
  .controller('rando-ctrl', ['$scope', 'randoFactory',function($scope, randoFactory) {
    $scope.student = randoFactory.counter;
    console.log(randoFactory.counter);

    $scope.getRandom = function() {
      randoFactory.counter++
      $scope.student = randoFactory.counter;
    };
  }])
  .factory('randoFactory', function($http) {
    var counter = 0;

    return {
      counter: counter
    };
  });



