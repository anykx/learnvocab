(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb0604de"],{"7a37":function(e,t,c){"use strict";var a=c("7a23"),o=Object(a["withScopeId"])("data-v-3022f47c");Object(a["pushScopeId"])("data-v-3022f47c");var n={class:"row"},r={class:"col"},i={class:"btn-edit"},l=Object(a["createTextVNode"])("[edit]"),d={key:0,class:"row"},s={class:"col"};Object(a["popScopeId"])();var b=o((function(e,t,c,b,j,O){var u=Object(a["resolveComponent"])("router-link"),p=Object(a["resolveComponent"])("SingleLine"),f=Object(a["resolveComponent"])("LinkList");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(e.data.word),1),Object(a["createVNode"])("span",i,[Object(a["createVNode"])(u,{to:"/new/"+e.data.word},{default:o((function(){return[l]})),_:1},8,["to"])]),Object(a["createVNode"])("span",{class:"btn-toggle",onClick:t[1]||(t[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},[Object(a["createVNode"])("span",null,"[show "+Object(a["toDisplayString"])(e.showSummary?"detail":"summary")+"]",1)])])]),e.showSummary?(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],{key:0},Object(a["renderList"])(e.data.meanings,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[e.part_of_speech?(Object(a["openBlock"])(),Object(a["createBlock"])("div",d,[Object(a["createVNode"])("div",s,[Object(a["createTextVNode"])(" ["+Object(a["toDisplayString"])(e.part_of_speech)+"] ",1),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.definitions,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[Object(a["createTextVNode"])(" ["+Object(a["toDisplayString"])(e.definition)+"] ",1)],64)})),128))])])):Object(a["createCommentVNode"])("",!0)],64)})),128)):(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:1},[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.data.meanings,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[Object(a["createVNode"])(p,{prefix:"[",suffix:"]",data:e.part_of_speech},null,8,["data"]),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.definitions,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:t},[Object(a["createVNode"])(p,{prefix:"Definition: ",extra:"col-ps-1",data:e.definition},null,8,["data"]),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.examples,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:t,prefix:'"',suffix:'"',extra:"col-ps-2 example",data:e.example},null,8,["data"])})),128))],64)})),128)),Object(a["createVNode"])(f,{title:"Synonym",extra:"col-ps-1",data:e.synonyms},null,8,["data"]),Object(a["createVNode"])(f,{title:"Antonym",extra:"col-ps-1",data:e.antonyms},null,8,["data"])],64)})),128)),Object(a["createVNode"])(f,{title:"Family",data:e.data.families},null,8,["data"]),Object(a["createVNode"])(p,{prefix:"Remark: ",data:e.data.remark},null,8,["data"])],64))],64)})),j={key:0,class:"row"};function O(e,t,c,o,n,r){return e.data?(Object(a["openBlock"])(),Object(a["createBlock"])("div",j,[Object(a["createVNode"])("div",{class:["col",e.extra]},Object(a["toDisplayString"])(e.prefix+e.data+e.suffix),3)])):Object(a["createCommentVNode"])("",!0)}var u=Object(a["defineComponent"])({props:{data:String,prefix:{type:String,default:""},suffix:{type:String,default:""},extra:String}});u.render=O;var p=u,f={key:0,class:"row"},m=Object(a["createTextVNode"])(" | ");function k(e,t,c,o,n,r){var i=Object(a["resolveComponent"])("router-link");return e.data&&e.data.length?(Object(a["openBlock"])(),Object(a["createBlock"])("div",f,[Object(a["createVNode"])("div",{class:["col",e.extra]},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title)+": ",1),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(e.data,(function(t,c){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:c},[Object(a["createVNode"])(i,{to:"/new/"+t},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t),1)]})),_:2},1032,["to"]),c!=e.data.length-1?(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:0},[m],64)):Object(a["createCommentVNode"])("",!0)],64)})),128))],2)])):Object(a["createCommentVNode"])("",!0)}var g=Object(a["defineComponent"])({props:{data:Object,title:String,extra:String}});g.render=k;var v=g,h=Object(a["defineComponent"])({components:{SingleLine:p,LinkList:v},props:{data:Object},methods:{toggle:function(){this.showSummary=!this.showSummary}},data:function(){return{showSummary:!0}}});c("ac82");h.render=b,h.__scopeId="data-v-3022f47c";t["a"]=h},ac82:function(e,t,c){"use strict";c("d670")},bb44:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["withScopeId"])("data-v-a969edf4");Object(a["pushScopeId"])("data-v-a969edf4");var n={id:"review"},r={class:"row"},i={class:"col"},l={class:"review-ttl"},d=Object(a["createVNode"])("span",{class:"review-word"},"word(s) to be reviewed",-1),s=Object(a["createVNode"])("hr",null,null,-1),b=Object(a["createVNode"])("hr",null,null,-1),j={class:"row"},O={class:"col"},u={class:"row"},p={class:"col col-sm-i"};Object(a["popScopeId"])();var f,m=o((function(e,t,c,o,f,m){var k=Object(a["resolveComponent"])("Document"),g=Object(a["resolveComponent"])("Button"),v=Object(a["resolveComponent"])("Toast");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("span",l,Object(a["toDisplayString"])(e.total),1),d])]),e.total?(Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:0},[s,Object(a["createVNode"])(k,{data:e.data},null,8,["data"]),b,Object(a["createVNode"])("div",j,[Object(a["createVNode"])("div",O,[Object(a["createVNode"])(g,{label:"Next",onClick:t[1]||(t[1]=function(t){return e.save("next")})}),Object(a["createVNode"])(g,{label:"Keep",class:"p-button-secondary",onClick:t[2]||(t[2]=function(t){return e.save("again")})}),Object(a["createVNode"])(g,{label:"Tomorrow",class:"p-button-secondary",onClick:t[3]||(t[3]=function(t){return e.save("tmr")})})])]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("div",p," Next: "+Object(a["toDisplayString"])(e.next)+" | Keep: "+Object(a["toDisplayString"])(e.keep)+" | Tomorrow: "+Object(a["toDisplayString"])(e.tmr),1)])],64)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])(v)],64)})),k=(c("d3b7"),c("c1df")),g=c.n(k),v=c("8049"),h=c("0242"),w=c("7a37"),y=Object(a["defineComponent"])({components:{Document:w["a"]},methods:{loadReview:function(e){var t=this;e&&this.showLoading(),Object(h["b"])().then((function(e){t.total=e.docs.length,t.total&&(t.data=e.docs[0].data(),t.nextFibonacci=Object(v["d"])(t.data.last_fibonacci),t.next=g()().add(t.nextFibonacci,"days").format("YYYY-MM-DD"),t.keep=g()().add(t.data.last_fibonacci,"days").format("YYYY-MM-DD"),t.tmr=g()().add(1,"days").format("YYYY-MM-DD"))})).catch((function(e){console.log(e),t.errorToast("Error while loading review.")})).finally((function(){e&&t.hideLoading()}))},save:function(e){var t=this;this.showLoading();var c=new Object;c.last_review=g()().format("YYYY-MM-DD"),"next"==e?(c.last_fibonacci=this.nextFibonacci,c.next_review=this.next):c.next_review="keep"==e?this.keep:this.tmr,Object(h["e"])(this.data.word,c).then((function(){t.loadReview(!1)})).catch((function(e){console.log(e),t.errorToast("Error while updating word.")})).finally((function(){t.hideLoading()}))},showLoading:function(){f=this.$loading.show({color:"#198964"})},hideLoading:function(){f.hide()},errorToast:function(e){this.$toast.add({severity:"error",summary:"Error",detail:e,life:3e3})}},data:function(){return{total:0,data:{word:"",last_fibonacci:0},nextFibonacci:0,next:"",keep:"",tmr:""}},mounted:function(){this.loadReview(!0)}});c("f224");y.render=m,y.__scopeId="data-v-a969edf4";t["default"]=y},cda7:function(e,t,c){},d670:function(e,t,c){},f224:function(e,t,c){"use strict";c("cda7")}}]);
//# sourceMappingURL=chunk-eb0604de.js.map