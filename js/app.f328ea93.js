(function(e){function t(t){for(var c,a,i=t[0],s=t[1],l=t[2],u=0,b=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"164a":function(e,t,n){},"233c":function(e,t,n){"use strict";n("252e")},"252e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=(n("ac1f"),n("841c"),{class:"wrapper"}),o={class:"wrapper-content"},a={class:"container"},i={class:"navBar"},s={class:"nav__icons"},l=Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Object(c["e"])("rect",{x:"3",y:"3",width:"7",height:"7"}),Object(c["e"])("rect",{x:"14",y:"3",width:"7",height:"7"}),Object(c["e"])("rect",{x:"14",y:"14",width:"7",height:"7"}),Object(c["e"])("rect",{x:"3",y:"14",width:"7",height:"7"})],-1),d=Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Object(c["e"])("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),Object(c["e"])("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),Object(c["e"])("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),Object(c["e"])("line",{x1:"3",y1:"6",x2:"3",y2:"6"}),Object(c["e"])("line",{x1:"3",y1:"12",x2:"3",y2:"12"}),Object(c["e"])("line",{x1:"3",y1:"18",x2:"3",y2:"18"})],-1);function u(e,t,n,u,b,j){var p=Object(c["j"])("search"),O=Object(c["j"])("notes"),h=Object(c["j"])("message"),f=Object(c["j"])("newNote");return Object(c["f"])(),Object(c["c"])("div",r,[Object(c["e"])("div",o,[Object(c["e"])("section",null,[Object(c["e"])("div",a,[Object(c["e"])("h1",null,Object(c["k"])(b.title),1),Object(c["e"])("div",i,[Object(c["e"])(p,{value:b.search,placeholder:"Поиск заметки",onSearch:t[1]||(t[1]=function(e){return b.search=e})},null,8,["value"]),Object(c["e"])("div",s,[Object(c["e"])("span",{class:["nav-icon",{active:b.grid}],onClick:t[2]||(t[2]=function(e){return b.grid=!0})},[l],2),Object(c["e"])("span",{class:["nav-icon",{active:!b.grid}],onClick:t[3]||(t[3]=function(e){return b.grid=!1})},[d],2)])]),Object(c["e"])(O,{notes:j.getFilteredNotes,grid:b.grid,onRemove:j.removeNote},null,8,["notes","grid","onRemove"]),b.message?(Object(c["f"])(),Object(c["c"])(h,{key:0,message:b.message},null,8,["message"])):Object(c["d"])("",!0),Object(c["e"])(f,{note:b.note,onAddNote:j.addNote},null,8,["note","onAddNote"])])])])])}n("498a"),n("4de4"),n("caad"),n("2532"),n("a434");var b=Object(c["n"])("data-v-40da8b91");Object(c["h"])("data-v-40da8b91");var j={class:"message"},p=Object(c["e"])("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 286.054 286.054",style:{"enable-background":"new 0 0 286.054 286.054"},"xml:space":"preserve"},[Object(c["e"])("g",null,[Object(c["e"])("path",{style:{fill:"#E2574C"},d:"M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027\r\n\t\tc78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236\r\n\t\tc-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209\r\n\t\tS207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972\r\n\t\tc9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723\r\n\t\tc-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843\r\n\t\tC160.878,195.732,152.878,187.723,143.036,187.723z"})])],-1);Object(c["g"])();var O=b((function(e,t,n,r,o,a){return Object(c["f"])(),Object(c["c"])("div",j,[p,Object(c["e"])("p",null,Object(c["k"])(n.message),1)])})),h={props:{message:{type:String,required:!0}}};n("59d5");h.render=O,h.__scopeId="data-v-40da8b91";var f=h,v=Object(c["n"])("data-v-5f41b98c");Object(c["h"])("data-v-5f41b98c");var g={class:"new_note"},w=Object(c["e"])("label",{for:"title"},"Заголовок заметки",-1),y=Object(c["e"])("label",{for:"text"},"Текст заметки",-1),m={class:"notes-nav"};Object(c["g"])();var x=v((function(e,t,n,r,o,a){return Object(c["f"])(),Object(c["c"])("div",g,[w,Object(c["m"])(Object(c["e"])("input",{type:"text",id:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.note.title=e}),placeholder:"Введите заголовок заметки"},null,512),[[c["l"],n.note.title]]),y,Object(c["m"])(Object(c["e"])("textarea",{id:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.note.desc=e}),placeholder:"Введите текст заметки"},null,512),[[c["l"],n.note.desc]]),Object(c["e"])("div",m,[Object(c["e"])("button",{type:"submit",class:"btn btnPrimary",onClick:t[3]||(t[3]=function(){return a.addNote&&a.addNote.apply(a,arguments)})},"Добавить заметку")])])})),k={props:{note:{type:Object,require:!0},grid:{type:Boolean,require:!0}},methods:{addNote:function(){this.$emit("addNote",this.note)}}};n("79b6");k.render=x,k.__scopeId="data-v-5f41b98c";var _=k,C=Object(c["n"])("data-v-8c2cd8ba");Object(c["h"])("data-v-8c2cd8ba");var N={class:"notes"},S={class:"note__header"},D={class:"note__body"},L={class:"note__footer"};Object(c["g"])();var M=C((function(e,t,n,r,o,a){return Object(c["f"])(),Object(c["c"])("div",N,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(n.notes,(function(e,t){return Object(c["f"])(),Object(c["c"])("div",{class:["note",{list:!n.grid}],key:t},[Object(c["e"])("div",S,[Object(c["e"])("h3",null,Object(c["k"])(e.title),1),Object(c["e"])("p",{class:"note__times",onClick:function(e){return a.removeNote(t)}},"x",8,["onClick"])]),Object(c["e"])("div",D,[Object(c["e"])("p",null,Object(c["k"])(e.desc),1)]),Object(c["e"])("div",L,[Object(c["e"])("span",null,Object(c["k"])(e.date),1)])],2)})),128))])})),P={props:{notes:{type:Array,required:!0},grid:{type:Boolean,required:!0}},methods:{removeNote:function(e){this.$emit("remove",e)}}};n("8aab");P.render=M,P.__scopeId="data-v-8c2cd8ba";var B=P,q=Object(c["n"])("data-v-4b8dee4c");Object(c["h"])("data-v-4b8dee4c");var z={class:"wrapper__search"},I=Object(c["e"])("div",{class:"search"},[Object(c["e"])("div",{class:"search-icon"},[Object(c["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-search"},[Object(c["e"])("circle",{cx:"11",cy:"11",r:"8"}),Object(c["e"])("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})])])],-1);Object(c["g"])();var V=q((function(e,t,n,r,o,a){return Object(c["f"])(),Object(c["c"])("div",z,[I,Object(c["m"])(Object(c["e"])("input",{type:"text",placeholder:n.placeholder,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.search=e})},null,8,["placeholder"]),[[c["l"],o.search]])])})),A={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Поиск"}},data:function(){return{search:this.value}},watch:{search:function(e){this.$emit("search",e)}}};n("233c");A.render=V,A.__scopeId="data-v-4b8dee4c";var U=A,$={data:function(){return{title:"Заметки",message:null,search:"",grid:!0,note:{title:"",desc:""},notes:[{title:"Первая заметка",desc:"Описание первой заметки",date:new Date(Date.now()).toLocaleString()},{title:"Вторая заметка",desc:"Описание второй заметки",date:new Date(Date.now()).toLocaleString()},{title:"Третья заметка",desc:"Описание третьей заметки",date:new Date(Date.now()).toLocaleString()}]}},computed:{getFilteredNotes:function(){var e=this.notes,t=this.search;return t?(t=t.trim().toLowerCase(),e.filter((function(e){return e.title.toLowerCase().includes(t)||e.desc.toLowerCase().includes(t)}))):e}},methods:{addNote:function(){var e=this.note,t=e.title,n=e.desc;e.date;if(""===t)return this.message="Не заполнен заголовок или текст заметки.",!1;this.notes.push({title:t,desc:n,date:new Date(Date.now()).toLocaleString()}),this.note.title="",this.note.desc="",this.message=""},removeNote:function(e){this.notes.splice(e,1)}},components:{message:f,notes:B,newNote:_,search:U}};n("8c01");$.render=u;var F=$;n("c1c3");Object(c["b"])(F).mount("#app")},"59d5":function(e,t,n){"use strict";n("a882")},"79b6":function(e,t,n){"use strict";n("99ec")},"8aab":function(e,t,n){"use strict";n("f281")},"8c01":function(e,t,n){"use strict";n("164a")},"99ec":function(e,t,n){},a882:function(e,t,n){},c1c3:function(e,t,n){},f281:function(e,t,n){}});