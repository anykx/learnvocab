(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7544df79"],{"00cf":function(e,t,c){"use strict";c("a7fc")},"107c":function(e,t,c){var a=c("d039");e.exports=a((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,c){var a=c("c6b6"),r=c("9263");e.exports=function(e,t){var c=e.exec;if("function"===typeof c){var n=c.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"1a33":function(e,t,c){"use strict";c.r(t);c("ac1f"),c("841c");var a=c("7a23"),r=Object(a["withScopeId"])("data-v-7a4b5140");Object(a["pushScopeId"])("data-v-7a4b5140");var n={id:"list"},o={class:"row"},i={class:"col search-row"},l={class:"p-input-icon-left me-2"},s=Object(a["createVNode"])("i",{class:"pi pi-search"},null,-1),d={class:"row last20-row"},u={class:"col"},b=Object(a["createTextVNode"])("Today"),p=Object(a["createTextVNode"])(" | "),f=Object(a["createTextVNode"])("Yesterday"),O=Object(a["createTextVNode"])(" | "),j=Object(a["createTextVNode"])("Last 20 saved"),h=Object(a["createTextVNode"])(" | "),g={key:0},v=Object(a["createVNode"])("hr",null,null,-1),x={class:"row"},m={class:"col col-sm-i"},y=Object(a["createVNode"])("hr",{class:"hr-dashed"},null,-1);Object(a["popScopeId"])();var k,N=r((function(e,t,c,k,N,V){var B=Object(a["resolveComponent"])("Word"),w=Object(a["resolveComponent"])("Button"),S=Object(a["resolveComponent"])("router-link"),T=Object(a["resolveComponent"])("Document"),C=Object(a["resolveComponent"])("Toast");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("span",l,[s,Object(a["createVNode"])(B,{modelValue:e.searchText,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchText=t}),onKeydown:Object(a["withKeys"])(e.search,["enter"]),placeholder:"Search",class:"search-input"},null,8,["modelValue","onKeydown"])]),Object(a["createVNode"])(w,{label:"Search",class:"p-button-secondary",onClick:e.search},null,8,["onClick"])])]),Object(a["createVNode"])("div",d,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])(S,{to:"/list/today"},{default:r((function(){return[b]})),_:1}),p,Object(a["createVNode"])(S,{to:"/list/ytd"},{default:r((function(){return[f]})),_:1}),O,Object(a["createVNode"])(S,{to:"/list/last20"},{default:r((function(){return[j]})),_:1}),h,(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(26,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[Object(a["createVNode"])(S,{to:"/list/alphabet/"+e.alphabet(t)},{default:r((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.alphabet(t)),1)]})),_:2},1032,["to"]),26!=t?(Object(a["openBlock"])(),Object(a["createBlock"])("span",g," | ")):Object(a["createCommentVNode"])("",!0)],64)})),64))])]),v,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.filterData,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[Object(a["createVNode"])(T,{data:e},null,8,["data"]),Object(a["createVNode"])("div",x,[Object(a["createVNode"])("div",m,[Object(a["createTextVNode"])(" save: "+Object(a["toDisplayString"])(e.save_date+" "+e.save_time)+" | next: "+Object(a["toDisplayString"])(e.next_review)+" ",1),e.last_review?(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:0},[Object(a["createTextVNode"])(" | last: "+Object(a["toDisplayString"])(e.last_review),1)],64)):Object(a["createCommentVNode"])("",!0)])]),y],64)})),128))]),Object(a["createVNode"])(C)],64)})),V=(c("caad"),c("d3b7"),c("d81d"),c("4de4"),c("2532"),c("2ca0"),c("0242")),B=c("2e4c"),w=c("7a37"),S=Object(a["defineComponent"])({components:{Word:B["a"],Document:w["a"]},methods:{loadList:function(e){var t=this;this.showLoading();var c=e.type,a=e.text;c||(c="today"),"search"==c&&a!=this.searchText&&(this.searchText=a),(["today","ytd","last20"].includes(c)||["search","alphabet"].includes(c)&&a)&&(""!=this.lastType&&(c==this.lastType||["search","alphabet"].includes(c)&&["search","alphabet"].includes(this.lastType))?(this.setFilterData(c,a),this.hideLoading()):(Object(V["a"])(c).then((function(e){t.data=e.docs.map((function(e){return e.data()})),t.setFilterData(c,a)})).catch((function(e){console.log(e),t.errorToast("Error while loading list.")})).finally((function(){t.hideLoading()})),this.lastType=c))},alphabet:function(e){return String.fromCharCode(e+64)},search:function(){this.searchText&&this.$router.push("/list/search/"+this.searchText)},setFilterData:function(e,t){["today","ytd","last20"].includes(e)?this.filterData=this.data:"search"==e?this.filterData=this.data.filter((function(e){return e.word.toLowerCase().includes(t.toLowerCase())})):"alphabet"==e&&(this.filterData=this.data.filter((function(e){return e.word.toLowerCase().startsWith(t.toLowerCase())})))},showLoading:function(){k=this.$loading.show({color:"#198964"})},hideLoading:function(){k.hide()},errorToast:function(e){this.$toast.add({severity:"error",summary:"Error",detail:e,life:3e3})}},data:function(){return{data:[],filterData:[],lastType:"",searchText:""}},mounted:function(){this.loadList(this.$route.params)},beforeRouteUpdate:function(e){this.loadList(e.params)}});c("b3aa");S.render=N,S.__scopeId="data-v-7a4b5140";t["default"]=S},2532:function(e,t,c){"use strict";var a=c("23e7"),r=c("5a34"),n=c("1d80"),o=c("577e"),i=c("ab13");a({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~o(n(this)).indexOf(o(r(e)),arguments.length>1?arguments[1]:void 0)}})},"2ca0":function(e,t,c){"use strict";var a=c("23e7"),r=c("06cf").f,n=c("50c4"),o=c("577e"),i=c("5a34"),l=c("1d80"),s=c("ab13"),d=c("c430"),u="".startsWith,b=Math.min,p=s("startsWith"),f=!d&&!p&&!!function(){var e=r(String.prototype,"startsWith");return e&&!e.writable}();a({target:"String",proto:!0,forced:!f&&!p},{startsWith:function(e){var t=o(l(this));i(e);var c=n(b(arguments.length>1?arguments[1]:void 0,t.length)),a=o(e);return u?u.call(t,a,c):t.slice(c,c+a.length)===a}})},"44e7":function(e,t,c){var a=c("861d"),r=c("c6b6"),n=c("b622"),o=n("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},"4de4":function(e,t,c){"use strict";var a=c("23e7"),r=c("b727").filter,n=c("1dde"),o=n("filter");a({target:"Array",proto:!0,forced:!o},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,c){var a=c("44e7");e.exports=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},"7a37":function(e,t,c){"use strict";var a=c("7a23"),r=Object(a["withScopeId"])("data-v-cc5c485a");Object(a["pushScopeId"])("data-v-cc5c485a");var n={class:"row"},o={class:"col"},i=Object(a["createTextVNode"])("[edit]"),l={key:0,class:"row"},s={class:"col"};Object(a["popScopeId"])();var d=r((function(e,t,c,d,u,b){var p=Object(a["resolveComponent"])("router-link"),f=Object(a["resolveComponent"])("SingleLine"),O=Object(a["resolveComponent"])("LinkList");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",o,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.data.word),1),Object(a["createVNode"])(p,{to:"/new/"+e.data.word,class:"btn-edit"},{default:r((function(){return[i]})),_:1},8,["to"]),Object(a["createVNode"])("span",{class:"btn-toggle",onClick:t[1]||(t[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},"[show "+Object(a["toDisplayString"])(e.showSummary?"detail":"summary")+"] ",1)])]),e.showSummary?(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],{key:0},Object(a["renderList"])(e.data.meanings,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[e.part_of_speech?(Object(a["openBlock"])(),Object(a["createBlock"])("div",l,[Object(a["createVNode"])("div",s,[Object(a["createTextVNode"])(" ["+Object(a["toDisplayString"])(e.part_of_speech)+"] ",1),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.definitions,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[Object(a["createTextVNode"])(" ["+Object(a["toDisplayString"])(e.definition)+"] ",1)],64)})),128))])])):Object(a["createCommentVNode"])("",!0)],64)})),128)):(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:1},[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.data.meanings,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[Object(a["createVNode"])(f,{prefix:"[",suffix:"]",data:e.part_of_speech},null,8,["data"]),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.definitions,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[Object(a["createVNode"])(f,{prefix:"Definition: ",extra:"col-ps-1",data:e.definition},null,8,["data"]),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.examples,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:t,prefix:'"',suffix:'"',extra:"col-ps-2 example",data:e.example},null,8,["data"])})),128))],64)})),128)),Object(a["createVNode"])(O,{title:"Synonym",extra:"col-ps-1",data:e.synonyms},null,8,["data"]),Object(a["createVNode"])(O,{title:"Antonym",extra:"col-ps-1",data:e.antonyms},null,8,["data"])],64)})),128)),Object(a["createVNode"])(O,{title:"Family",data:e.data.families},null,8,["data"]),Object(a["createVNode"])(f,{prefix:"Remark: ",data:e.data.remark},null,8,["data"])],64))],64)})),u={key:0,class:"row"};function b(e,t,c,r,n,o){return e.data?(Object(a["openBlock"])(),Object(a["createBlock"])("div",u,[Object(a["createVNode"])("div",{class:["col",e.extra]},Object(a["toDisplayString"])(e.prefix+e.data+e.suffix),3)])):Object(a["createCommentVNode"])("",!0)}var p=Object(a["defineComponent"])({props:{data:String,prefix:{type:String,default:""},suffix:{type:String,default:""},extra:String}});p.render=b;var f=p,O={key:0,class:"row"},j=Object(a["createTextVNode"])(" | ");function h(e,t,c,r,n,o){var i=Object(a["resolveComponent"])("router-link");return e.data&&e.data.length?(Object(a["openBlock"])(),Object(a["createBlock"])("div",O,[Object(a["createVNode"])("div",{class:["col",e.extra]},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title)+": ",1),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.data,(function(t,c){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:c},[Object(a["createVNode"])(i,{to:"/new/"+t},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t),1)]})),_:2},1032,["to"]),c!=e.data.length-1?(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:0},[j],64)):Object(a["createCommentVNode"])("",!0)],64)})),128))],2)])):Object(a["createCommentVNode"])("",!0)}var g=Object(a["defineComponent"])({props:{data:Object,title:String,extra:String}});g.render=h;var v=g,x=Object(a["defineComponent"])({components:{SingleLine:f,LinkList:v},props:{data:Object},methods:{toggle:function(){this.showSummary=!this.showSummary}},data:function(){return{showSummary:!0}}});c("00cf");x.render=d,x.__scopeId="data-v-cc5c485a";t["a"]=x},8365:function(e,t,c){},"841c":function(e,t,c){"use strict";var a=c("d784"),r=c("825a"),n=c("1d80"),o=c("129f"),i=c("577e"),l=c("14c3");a("search",(function(e,t,c){return[function(t){var c=n(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,c):new RegExp(t)[e](i(c))},function(e){var a=r(this),n=i(e),s=c(t,a,n);if(s.done)return s.value;var d=a.lastIndex;o(d,0)||(a.lastIndex=0);var u=l(a,n);return o(a.lastIndex,d)||(a.lastIndex=d),null===u?-1:u.index}]}))},9263:function(e,t,c){"use strict";var a=c("577e"),r=c("ad6d"),n=c("9f7f"),o=c("5692"),i=c("7c73"),l=c("69f3").get,s=c("fce3"),d=c("107c"),u=RegExp.prototype.exec,b=o("native-string-replace",String.prototype.replace),p=u,f=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),O=n.UNSUPPORTED_Y||n.BROKEN_CARET,j=void 0!==/()??/.exec("")[1],h=f||j||O||s||d;h&&(p=function(e){var t,c,n,o,s,d,h,g=this,v=l(g),x=a(e),m=v.raw;if(m)return m.lastIndex=g.lastIndex,t=p.call(m,x),g.lastIndex=m.lastIndex,t;var y=v.groups,k=O&&g.sticky,N=r.call(g),V=g.source,B=0,w=x;if(k&&(N=N.replace("y",""),-1===N.indexOf("g")&&(N+="g"),w=x.slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&"\n"!==x.charAt(g.lastIndex-1))&&(V="(?: "+V+")",w=" "+w,B++),c=new RegExp("^(?:"+V+")",N)),j&&(c=new RegExp("^"+V+"$(?!\\s)",N)),f&&(n=g.lastIndex),o=u.call(k?c:g,w),k?o?(o.input=o.input.slice(B),o[0]=o[0].slice(B),o.index=g.lastIndex,g.lastIndex+=o[0].length):g.lastIndex=0:f&&o&&(g.lastIndex=g.global?o.index+o[0].length:n),j&&o&&o.length>1&&b.call(o[0],c,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o&&y)for(o.groups=d=i(null),s=0;s<y.length;s++)h=y[s],d[h[0]]=o[h[1]];return o}),e.exports=p},"9f7f":function(e,t,c){var a=c("d039"),r=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a7fc:function(e,t,c){},ab13:function(e,t,c){var a=c("b622"),r=a("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[r]=!1,"/./"[e](t)}catch(a){}}return!1}},ac1f:function(e,t,c){"use strict";var a=c("23e7"),r=c("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,c){"use strict";var a=c("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b3aa:function(e,t,c){"use strict";c("8365")},caad:function(e,t,c){"use strict";var a=c("23e7"),r=c("4d64").includes,n=c("44d2");a({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},d784:function(e,t,c){"use strict";c("ac1f");var a=c("6eeb"),r=c("9263"),n=c("d039"),o=c("b622"),i=c("9112"),l=o("species"),s=RegExp.prototype;e.exports=function(e,t,c,d){var u=o(e),b=!n((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),p=b&&!n((function(){var t=!1,c=/a/;return"split"===e&&(c={},c.constructor={},c.constructor[l]=function(){return c},c.flags="",c[u]=/./[u]),c.exec=function(){return t=!0,null},c[u](""),!t}));if(!b||!p||c){var f=/./[u],O=t(u,""[e],(function(e,t,c,a,n){var o=t.exec;return o===r||o===s.exec?b&&!n?{done:!0,value:f.call(t,c,a)}:{done:!0,value:e.call(c,t,a)}:{done:!1}}));a(String.prototype,e,O[0]),a(s,u,O[1])}d&&i(s[u],"sham",!0)}},d81d:function(e,t,c){"use strict";var a=c("23e7"),r=c("b727").map,n=c("1dde"),o=n("map");a({target:"Array",proto:!0,forced:!o},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},fce3:function(e,t,c){var a=c("d039");e.exports=a((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-7544df79.js.map