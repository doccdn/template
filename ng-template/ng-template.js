if(typeof Object.assign != 'function'){
	Object.assign = function(target) {
		'use strict';
		/*if(target != null){
			throw new TypeError('Cannot convert undefined or null to object');
		}*/
		target = Object(target);
		for(var index = 1; index < arguments.length; index++){
			var source = arguments[index];
			if(source != null){
				for(var key in source){
		          if(Object.prototype.hasOwnProperty.call(source, key)){
		          	target[key] = source[key];
		          }
		       	}
			}
	   	}
		return target;
	};
}

var ngTempForm = function(dbService){
	return {
		restrict: 'E',
		scope:{
			elemCss: "="
			, formConfig: "="
			, formObj: "="
			, formElem: "="
		},
		templateUrl: 'ng-template/ng-form.html', 
		link: function($scope, $elem, $attrs, ngModel){
			$scope.db = dbService;
			$scope.getErrorType = function(ctrl){
				var value = ctrl.$modelValue || ctrl.$viewValue;
				if(value && value != ""){
					ctrl.$dirty = true;
					ctrl.$touched = true;
				}
				if(ctrl && ctrl.$dirty && ctrl.$touched && ctrl.$invalid){
					return Object.keys(ctrl.$error)[0];
				}
				return null;
			}
			
			$scope.getErrorMsg = function(ctrl, errorMsg){
				if(ctrl.$invalid){
					var basic = {required:  "Data must be fill in", minlength: "Data too short", maxlength: "Data too long", pattern: "Please enter correct format"}
					var type = Object.keys(ctrl.$error)[0];
					return type? (errorMsg && errorMsg[type]? errorMsg[type]: basic[type]): "";
				}
				return "";
			}
		}
	}
}

var ngTempTable = function(dbService){
	return {
		restrict: 'E',
		scope:{
			elemCss: "="
			, tableConfig: "="
			, tableData: "="
		},
		templateUrl: 'ng-template/ng-table.html', 
		link: function($scope, $elem, $attrs, ngModel) {
			$scope.db = dbService;
			$scope.choiceAll = function(tableData){
				$scope.checkboxAll = $scope.checkboxAll? false: true;
				if(tableData){
					$scope.checkbox = $scope.checkbox || [];
					for(x in tableData){
						$scope.checkbox[x] = $scope.checkboxAll;
					}
				}
			}
		}
	}
}

var ngTempInfo = function(dbService){
	return {
		restrict: 'E',
		scope:{
			elemCss: "="
			, infoConfig: "="
			, infoObj: "="
		},
		templateUrl: 'ng-template/ng-info.html', 
		link: function($scope, $elem, $attrs, ngModel) {
			$scope.db = dbService;
		}
	}
}

var jqDatePicker = function($timeout) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            $timeout( function(){
                $(element).datepicker({
                    dateFormat:'yy-mm-dd',
                    minDate: new Date(1910,0,1),
                    yearRange:'-20:+20',
                    changeMonth: true,
                    changeYear: true,
                    onSelect: function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    };
}

angular.module('ngTemplate', [])
	.directive('ngTempForm', ngTempForm)
	.directive('ngTempTable', ngTempTable)
	.directive('ngTempInfo', ngTempInfo)
	.directive('jqDatePicker', jqDatePicker)
	;