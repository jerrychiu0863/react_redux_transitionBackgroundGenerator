(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/css.9c9c21e8.svg"},function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(8),r=a.n(l),c=(a(17),a(19),a(21),a(1)),i={SET_FIRST_COLOR:"SET_FIRST_COLOR",SET_SECOND_COLOR:"SET_SECOND_COLOR",SET_COLOR_DEGREE:"SET_COLOR_DEGREE",SET_FONT_SIZE:"SET_FONT_SIZE",SET_FONT_COLOR:"SET_FONT_COLOR",SET_FONT_FAMILY:"SET_FONT_FAMILY",SET_TYPING:" SET_TYPING",CLEAR_TYPING:"CLEAR_TYPING",RESET:"RESET",SAVE_DESIGN:"SAVE_DESIGN",DELETE_DESIGN:" DELETE_DESIGN",SET_MODEL:"SET_MODEL",ACTIVE_COLOR_LIST:"ACTIVE_COLOR_LIST",DELETE_ALL:"DELETE_ALL"};var s=a(5),m=a(4);var u=Object(c.b)({color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["#005aa7","#fffde4"],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SET_FIRST_COLOR:return[t.payload,e[1]];case i.SET_SECOND_COLOR:return[e[0],t.payload];case i.RESET:return["#005aa7","#fffde4"];default:return e}},fontSizeValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"8",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SET_FONT_SIZE:return t.payload;case i.RESET:return"8";default:return e}},colorDegree:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SET_COLOR_DEGREE:return t.payload;case i.RESET:return"0";default:return e}},typing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Hello World!",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SET_TYPING:return t.payload;case i.CLEAR_TYPING:return"";case i.RESET:return"Hello World!";default:return e}},fontColor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#000000",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SET_FONT_COLOR:return t.payload;case i.RESET:return"#000000";default:return e}},fontFamily:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Lato",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SET_FONT_FAMILY:return t.payload;case i.RESET:return"Lato";default:return e}},colorLists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.SAVE_DESIGN:var a=t.payload,n=a.color,o=a.colorDegree,l=a.fontFamily,r=a.fontSize,c=a.fontColor,u=a.typing,E=a.id,d=a.date,f=a.timestamp;return 0===u.length?Object(m.a)(e).concat([{color:n,colorDegree:o,fontFamily:"",fontSize:"",fontColor:"",typing:"",id:E,date:d,timestamp:f,isActive:!1}]):Object(m.a)(e).concat([{color:n,colorDegree:o,fontFamily:l,fontSize:r,fontColor:c,typing:u,id:E,date:d,timestamp:f,isActive:!1}]);case i.ACTIVE_COLOR_LIST:var _=t.payload.colorId;return e.map(function(e){return e.id!==_?Object(s.a)({},e,{isActive:!1}):Object(s.a)({},e,{isActive:!0})});case i.DELETE_DESIGN:return e.filter(function(e){return e.id!==t.payload});case i.DELETE_ALL:return[];default:return e}},isModelOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case i.SET_MODEL:return!e;default:return e}},activeColorList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.ACTIVE_COLOR_LIST:return t.payload.colorList;default:return e}}}),E=a(3),d=Object(c.a)(Object(E.save)())(c.c)(u,Object(E.load)()),f=(a(28),function(){var e=d.getState(),t=e.color,a=e.fontSizeValue,n=e.colorDegree,l=e.typing,r=e.fontColor,c=e.fontFamily,i={fontSize:"".concat(a,"px"),backgroundImage:"linear-gradient(-".concat(n,"deg, ").concat(t[0],", ").concat(t[1],")"),height:"500px",textAlign:"center",color:"".concat(r),fontFamily:"".concat(c),overflow:"auto"};return o.a.createElement("div",{className:"View"},o.a.createElement("div",{className:"View__header"},o.a.createElement("p",null,"Canvas")),o.a.createElement("h1",{style:i},l))}),_=a(10),p=a.n(_),v=function(){return{type:i.SET_MODEL,payload:""}},y=(a(31),function(e){var t=e.colorLists;return o.a.createElement("div",{className:"SideBarHead"},o.a.createElement("button",{onClick:function(){d.dispatch(v())},className:"SideBarHead__btn"},o.a.createElement("i",{className:0!==t.length?"fas fa-bookmark icon__active":"fas fa-bookmark"})))}),g=[8,10,12,14,16,18,20,22,26,32,36,42,48,54],L=[0,45,90,135,180],S=["Lato","Playfair Display","Roboto","Roboto Slab"],T=[" ","-o-","-ms-","-moz-","-webkit-"],h=(a(33),function(e){var t=e.firstColor,a=e.secondColor,n=e.colorDegree;return o.a.createElement("div",{className:"Color"},o.a.createElement("div",{className:"Color__header"},o.a.createElement("p",null,"background Color")),o.a.createElement("div",null,o.a.createElement("p",{className:"Color__label"},"Color:",o.a.createElement("input",{type:"color",value:t,onChange:function(e){var t;d.dispatch((t=e.target.value,{type:i.SET_FIRST_COLOR,payload:t}))}}),o.a.createElement("input",{type:"color",value:a,onChange:function(e){var t;d.dispatch((t=e.target.value,{type:i.SET_SECOND_COLOR,payload:t}))}}))),o.a.createElement("div",null,o.a.createElement("p",{className:"Color__label"},"Degree:",o.a.createElement("select",{value:n,onChange:function(e){var t;d.dispatch((t=e.target.value,{type:i.SET_COLOR_DEGREE,payload:t}))}},L.map(function(e){return o.a.createElement("option",{key:e,value:e},e)})))))}),C=(a(35),function(e){var t=e.fontSizeValue,a=e.fontColorValue,n=e.fontFamilyValue;return o.a.createElement("div",{className:"Font"},o.a.createElement("div",{className:"Font__header"},o.a.createElement("p",null,"Font")),o.a.createElement("div",null,o.a.createElement("p",{className:"Font__label"},"Font:",o.a.createElement("select",{onChange:function(e){var t;d.dispatch((t=e.target.value,{type:i.SET_FONT_FAMILY,payload:t}))},value:n},S.map(function(e){return o.a.createElement("option",{key:e,value:e},e)})))),o.a.createElement("div",null,o.a.createElement("p",{className:"Font__label"},"Size:",o.a.createElement("select",{onChange:function(e){var t;d.dispatch((t=e.target.value,{type:i.SET_FONT_SIZE,payload:t}))},value:t},g.map(function(e){return o.a.createElement("option",{key:e,value:e},e)})))),o.a.createElement("div",null,o.a.createElement("p",{className:"Font__label"},"Color:",o.a.createElement("input",{type:"color",onChange:function(e){var t;d.dispatch((t=e.target.value,{type:i.SET_FONT_COLOR,payload:t}))},value:a}))))}),N=(a(37),function(e){var t=e.value;return o.a.createElement("div",{className:"Typing"},o.a.createElement("div",{className:"Typing__header"},o.a.createElement("p",null,"Text")),o.a.createElement("textarea",{type:"text",value:t,onChange:function(e){var t;d.dispatch((t=e.target.value,{type:i.SET_TYPING,payload:t}))}}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){d.dispatch({type:i.CLEAR_TYPING,payload:""})},className:"btn btn-outline-primary btn-sm Typing__clearBtn"},"Clear Text")))}),O=(a(39),function(){var e=d.getState(),t=e.fontSizeValue,a=e.color,n=e.colorDegree,l=e.typing,r=e.fontColor,c=e.fontFamily;return o.a.createElement("div",{className:"SideBarFooter"},o.a.createElement("button",{onClick:function(){d.dispatch(function(e,t,a,n,o,l,r){return{type:i.SAVE_DESIGN,payload:{color:e,colorDegree:t,fontFamily:a,fontSize:n,fontColor:o,typing:l,date:r,id:p()(),timestamp:(new Date).toString()}}}(a,n,c,t,r,l,function(){var e=new Date,t=e.getFullYear();return{month:"".concat(["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."][e.getMonth()]),day:function(){var t=e.getDate();return t<10?"0".concat(t):t}(),year:"".concat(t)}}()))},className:"btn btn-primary btn-sm mr-2"},"SAVE"),o.a.createElement("button",{onClick:function(){d.dispatch({type:i.RESET,payload:""})},className:"btn btn-outline-primary btn-sm"},"RESET"))}),b=function(){var e=d.getState(),t=e.fontSizeValue,a=e.color,n=e.colorDegree,l=e.typing,r=e.fontColor,c=e.fontFamily,i=e.colorLists;return o.a.createElement("div",null,o.a.createElement(y,{colorLists:i}),o.a.createElement(h,{firstColor:a[0],secondColor:a[1],colorDegree:n}),o.a.createElement(C,{fontSizeValue:t,fontColorValue:r,fontFamilyValue:c}),o.a.createElement(N,{value:l}),o.a.createElement(O,null))},I=(a(41),function(e){var t=e.colorList,a=e.isActive,n={backgroundImage:"linear-gradient(-".concat(t.colorDegree,"deg, ").concat(t.color[0],", ").concat(t.color[1],")")},l=function(){d.dispatch(function(e,t){return{type:i.ACTIVE_COLOR_LIST,payload:{colorList:e,colorId:t}}}(t,t.id))},r=function(e){var t;d.dispatch((t=e,{type:i.DELETE_DESIGN,payload:t}))};return o.a.createElement("div",{className:a?"ListItem ListItem__active":"ListItem",onClick:function(){return l(t.id)}},o.a.createElement("div",{className:"ListItem__left"},o.a.createElement("div",{className:"ListItem__date"},o.a.createElement("span",{className:"ListItem__date--month"},t.date.month),o.a.createElement("span",{className:"ListItem__date--day"},t.date.day)),o.a.createElement("p",{className:"ListItem__date--year"},"        ",t.date.year)),o.a.createElement("div",{className:"ListItem__right",style:n},o.a.createElement("span",{className:"ListItem__colorInfo"},"  ",t.color[0]," \u2192 ",t.color[1])),o.a.createElement("button",{onClick:function(){return r(t.id)},className:"ListItem__deleteBtn btn btn-light"},"Delete"))}),D=(a(43),function(e){var t=e.colorList,a={backgroundImage:"linear-gradient(-".concat(t.colorDegree,"deg, ").concat(t.color[0],", ").concat(t.color[1],")")},n={fontSize:"".concat(t.fontSize,"px"),fontFamily:"".concat(t.fontFamily),color:"".concat(t.fontColor)};return o.a.createElement("div",{className:"ListView"},o.a.createElement("div",{style:a,className:"ListView__top"},o.a.createElement("p",{style:n},t.typing)),o.a.createElement("div",{className:"ListView__bottom"},o.a.createElement("div",null,o.a.createElement("p",{className:"ListView__info--title"},"Background Code:"),T.map(function(e){return o.a.createElement("p",{key:e,className:"ListView__info--content"},"background-image: ",e,"linear-gradient(-",t.colorDegree,"deg, ",t.color[0],", ",t.color[1],")")}),o.a.createElement("p",{className:"ListView__info--content  mb-2"},"filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='",t.color[0],"', endColorstr='",t.color[1],"',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */")),o.a.createElement("div",null,o.a.createElement("p",{className:"ListView__info--title"},"Font Code:"),o.a.createElement("p",{className:"ListView__info--content"},"font-size: ",t.fontSize),o.a.createElement("p",{className:"ListView__info--content"},"        font-family: ",t.fontFamily),o.a.createElement("p",{className:"ListView__info--content"},"color: ",t.fontColor))))}),w=a(11),F=a.n(w),R=(a(45),function(){var e=d.getState(),t=e.colorLists,a=e.activeColorList,n=e.isModelOpen,l=function(){d.dispatch({type:i.DELETE_ALL,payload:""})};return o.a.createElement("div",{className:function(e){var t="ListModel ";return e?t+="active":t}(n)},o.a.createElement("div",{className:"ListModel__content"},o.a.createElement("div",{className:"ListModel__content--left"},t.map(function(e){return o.a.createElement(I,{colorList:e,key:e.id,isActive:e.isActive})}),0!==t.length?o.a.createElement("button",{onClick:function(){return l()},className:"btn btn-secondary btn-sm mt-2 deleteAllBtn"},"Delete All"):null),o.a.createElement("div",{className:"ListModel__content--right"},function(t){var a=e.colorLists;return 0===Object.keys(t).length||0===a.length?o.a.createElement("div",{className:"ListModel__empty"},o.a.createElement("img",{src:F.a,alt:"img",className:"ListModel__empty--img"}),o.a.createElement("p",null,"Please Click The Design On The Left To Generate CSS Code!"),o.a.createElement("div",{className:"ListModel__empty--author"},"Icons made by",o.a.createElement("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons"),"from",o.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"),"is licensed by",o.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC 3.0 BY"))):o.a.createElement(D,{colorList:t})}(a)),o.a.createElement("button",{onClick:function(){d.dispatch(v())},className:"ListModel__btn"},"X")))}),A=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(b,null),o.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=function(){return r.a.render(o.a.createElement(A,null),document.getElementById("root"))};"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),V(),d.subscribe(V)}],[[12,2,1]]]);
//# sourceMappingURL=main.06b54ea4.chunk.js.map