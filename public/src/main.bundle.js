!function(n){function r(r){for(var e,o,s=r[0],u=r[1],c=r[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(n[e]=u[e]);for(l&&l(r);f.length;)f.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var n,r=0;r<a.length;r++){for(var t=a[r],e=!0,s=1;s<t.length;s++){var u=t[s];0!==i[u]&&(e=!1)}e&&(a.splice(r--,1),n=o(o.s=t[0]))}return n}var e={},i={0:0},a=[];function o(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=e,o.d=function(n,r,t){o.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,r){if(1&r&&(n=o(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var e in n)o.d(t,e,function(r){return n[r]}.bind(null,e));return t},o.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(r,"a",r),r},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=r,s=s.slice();for(var c=0;c<s.length;c++)r(s[c]);var l=u;a.push([19,1]),t()}([function(n,r,t){"use strict";t.d(r,"a",(function(){return e}));var e=[{name:"عدد اول عادی",main:'algorithm = {\r\n\r\n    initialize: function () {\r\n        this.numbers = [10000019, 20000003, 30000001, 40000003, 50000017, 60000011, 70000027, 80000023, 90000049, 100000007];\r\n        this.i = 0;\r\n    },\r\n\r\n    update: function () {\r\n        this.i++;\r\n    },\r\n\r\n    run: function () {\r\n        var num = this.numbers[this.i];\r\n        for (var i = 2; i < num; i++)\r\n            if (num % i === 0) return num + " : isn\'t prime";\r\n        return num + " : is prime";\r\n    }\r\n};',series:void 0},{name:"عدد اول فرد",main:'algorithm = {\r\n\r\n    initialize: function () {\r\n        this.numbers = [10000019, 20000003, 30000001, 40000003, 50000017, 60000011, 70000027, 80000023, 90000049, 100000007];\r\n        this.i = 0;\r\n    },\r\n\r\n    update: function () {\r\n        this.i++;\r\n    },\r\n\r\n    run: function () {\r\n        var num = this.numbers[this.i];\r\n        for (var i = 3; i < num; i += 2)\r\n            if (num % i === 0) return num + " : isn\'t prime";\r\n        return num + " : is prime";\r\n    }\r\n};',series:void 0},{name:"عدد اول رادیکالی",main:'algorithm = {\r\n\r\n    initialize: function () {\r\n        /*\r\n        this.numbers = \r\n            [1000000007, 7000000001, 13000000073, 19000000007, 25000000013,\r\n            31000000027, 37000000007, 43000000019, 49000000001, 55000000001,\r\n            61000000001, 67000000003, 73000000019, 79000000063, 85000000013,\r\n            91000000037, 97000000037, 103000000007, 109000000001, 115000000007,\r\n            121000000021, 127000000003, 133000000043, 145000000027, 145000000027];\r\n        */\r\n        this.numbers = [99991, 199999, 299993, 399989, 499979, 599999, 699967, 799999, 899981, 999983];\r\n        this.i = 0;\r\n    },\r\n\r\n    update: function () {\r\n        this.i++;\r\n    },\r\n\r\n    run: function () {\r\n        var num = this.numbers[this.i];\r\n        var limit = Math.sqrt(num);\r\n        for (var i = 3; i < limit; i += 2)\r\n            if (num % i === 0) return num + " : isn\'t prime";\r\n        return num + " : is prime";\r\n    }\r\n};',series:void 0},{name:"توان عادی",main:"algorithm = {\r\n    initialize: function () {\r\n        this.pow = 2;\r\n        this.base = 2;\r\n    },\r\n\r\n    update: function () {\r\n        this.pow += 3;\r\n    },\r\n\r\n    run: function () {\r\n        var power = 1;\r\n        for (var i = 0; i < this.pow; i++) {\r\n            power = multiply(power, this.base);\r\n        }\r\n\r\n        return `pow(${this.base},${this.pow}) = ` + power;\r\n    }\r\n};\r\n",series:void 0},{name:"توان بازگشتی",main:"algorithm = {\r\n    initialize: function () {\r\n        this.pow = 2;\r\n        this.base = 2;\r\n    },\r\n\r\n    update: function () {\r\n        this.pow += 4;\r\n    },\r\n\r\n    power: function (base, n) {\r\n        if (n == 1)\r\n            return base;\r\n\r\n        if (n % 2 == 0) {\r\n            power = this.power(base, n / 2);\r\n            return multiply(power, power);\r\n        } else {\r\n            power = this.power(base, n - 1);\r\n            return multiply(base, power);\r\n        }\r\n    },\r\n\r\n    run: function () {\r\n        return `pow(${this.base},${this.pow}) = ` + this.power(this.base, this.pow);\r\n    }\r\n};",series:void 0},{name:"فیبوناتچی مربع کامل",main:'algorithm = {\r\n\r\n  initialize: function () {\r\n    this.i = 0;\r\n    this.numbers = [10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000];\r\n  },\r\n\r\n  update: function () {\r\n    this.i++;\r\n  },\r\n\r\n  isSquare: function (n) {\r\n    return Math.sqrt(n) % 1 === 0;\r\n  },\r\n\r\n  run: function () {\r\n    var number = this.numbers[this.i];\r\n    number = 5 * multiply(number, number);\r\n    if (this.isSquare(number + 4) || this.isSquare(number - 4))\r\n      return this.numbers[this.i] + " : is fibo";\r\n    else \r\n      return this.numbers[this.i] + " : isn\'t fibo";\r\n  }\r\n};',series:void 0},{name:"فیبوناتچی حلقه",main:'algorithm = {\r\n\r\n    initialize: function () {\r\n        this.n = 0;\r\n        this.numbers = [10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000, 100000000];\r\n    },\r\n\r\n    update: function () {\r\n        this.n++;\r\n    },\r\n\r\n    run: function () {\r\n        var a = 0;\r\n        var b = 1;\r\n        var sum = 0;\r\n        var number = this.numbers[this.n];\r\n\r\n        do {\r\n            sum = a + b;\r\n            a = b;\r\n            b = sum;\r\n            if (sum == number)\r\n                return  number + " : is fibo";\r\n        } while (sum <= number);\r\n        return number + " : isn\'t fibo";\r\n    }\r\n};',series:void 0}]},,,,,function(n,r,t){"use strict";(function(n){t.d(r,"a",(function(){return e}));var e=new(t(15).a)(n("#chart")[0],{chart:{height:"95%",type:"line",toolbar:{show:!1}},markers:{size:6,hover:{size:8,sizeOffset:3}},stroke:{curve:"smooth"},series:[],xaxis:{title:{text:"quantity"}},yaxis:{title:{text:"Time (millie second)"}},legend:{position:"top",horizontalAlign:"right"}});e.render()}).call(this,t(2))},function(n,r,t){"use strict";(function(n){t.d(r,"a",(function(){return o}));var e=t(1),i=t.n(e),a=(t(30),t(31),t(32),t(33),t(34),t(35),t(36),t(37),t(38),t(39),t(16));window.JSHINT=a.JSHINT;var o=i()(n("#code")[0],{value:"",mode:"javascript",theme:"material",lineNumbers:!0,lineWrapping:!0,lint:!0,gutters:["CodeMirror-lint-markers"],extraKeys:{"Ctrl-Space":"autocomplete"}});o.setSize("auto","100%")}).call(this,t(2))},,,,,,,,,,,function(n,r,t){"use strict";r.a="algorithm = {\r\n    initialize: function () {\r\n\r\n    },\r\n\r\n    update: function () {\r\n\r\n    },\r\n\r\n    run: function () {\r\n\r\n    }\r\n};\r\n"},function(n,r,t){n.exports=function(){return new Worker(t.p+"dee722705fa5f6fe75c0.worker.js")}},function(n,r,t){"use strict";t.r(r),function(n){var r=t(4),e=t.n(r),i=t(10),a=t.n(i),o=(t(21),t(22),t(24),t(25),t(5)),s=t(6),u=t(0),c=t(17),l=t(18),p=t.n(l);function f(n){return h.postMessage(n),new Promise((function(n){f.resolve=n}))}function m(){(h=new p.a).onmessage=function(n){f.resolve(n.data)}}var h,d=n("#mainAlgorithm"),v=n("#inputLoop"),b=n("#log-list"),w=0,g=v.val(),k=!1,y=[],x='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';function S(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main";return u.a[w][n]}function z(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"main";u.a[w][r]=n}function O(n){k=!0,s.a.setValue(u.a[n].main),w=n}function j(){var r="";u.a.forEach((function(n,t){r+='\n        <div class="btn-group w-100" data-val="'.concat(t,'">\n            <button class="btn btn-light remove">&#x1F5D1;</button>\n            <button class="dropdown-item select">').concat(n.name,"</button>\n        </div>\n        ")})),d.html(n(r))}function C(){u.a.forEach((function(n){return n.series=void 0})),o.a.updateSeries([],!1),b.text("")}function M(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",e='<span class="float-right">'.concat(r,"</span>");b.append('<li class="list-group-item '.concat(t,'">').concat(n+e,"</li>"))}function P(n){return S("series").data.push(n),o.a.updateSeries(y,!1)}function U(){var n=[];z({data:[],name:S("name")},"series"),u.a.forEach((function(r){r.series&&n.push(r.series)})),y=n}function q(){h.terminate(),m(),n("#Run").off("click").click(R).html("Run")}function R(){return _.apply(this,arguments)}function _(){return(_=a()(e.a.mark((function r(){var t,i,a;return e.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n("#Run").off("click").click(q).html(x+" Cancel"),U(),r.next=4,f(S());case 4:M(S("name"),"time","list-group-item-primary"),t=0;case 6:if(!(t<g)){r.next=18;break}return r.next=9,f();case 9:return i=r.sent,a=i.time,M(i.output,a.toFixed(1)),r.next=15,P(a.toFixed(1));case 15:t++,r.next=6;break;case 18:n("#Run").off("click").click(R).text("Run");case 19:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function A(){return(A=a()(e.a.mark((function n(){var r;return e.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:C(),r=0;case 2:if(!(r<u.a.length)){n.next=9;break}return O(r),n.next=6,R();case 6:r++,n.next=2;break;case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}m(),j(),s.a.setValue(S()),y=[],u.a.forEach((function(n){n.series&&y.push(n.series)})),o.a.updateSeries(y,!1),n("#loader").removeClass("d-flex").hide(),n("#Ok").click((function(){g=v.val()})),n("#mainAlgorithm").on("click",".select",(function(){O(n(this).parent().data("val"))})),n("#mainAlgorithm").on("click",".remove",(function(){!function(r,t){u.a.splice(r,1),t.parent().remove(),n("#mainAlgorithm div").each((function(r,t){n(t).data("val",r)})),r==w&&(w=0,O(0))}(n(this).parent().data("val"),n(this))})),n("#run-all").on("click",(function(){return A.apply(this,arguments)})),n("#clear").on("click",C),n("#new-algo").on("click",(function(){return n("#new-algo-modal").modal("show")})),n("#new-algo-ok").on("click",(function(){return r=n("#new-algo-name").val(),t=u.a.push({name:r,main:c.a,series:void 0}),d.text(""),j(),void O(t-1);var r,t})),n("#display-chart").on("click",(function(){n("#chart-col").removeClass("d-none"),n("#log-col").addClass("d-none"),"15px"==n("#chart").css("min-height")&&o.a.render()})),n("#display-log").on("click",(function(){n("#log-col").removeClass("d-none"),n("#chart-col").addClass("d-none")})),s.a.on("change",(function(){k?(k=!1,n("#Update").prop("disabled",!0).html("Update")):n("#Update").prop("disabled",!1).html('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Update')})),n("#Update").click((function(){z(s.a.getValue(),"main"),n("#Update").prop("disabled",!0).html("Update")})),n("#Run").click(R)}.call(this,t(2))},,function(n,r,t){}]);