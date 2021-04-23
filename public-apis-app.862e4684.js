parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ichq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.weatherByCity=void 0;const e={London:{lat:51.5085,lon:-.1257,timezone:"Europe/London",timezone_offset:3600,current:{dt:1616951793,sunrise:1616910276,sunset:1616955974,temp:284.85,feels_like:277.94,pressure:1023,humidity:71,dew_point:279.77,uvi:.12,clouds:75,visibility:1e4,wind_speed:8.75,wind_deg:230,wind_gust:13.89,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}]},daily:[{dt:1616932800,sunrise:1616910276,sunset:1616955974,temp:{day:284.28,min:281.18,max:285.21,night:282.74,eve:284.32,morn:281.93},feels_like:{day:278.73,night:277.68,eve:278.92,morn:276.07},pressure:1023,humidity:76,dew_point:280.16,wind_speed:6.95,wind_deg:224,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04d"}],clouds:100,pop:0,uvi:1.19},{dt:1617019200,sunrise:1616996538,sunset:1617042474,temp:{day:290.17,min:281.59,max:290.99,night:282.95,eve:287.07,morn:281.59},feels_like:{day:284.51,night:279.8,eve:283.32,morn:277.35},pressure:1027,humidity:36,dew_point:275.14,wind_speed:5.65,wind_deg:227,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:10,pop:0,uvi:3.68},{dt:1617105600,sunrise:1617082801,sunset:1617128974,temp:{day:292.22,min:281.21,max:293.49,night:286.04,eve:289.95,morn:281.21},feels_like:{day:289.26,night:283.83,eve:287.85,morn:278.99},pressure:1029,humidity:42,dew_point:279.29,wind_speed:2.87,wind_deg:182,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:9,pop:0,uvi:3.5},{dt:1617192e3,sunrise:1617169064,sunset:1617215474,temp:{day:293.57,min:283.81,max:294.63,night:288.56,eve:291.48,morn:283.81},feels_like:{day:291.62,night:288.12,eve:290.59,morn:282.29},pressure:1021,humidity:48,dew_point:282.54,wind_speed:2.49,wind_deg:217,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:72,pop:0,uvi:3.07},{dt:1617278400,sunrise:1617255327,sunset:1617301974,temp:{day:286.04,min:279.19,max:286.04,night:279.19,eve:282.93,morn:281.02},feels_like:{day:280.68,night:274.16,eve:277.61,morn:276.03},pressure:1028,humidity:51,dew_point:276.4,wind_speed:5.51,wind_deg:49,weather:[{id:802,main:"Clouds",description:"scattered clouds",icon:"03d"}],clouds:26,pop:0,uvi:3.08},{dt:1617364800,sunrise:1617341591,sunset:1617388474,temp:{day:281.2,min:276.23,max:284.04,night:278.49,eve:281.04,morn:276.23},feels_like:{day:275.41,night:273.54,eve:275.51,morn:271.91},pressure:1029,humidity:57,dew_point:273.26,wind_speed:5.45,wind_deg:21,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:74,pop:0,uvi:4},{dt:1617451200,sunrise:1617427854,sunset:1617474973,temp:{day:280.21,min:277.84,max:280.74,night:278.74,eve:280.18,morn:277.84},feels_like:{day:274.23,night:274.48,eve:274.87,morn:272.29},pressure:1029,humidity:58,dew_point:272.45,wind_speed:5.57,wind_deg:33,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04d"}],clouds:100,pop:0,uvi:4},{dt:1617537600,sunrise:1617514119,sunset:1617561473,temp:{day:284.89,min:277.86,max:286.15,night:282.22,eve:285.09,morn:278.13},feels_like:{day:281.6,night:280.03,eve:282.51,morn:274.52},pressure:1023,humidity:56,dew_point:276.46,wind_speed:2.62,wind_deg:25,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04d"}],clouds:95,pop:0,uvi:4}]},Kyiv:{lat:50.4333,lon:30.5167,timezone:"Europe/Kiev",timezone_offset:10800,current:{dt:1616952193,sunrise:1616902975,sunset:1616948570,temp:284.86,feels_like:282.09,pressure:1021,humidity:58,dew_point:276.88,uvi:0,clouds:0,visibility:1e4,wind_speed:2,wind_deg:90,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01n"}]},daily:[{dt:1616925600,sunrise:1616902975,sunset:1616948570,temp:{day:285.99,min:278.32,max:286.93,night:279.89,eve:284.96,morn:278.32},feels_like:{day:280.96,night:275.38,eve:281.62,morn:274.98},pressure:1024,humidity:37,dew_point:272.04,wind_speed:4.05,wind_deg:202,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:72,pop:.03,uvi:2.86},{dt:1617012e3,sunrise:1616989242,sunset:1617035065,temp:{day:281.14,min:277.67,max:282.99,night:278.15,eve:280.61,morn:277.67},feels_like:{day:277.07,night:274.97,eve:276.46,morn:272.76},pressure:1029,humidity:71,dew_point:276.37,wind_speed:3.68,wind_deg:0,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04d"}],clouds:100,pop:.11,uvi:2.08},{dt:1617098400,sunrise:1617075509,sunset:1617121560,temp:{day:281.95,min:276.31,max:283.08,night:279.82,eve:281.7,morn:276.31},feels_like:{day:278.79,night:275.47,eve:277.76,morn:273.8},pressure:1033,humidity:61,dew_point:275,wind_speed:2.05,wind_deg:125,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:53,pop:0,uvi:2.2},{dt:1617184800,sunrise:1617161777,sunset:1617208056,temp:{day:281.86,min:279.74,max:286.91,night:284.85,eve:286.13,morn:279.83},feels_like:{day:278.6,night:282.59,eve:284.3,morn:275.44},pressure:1026,humidity:88,dew_point:280.02,wind_speed:3.61,wind_deg:244,weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:100,pop:.38,rain:.41,uvi:.9},{dt:1617271200,sunrise:1617248045,sunset:1617294551,temp:{day:287.29,min:281.84,max:290.83,night:286.49,eve:288.71,morn:281.84},feels_like:{day:283.7,night:281.58,eve:284.06,morn:279.41},pressure:1016,humidity:61,dew_point:279.9,wind_speed:4.05,wind_deg:254,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04d"}],clouds:94,pop:0,uvi:2.68},{dt:1617357600,sunrise:1617334313,sunset:1617381046,temp:{day:276.9,min:275.98,max:285.76,night:277.13,eve:276.96,morn:280.73},feels_like:{day:272.15,night:274.68,eve:272.89,morn:276.64},pressure:1009,humidity:92,dew_point:275.87,wind_speed:4.53,wind_deg:2,weather:[{id:616,main:"Snow",description:"rain and snow",icon:"13d"}],clouds:100,pop:1,rain:7,snow:4.13,uvi:3},{dt:1617444e3,sunrise:1617420581,sunset:1617467542,temp:{day:281,min:274.67,max:282.61,night:279.27,eve:282.09,morn:274.67},feels_like:{day:276.21,night:275.06,eve:276.86,morn:271.09},pressure:1012,humidity:52,dew_point:271.96,wind_speed:3.73,wind_deg:306,weather:[{id:801,main:"Clouds",description:"few clouds",icon:"02d"}],clouds:15,pop:.06,uvi:3},{dt:1617530400,sunrise:1617506850,sunset:1617554037,temp:{day:281.31,min:275.04,max:283.04,night:279.7,eve:282.61,morn:275.04},feels_like:{day:277.43,night:276.42,eve:277.46,morn:271.19},pressure:1018,humidity:47,dew_point:270.77,wind_speed:2.23,wind_deg:305,weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:9,pop:.35,rain:.17,uvi:3}]},Warsaw:{lat:52.2298,lon:21.0118,timezone:"Europe/Warsaw",timezone_offset:7200,current:{dt:1616952306,sunrise:1616905181,sunset:1616950925,temp:280.05,feels_like:275.27,pressure:1028,humidity:53,dew_point:271.37,uvi:0,clouds:0,visibility:1e4,wind_speed:3.6,wind_deg:280,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01n"}]},daily:[{dt:1616925600,sunrise:1616905181,sunset:1616950925,temp:{day:279.15,min:276.2,max:281.75,night:278.38,eve:281.75,morn:276.2},feels_like:{day:273.15,night:274.68,eve:277.53,morn:271.44},pressure:1028,humidity:62,dew_point:272.71,wind_speed:5.58,wind_deg:282,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04d"}],clouds:93,pop:.21,uvi:1.62},{dt:1617012e3,sunrise:1616991441,sunset:1617037428,temp:{day:279.53,min:277.66,max:282.88,night:280.42,eve:280.57,morn:278.16},feels_like:{day:276.68,night:277.74,eve:277.76,morn:274.48},pressure:1030,humidity:89,dew_point:278.07,wind_speed:2.38,wind_deg:216,weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:100,pop:.56,rain:.81,uvi:.49},{dt:1617098400,sunrise:1617077700,sunset:1617123931,temp:{day:285.68,min:280.3,max:287.36,night:284.52,eve:285.96,morn:280.39},feels_like:{day:283.1,night:282.72,eve:284.37,morn:277.83},pressure:1030,humidity:78,dew_point:282.13,wind_speed:3.3,wind_deg:277,weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:100,pop:.96,rain:.82,uvi:2.55},{dt:1617184800,sunrise:1617163960,sunset:1617210434,temp:{day:288.31,min:282.12,max:291.68,night:285.34,eve:291.68,morn:282.12},feels_like:{day:285.39,night:282.71,eve:288.08,morn:279.98},pressure:1026,humidity:64,dew_point:281.93,wind_speed:3.65,wind_deg:263,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:69,pop:0,uvi:3.43},{dt:1617271200,sunrise:1617250220,sunset:1617296937,temp:{day:288.23,min:278.11,max:288.88,night:278.11,eve:280.67,morn:282.56},feels_like:{day:283.91,night:272.92,eve:275.54,morn:279.58},pressure:1013,humidity:57,dew_point:280.02,wind_speed:5.05,wind_deg:281,weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:90,pop:.74,rain:.83,uvi:3.42},{dt:1617357600,sunrise:1617336480,sunset:1617383440,temp:{day:279.31,min:275.41,max:281.88,night:279.05,eve:281.88,morn:275.41},feels_like:{day:275.17,night:276.28,eve:277.43,morn:271.63},pressure:1015,humidity:49,dew_point:269.59,wind_speed:2.38,wind_deg:336,weather:[{id:802,main:"Clouds",description:"scattered clouds",icon:"03d"}],clouds:42,pop:.07,uvi:4},{dt:1617444e3,sunrise:1617422741,sunset:1617469943,temp:{day:279.52,min:276.15,max:282.07,night:277.08,eve:281.72,morn:276.15},feels_like:{day:275.28,night:272.6,eve:276.06,morn:272.86},pressure:1016,humidity:56,dew_point:271.68,wind_speed:2.87,wind_deg:355,weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],clouds:51,pop:.45,rain:.22,uvi:4},{dt:1617530400,sunrise:1617509002,sunset:1617556446,temp:{day:279.03,min:274.4,max:281.97,night:278.16,eve:281.97,morn:274.4},feels_like:{day:275.24,night:274.95,eve:277.76,morn:270.59},pressure:1021,humidity:50,dew_point:269.56,wind_speed:1.88,wind_deg:345,weather:[{id:801,main:"Clouds",description:"few clouds",icon:"02d"}],clouds:13,pop:0,uvi:4}]},Paris:{lat:48.8534,lon:2.3488,timezone:"Europe/Paris",timezone_offset:7200,current:{dt:1616952352,sunrise:1616909784,sunset:1616955279,temp:289.03,feels_like:285.12,pressure:1028,humidity:44,dew_point:276.81,uvi:.22,clouds:0,visibility:1e4,wind_speed:3.6,wind_deg:210,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}]},daily:[{dt:1616929200,sunrise:1616909784,sunset:1616955279,temp:{day:286.28,min:278.94,max:289.03,night:284.52,eve:289.03,morn:278.99},feels_like:{day:281.38,night:281.76,eve:285.32,morn:275.7},pressure:1030,humidity:46,dew_point:274.75,wind_speed:4.56,wind_deg:221,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04d"}],clouds:88,pop:0,uvi:3.65},{dt:1617015600,sunrise:1616996057,sunset:1617041768,temp:{day:289.99,min:280.76,max:293.61,night:287.4,eve:292.47,morn:280.88},feels_like:{day:286.86,night:285.13,eve:289.63,morn:278.1},pressure:1032,humidity:38,dew_point:275.51,wind_speed:2.19,wind_deg:184,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:65,pop:0,uvi:4.12},{dt:1617102e3,sunrise:1617082331,sunset:1617128257,temp:{day:292.07,min:282.99,max:295.5,night:289.13,eve:294.23,morn:283.22},feels_like:{day:289.13,night:287.66,eve:291.97,morn:280.99},pressure:1030,humidity:36,dew_point:276.91,wind_speed:2.19,wind_deg:125,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:0,pop:0,uvi:4.25},{dt:1617188400,sunrise:1617168604,sunset:1617214746,temp:{day:294.65,min:284.91,max:296.6,night:290.29,eve:293.5,morn:285.03},feels_like:{day:292.88,night:289.12,eve:292.09,morn:284.15},pressure:1022,humidity:39,dew_point:280.18,wind_speed:1.51,wind_deg:176,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:2,pop:0,uvi:4.26},{dt:1617274800,sunrise:1617254878,sunset:1617301235,temp:{day:294.64,min:285.71,max:294.64,night:285.71,eve:290.31,morn:285.95},feels_like:{day:291.37,night:280.79,eve:286.12,morn:284.2},pressure:1021,humidity:42,dew_point:281.24,wind_speed:4.02,wind_deg:45,weather:[{id:803,main:"Clouds",description:"broken clouds",icon:"04d"}],clouds:53,pop:0,uvi:4.03},{dt:1617361200,sunrise:1617341152,sunset:1617387724,temp:{day:285.24,min:278.53,max:285.72,night:280.38,eve:283.15,morn:278.53},feels_like:{day:278.56,night:274.51,eve:277.3,morn:273.07},pressure:1023,humidity:37,dew_point:270.8,wind_speed:6.29,wind_deg:32,weather:[{id:800,main:"Clear",description:"clear sky",icon:"01d"}],clouds:1,pop:0,uvi:5},{dt:1617447600,sunrise:1617427427,sunset:1617474213,temp:{day:283.27,min:277.06,max:285.56,night:280.41,eve:283.79,morn:277.47},feels_like:{day:277.37,night:274.59,eve:277.92,morn:271.54},pressure:1023,humidity:40,dew_point:270.29,wind_speed:5.05,wind_deg:32,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04d"}],clouds:94,pop:0,uvi:5},{dt:1617534e3,sunrise:1617513702,sunset:1617560702,temp:{day:284.94,min:276.72,max:286.27,night:281.36,eve:284.2,morn:276.72},feels_like:{day:279.37,night:277.08,eve:279.23,morn:272.07},pressure:1020,humidity:36,dew_point:270.18,wind_speed:4.59,wind_deg:43,weather:[{id:802,main:"Clouds",description:"scattered clouds",icon:"03d"}],clouds:28,pop:0,uvi:5}]}};exports.weatherByCity=e;
},{}],"FO+Z":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayInUnits=o,exports.getDateFromUnixTimestamp=n,exports.getIconFromCode=s,exports.FAHRENHEIT_UNITS=exports.CELSIUS_UNITS=exports.KELVIN_UNITS=void 0;const t="K";exports.KELVIN_UNITS="K";const e="C";exports.CELSIUS_UNITS=e;const r="F";function o(t,o){switch(o){case e:return`${Math.round(t-273.15)}˚C`;case r:return`${Math.round(1.8*(t-273.15)+32)}˚F`;default:return`${t}˚K`}}function n(t){return new Date(1e3*t).toLocaleDateString()}function s(t){return`<img src="http://openweathermap.org/img/wn/${t}@2x.png" width="30px" height="30px" alt="weather icon">`}exports.FAHRENHEIT_UNITS=r;
},{}],"Focm":[function(require,module,exports) {
"use strict";var n=require("./fixtures"),t=require("./utils");module.hot&&module.hot.accept(),window.dataStore={currentCity:"",currentUnits:t.CELSIUS_UNITS},window.renderApp=i;const e=function(n){window.dataStore.currentUnits=n,window.renderApp()};function i(){document.getElementById("app-root").innerHTML=`\n        ${r()}\n    `}function r(){return`<div>\n ${a()}\n ${o(window.dataStore.currentUnits,e)}\n <br/> \n ${d()}\n <br/>\n ${u()}\n</div>`}function o(n,e){return`\n    <p>Select units</p>\n  ${[{id:"celsius-units",value:t.CELSIUS_UNITS,name:"C"},{id:"fahrenheit-units",value:t.FAHRENHEIT_UNITS,name:"F"}].map(({id:t,value:i,name:r})=>`<div>\n          <input \n              type="radio" \n              id="${t}"\n              name="temperature-units" \n              value="${i}" \n              ${n===i?" checked ":""} \n              onchange="(${e})(this.value);"\n          >\n            <label for="${t}">˚${r}</label>\n        </div>`).join("")}\n`}function a(){const t=n.weatherByCity[window.dataStore.currentCity];return`\n    <input\n        type="text"\n        value="${window.dataStore.currentCity}"\n        onchange="window.dataStore.currentCity = this.value; window.renderApp();" \n    />\n    ${t?"":`Enter one of the city names: ${Object.keys(n.weatherByCity).join(", ")}.`}\n`}function d(){const{currentCity:e,currentUnits:i}=window.dataStore,r=n.weatherByCity[e];let o="";if(r){const{current:{dt:n,temp:a,weather:[{main:d,description:u,icon:c}]}}=r,s=(0,t.displayInUnits)(a,i);o+=`<div>Weather for ${(0,t.getDateFromUnixTimestamp)(n)} in ${e}:</div>`,o+=`<div>${(0,t.getIconFromCode)(c)} ${d} (${u}). Temperature is ${s}</div>`}return o?`<div>${o}</div>`:""}function u(){const{currentCity:e,currentUnits:i}=window.dataStore,r=n.weatherByCity[e];let o="";if(r){o+=`Weather forecast for ${e}:`;const{daily:n}=r;o+=n.slice(1).map(({dt:n,temp:{day:e,night:r},weather:[{main:o,description:a,icon:d}]})=>{const u=(0,t.getDateFromUnixTimestamp)(n),c=(0,t.displayInUnits)(e,i),s=(0,t.displayInUnits)(r,i);return`<div>For ${u}, ${(0,t.getIconFromCode)(d)} ${o} (${a}). Day at ${c}, night at ${s}</div>`}).join("")}return o?`<div>${o}</div>`:""}i();
},{"./fixtures":"Ichq","./utils":"FO+Z"}]},{},["Focm"], null)
//# sourceMappingURL=public-apis-app.862e4684.js.map