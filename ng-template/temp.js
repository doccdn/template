
	app.service("dbService", function($http){
		var db = this;
		var p = getParams();

		//project
		db.allInfoHide = false;
		db.infoTitle = "Test";
		db.infoSubject = "Test";
		//ng-template
		db.allInfoDataHide = false;
		db.infoInitOff = false;
		db.infoConfig = {
			//text, small, light, password, num, timestamp, url, selfurl, click, selfclick
			objField:[] //{name: "", text: "-- Select --", elem: "", dist: "", value: {}, before: "", unit: "", help: "", right: false, elemStyle: {}, thStyle: {}, tdStyle: {}}
			, searchOff: true;
			, searchFn: function(searchObj, page){
				db.get("api/action.php/apiStockMast/pageSearch", {keyword: encodeURIComponent(searchObj.keyword || ""), page: ( page || 1)});
			}
			, searchElem: [] //{name: "keyword", subject: "ric_code / name", text: "-- Select --", select: [{}], datePicker: false, help: "" }
			, searchObj: {}
			, clearFn: ""
			, backFn: ""
		};
		db.infoObj = [{}];
		
		
		//project
		db.allTableHide = false;
		db.tableTitle = "Exchange SubAccount";
		//ng-template
		db.tableInitOff = false;
		db.allTableDataHide = false;
		db.tableConfig = {
			objKeys: []
			, lineTr: true
			, noDataMsg: "Loading..."
			, objField:[]
				//text, small, light, password, num, timestamp, url, selfurl, fn
				/*{name: "", text: "", elem: "", value: {}, pattem: "yyyy-MM-dd HH:mm:ss", width: "", before: "", unit: "", right: false, help: ""
				, elemStyle: {width: "66%"}, thStyle: {width: "20%"}, tdStyle: {width: "80%"}
				, fn: function(index, keys, obj, name, value){ 
					console.log("index, keys, obj, name, value", index, keys, obj, name, value);
					obj.internaListShow = true;
				}, fnText: ""}*/
			, listBtn : [] //{name: "btn4", text: "", css: "tfForm-link", css: "tfForm-btn tfForm-mini tfForm-listBtn", hide: {}, fn: function(index, keys, obj){ console.log("index, keys, obj", index, keys, obj) } }
			, searchOff: false;
			, searchFn: function(searchObj, page){
				db.get("api/action.php/apiStockMast/pageSearch", {keyword: encodeURIComponent(searchObj.keyword || ""), page: ( page || 1)});
			}
			, searchElem: [] //{name: "keyword", subject: "ric_code / name", text: "-- Select --", select: [{}], datePicker: false, help: "" }
			, searchObj: {}
			, clearFn: ""
			, backFn: ""
		};

		
		//project
		db.allFormHide = false;
		db.allFormDataHide = false;
		db.formInitOff = false;
		db.formAction = "add";
		db.formTitle = "Add Exchange SubAccount";
		db.formSubject = ["Exchange SubAccount Info"];
		//ng-template
		var formConfig = [[{}]];
			//text, light, small, password, link, date, btn, minibtn, short, input, long, full, textarea, blog, select, list, radio, datePicker
		     /*{ name: "", elem: "", subject: "", text: "-- Select --", value: "index.php", pattem: "yyyy年MM月dd日 HH:mm:ss", option: [{id: 1, name: "name1"}], help: "help", required: false, disabled: false
		    	  , elemStyle: {width: "66%"}, thStyle: {width: "20%"}, tdStyle: {width: "80%"}
		    	  , errorMsg: {required:  "input内容必需填写", minlength: "input内容设置过短", maxlength: "input内容设置过长", pattern: "input内容格式不符"}
		      }
		      , { name: ["",""], elem: "", subject: "", text: ["",""], option: [0, 1], disabled: [false, false]}*/

		db.formObj = {comp_no: 1, margin_method: "G"}
		
		
		db.httpInitResultData = function(data){
			console.log("[httpInitResultData => data]", data)
			formConfig[0][1].option = data.opt_market_code || [];
			formConfig[0][2].option = data.opt_Clr_Agent || [];
			formConfig[0][4].option = data.opt_margin_method || [];
		}
		
		db.actionBefore = function(action, form, formObj, index, keys){
		}
		
		db.actionAfter = function(action, form, formObj, index, keys){
		}
	};
	
	
	});