
	app.service("dbService", function($http){
		var db = this;
		var p = getParams();
		
		db.allInfoHide = false;
		db.allInfoDataHide = false;
		db.allFormHide = false;
		db.allFormDataHide = false;
		db.allTableHide = false;
		db.allTableDataHide = false;
		
		
		db.infoInitOff = false;
		db.infoTitle = "Test";
		db.infoSubject = "Test";
		db.infoConfig = {
			objField:[
				{name: "comp_no", text: "comp_no", elem: "text", value: null, before: "", unit: "", help: ""}
				, {name: "market_code", text: "market_code", elem: "small", value: null, before: "", unit: "", help: "" }
				, {name: "Clr_Agent", text: "Clr_Agent", elem: "light", value: null, before: "", unit: "", help: "" }
				, {name: "sub_acc_no", text: "sub_acc_no", elem: "timestamp", value: null, before: "", unit: "", help: ""}
				, {name: "margin_method", text: "margin_method", elem: "url", dist: "",  value: {G: "Gross", N: "Net"}, before: "", unit: "", help: "" }
				, {name: "margin_method", text: "margin_method", elem: "selfurl", value: {G: "Gross", N: "Net"}, before: "", unit: "", help: "" }
				, {name: "margin_method", text: "margin_method", elem: "click", value: {G: "Gross", N: "Net"}, before: "", unit: "", help: "" }
				, {name: "margin_method", text: "margin_method", elem: "selfclick", value: {G: "Gross", N: "Net"}, before: "", unit: "", help: "" }
				, {name: "margin_method", text: "margin_method", elem: "password", value: {G: "Gross", N: "Net"}, before: "", unit: "", help: "" }
				, {name: "cls_price", text: "Close Price", elem: "num", value: null, before: "", unit: 8, help: "", right: true, elemStyle: {width: "66%"}, thStyle: {width: "20%"}, tdStyle: {width: "80%"}}
				
			]
			, searchOff: false;
			, searchFn: function(searchObj, page){
				db.get("api/index.php/apiStockMast/pageSearch", {keyword: encodeURIComponent(searchObj.keyword || ""), page: ( page || 1)});
			}
			, searchElem: [
				{name: "keyword", subject: "ric_code / name", text: "keyword", select: false, help: "SP prode code" }
				, {name: "market_code", subject: "market_code", text: "-- Select --", select: [], help: "" }
				, {name: "board", subject: "board", text: "-- Select --", select: [], help: "" }
				, { name: "date", subject: "Date", text: "", select: false, datePicker: true, help: "" }
			]
			, searchObj: {keyword: "111"}
			, clearFn: ""
			, backFn: ""
		};
		db.infoObj = [{margin_ratio_class: "CCCCC"}];
		
		db.tableInitOff = false;
		db.tableTitle = "Exchange SubAccount";
		/*db.tableConfig = {
				choiceBtn: [
						{text: "Delete", css: "tfForm-btn tfForm-join tfForm-choiceBtn", fn: function(checkbox, keys, tableData){ console.log("checkbox, keys, tableData", checkbox, keys, tableData) } } //[], [], []
				]
				, 
				listBtn : [
					{name: "btn1", text: "", css: "tfForm-viewBtn", hide: {text: true}, fn: function(index, keys, obj){ console.log("index, keys, obj", index, keys, obj) } } //[], [], [] 
					, {name: "btn2", text: "", css: "tfForm-editBtn", hide: {}, fn: function(index, keys, obj){ console.log("index, keys, obj", index, keys, obj) } }
					, {name: "btn3", text: "", css: "tfForm-deleteBtn", hide: {}, fn: function(index, keys, obj){ console.log("index, keys, obj", index, keys, obj) } 
					, {name: "btn4", text: "", css: "tfForm-link", hide: {}, fn: function(index, keys, obj){ console.log("index, keys, obj", index, keys, obj) } }
					, {name: "btn5", text: "", css: "tfForm-btn tfForm-mini", hide: {}, fn: function(index, keys, obj){ console.log("index, keys, obj", index, keys, obj) } }
					, {name: "btn5", text: "", css: "tfForm-btn tfForm-mini tfForm-listBtn", hide: {}, fn: function(index, keys, obj){ console.log("index, keys, obj", index, keys, obj) } }
				]
				, objKeys: ["text","small"]
				, objField:[
					{name: "text", text: "text", elem: "text", value: {text: "文字"}, width: "", before: "", unit: "", help: "help" } //num, [], {}
					, {name: "small", text: "small", elem: "small", value: null, width: "", before: "", unit: "", help: "" }
					, {name: "light", text: "light", elem: "light", value: null, width: "", before: "", unit: "", help: "" }
					, {name: "timestamp", text: "timestamp", elem: "timestamp", value: null, pattem: "yyyy-MM-dd HH:mm:ss", width: "", before: "", unit: "", help: "" }
					, {name: "password", text: "password", elem: "password", value: null, width: "", before: "", unit: "", help: "" }
					, {name: "fn", text: "fn", elem: "fn", value: null, width: "", before: "", unit: "", help: "", fn: function(index, keys, obj, name, value){ 
						console.log("index, keys, obj, name, value", index, keys, obj, name, value);
						obj.internaListShow = true;
					}, fnText: "fnText"}
					, {name: "url", text: "url", elem: "url", value: null, width: "", before: "", unit: "", help: "" }
					, {name: "selfurl", text: "selfurl", elem: "selfurl", value: null, width: "", before: "", unit: "", help: "" }
					, {name: "img", text: "img", elem: "img", value: null, width: "", before: "", unit: "", help: "" }
				]
				, searchFn: function(keyword, page){ console.log("keyword", keyword); tableConfig.searchValue = ""; }
				, searchFields: "( code / name / market / board)"
			};*/
		db.tableConfig = {
			objKeys: []
			, lineTr: true //單行CSS
			, noDataMsg: "Loading..."
			, objField:[
				{name: "comp_no", text: "comp_no", elem: "text", value: null, width: "10%", before: "", unit: "", help: "", elemStyle: {width: "66%"}, thStyle: {width: "20%"}, tdStyle: {width: "80%"}}
				, {name: "market_code", text: "market_code", elem: "text", value: null, width: "10%", before: "", unit: "", help: "" }
				, {name: "Clr_Agent", text: "Clr_Agent", elem: "text", value: null, width: "10%", before: "", unit: "", help: "" }
				, {name: "sub_acc_no", text: "sub_acc_no", elem: "text", value: null, width: "10%", before: "", unit: "", help: ""}
				, {name: "margin_method", text: "margin_method", elem: "text", value: {G: "Gross", N: "Net"}, width: "10%", before: "", unit: "", help: "" }
				, {name: "cls_price", text: "Close Price", elem: "num", value: null, width: "", before: "", unit: 8, help: "", right: true, fn:function(value){}, fnText:""}
				
			]
			, searchOff: false;
			, searchFn: function(searchObj, page){
				db.get("api/index.php/apiStockMast/pageSearch", {keyword: encodeURIComponent(searchObj.keyword || ""), page: ( page || 1)});
			}
			, searchElem: [
				{name: "keyword", subject: "ric_code / name", text: "keyword", select: false, help: "SP prode code" }
				, {name: "market_code", subject: "market_code", text: "-- Select --", select: [], help: "" }
				, {name: "board", subject: "board", text: "-- Select --", select: [], help: "" }
			]
			, searchObj: {keyword: "111"}
			, clearFn: ""
			, backFn: ""
		};
		//tableData => data.listBtnHide.btn2 data.recordHide
		
		db.formInitOff = false;
		db.formAction = "add";
		db.formTitle = "Add Exchange SubAccount";
		db.formSubject = ["Exchange SubAccount Info"];
		db.formObj = {comp_no: 1, margin_method: "G"}
		/*var formConfig = [
	         [
		      { name: "text", elem: "text", subject: "text", text: "text", help: "help" }
	      		, { name: "light", elem: "light", subject: "light", text: "light", help: "" }
	      		, { name: "small", elem: "small", subject: "small", text: "small", help: "" }
	      		, { name: "link", elem: "link", subject: "link", text: "link", value: "value", help: "" }
	      		, { name: "date", elem: "date", subject: "date", text: "1528891744", pattem: "yyyy年MM月dd日 HH:mm:ss", help: "" }
	      		, { name: "btn", elem: "btn", subject: "btn", text: "btn", fn: null, help: "" }
	      		, { name: "minibtn", elem: "minibtn", subject: "minibtn", text: "minibtn", fn: null, help: "" }
	      		, { name: "short", elem: "short", subject: "short", text: "short", pattem: /^[0-9]{0,}$/, required: false, disabled: false, help: "" }
	      		, { name: "input", elem: "input", subject: "input", text: "input", pattem: /^[0-9]{0,}$/, required: false, disabled: false, help: "", errorMsg: {required:  "input内容必需填写", minlength: "input内容设置过短", maxlength: "input内容设置过长", pattern: "input内容格式不符"}}
	      		, { name: "long", elem: "long", subject: "long", text: "long", pattem: "", required: false, disabled: false, help: "" }
	      		, { name: "full", elem: "full", subject: "full", text: "full", pattem: "", required: false, disabled: false, help: "" }
	      		, { name: "password", elem: "password", subject: "password", text: "password", pattem: "", required: false, disabled: false, help: "" }
	      		, { name: "select", elem: "select", subject: "select", text: "-- 选择 --", option: [{id: 1, name: "name1"}, {id: 2, name: "name2"}], help: "" }
	      		, { name: "list", elem: "list", subject: "list", option: [{id: 1, name: "name1"}, {id: 2, name: "name2"}, {id: 3, name: "name3"}], help: ""}
	      		, { name: "textarea", elem: "textarea", subject: "textarea", text: "textarea", help: ""}
	      		, { name: "blog", elem: "blog", subject: "blog", text: "blog", help: ""}
	      		, { name: "radio", elem: "radio", subject: "radio", option:  [{id: 1, name: "name1"}, {id: 2, name: "name2"}], disabled: false, help: ""}
	      		, { name: ["checkbox1","checkbox2"], elem: "checkbox", subject: "checkbox", text: ["开启1","开启2"], option: [0, 1], disabled: [false, false], help: ""}
	      	]
		]*/
		db.formConfig = [
		   [
	 	     { name: "comp_no", elem: "short", subject: "comp_no", text: "", help: "", elemStyle: {width: "66%"}, thStyle: {width: "20%"}, tdStyle: {width: "80%"}}
	 	     , { name: "market_code", elem: "select", subject: "market_code", text: "-- Select --", option: [], help: "", fn:function(){} }
	 	     , { name: "Clr_Agent", elem: "select", subject: "Clr_Agent", text: "-- Select --", option: [], help: "" }
	 	     , { name: "sub_acc_no", elem: "input", subject: "sub_acc_no", text: "", pattem: REGEX_CH_EXCLUDE, required: true, disabled: false, help: "", errorMsg: null}
	 	     , { name: "margin_method", elem: "radio", subject: "margin_method", option:  [], disabled: false, help: ""}
	 	     , { name: "", elem: "text", subject: "", text: "", help: "" }
	 	    , { name: "", elem: "datePicker", subject: "", text: "", help: "" }
	 	    
	       	]
	 	]
		
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