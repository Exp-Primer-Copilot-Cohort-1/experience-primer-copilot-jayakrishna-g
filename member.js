function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'app/members/member.html',
    controller: function($scope) {
      $scope.skills = [];
      $scope.member.skills.forEach(function(skill) {
        $scope.skills.push(skill.name);
      });
    }
  };
}
