(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c0796de"],{5779:function(e,t,c){},"7a37":function(e,t,c){"use strict";var o=c("7a23"),a=Object(o["withScopeId"])("data-v-04051fb7");Object(o["pushScopeId"])("data-v-04051fb7");var n={class:"row"},r={class:"col"},i={key:0,class:"row"},l={class:"col"};Object(o["popScopeId"])();var d=a((function(e,t,c,d,s,b){var j=Object(o["resolveComponent"])("router-link"),O=Object(o["resolveComponent"])("SingleLine"),u=Object(o["resolveComponent"])("LinkList");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])(j,{to:"/new/"+e.data.word},{default:a((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.data.word),1)]})),_:1},8,["to"]),Object(o["createVNode"])("span",{class:"btn-toggle",onClick:t[1]||(t[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},"[show "+Object(o["toDisplayString"])(e.showSummary?"detail":"summary")+"] ",1)])]),e.showSummary?(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],{key:0},Object(o["renderList"])(e.data.meanings,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:t},[e.part_of_speech?(Object(o["openBlock"])(),Object(o["createBlock"])("div",i,[Object(o["createVNode"])("div",l,[Object(o["createTextVNode"])(" ["+Object(o["toDisplayString"])(e.part_of_speech)+"] ",1),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.definitions,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:t},[Object(o["createTextVNode"])(" ["+Object(o["toDisplayString"])(e.definition)+"] ",1)],64)})),128))])])):Object(o["createCommentVNode"])("",!0)],64)})),128)):(Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:1},[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.data.meanings,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:t},[Object(o["createVNode"])(O,{prefix:"[",suffix:"]",data:e.part_of_speech},null,8,["data"]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.definitions,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:t},[Object(o["createVNode"])(O,{prefix:"Definition: ",extra:"col-ps-1",data:e.definition},null,8,["data"]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.examples,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(O,{key:t,prefix:'"',suffix:'"',extra:"col-ps-2 example",data:e.example},null,8,["data"])})),128))],64)})),128)),Object(o["createVNode"])(u,{title:"Synonym",extra:"col-ps-1",data:e.synonyms},null,8,["data"]),Object(o["createVNode"])(u,{title:"Antonym",extra:"col-ps-1",data:e.antonyms},null,8,["data"])],64)})),128)),Object(o["createVNode"])(u,{title:"Family",data:e.data.families},null,8,["data"])],64))],64)})),s={key:0,class:"row"};function b(e,t,c,a,n,r){return e.data?(Object(o["openBlock"])(),Object(o["createBlock"])("div",s,[Object(o["createVNode"])("div",{class:["col",e.extra]},Object(o["toDisplayString"])(e.prefix+e.data+e.suffix),3)])):Object(o["createCommentVNode"])("",!0)}var j=Object(o["defineComponent"])({props:{data:String,prefix:{type:String,default:""},suffix:{type:String,default:""},extra:String}});j.render=b;var O=j,u={key:0,class:"row"},p=Object(o["createTextVNode"])(" | ");function f(e,t,c,a,n,r){var i=Object(o["resolveComponent"])("router-link");return e.data&&e.data.length?(Object(o["openBlock"])(),Object(o["createBlock"])("div",u,[Object(o["createVNode"])("div",{class:["col",e.extra]},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title)+": ",1),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.data,(function(t,c){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:c},[Object(o["createVNode"])(i,{to:"/new/"+t},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t),1)]})),_:2},1032,["to"]),c!=e.data.length-1?(Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:0},[p],64)):Object(o["createCommentVNode"])("",!0)],64)})),128))],2)])):Object(o["createCommentVNode"])("",!0)}var m=Object(o["defineComponent"])({props:{data:Object,title:String,extra:String}});m.render=f;var k=m,g=Object(o["defineComponent"])({components:{SingleLine:O,LinkList:k},props:{data:Object},methods:{toggle:function(){this.showSummary=!this.showSummary}},data:function(){return{showSummary:!0}}});c("d341");g.render=d,g.__scopeId="data-v-04051fb7";t["a"]=g},"93be":function(e,t,c){},bb44:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a=Object(o["withScopeId"])("data-v-52d41e8e");Object(o["pushScopeId"])("data-v-52d41e8e");var n={id:"review"},r={class:"row"},i={class:"col"},l={class:"review-ttl"},d=Object(o["createVNode"])("span",{class:"review-word"},"word(s) to be reviewed",-1),s=Object(o["createVNode"])("hr",null,null,-1),b=Object(o["createVNode"])("hr",null,null,-1),j={class:"row"},O={class:"col"},u={class:"row"},p={class:"col col-sm-i"};Object(o["popScopeId"])();var f,m=a((function(e,t,c,a,f,m){var k=Object(o["resolveComponent"])("Document"),g=Object(o["resolveComponent"])("Button"),v=Object(o["resolveComponent"])("Toast");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])("span",l,Object(o["toDisplayString"])(e.total),1),d])]),e.total?(Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:0},[s,Object(o["createVNode"])(k,{data:e.data},null,8,["data"]),b,Object(o["createVNode"])("div",j,[Object(o["createVNode"])("div",O,[Object(o["createVNode"])(g,{label:"Next",onClick:t[1]||(t[1]=function(t){return e.save("next")})}),Object(o["createVNode"])(g,{label:"Keep",class:"p-button-secondary",onClick:t[2]||(t[2]=function(t){return e.save("again")})}),Object(o["createVNode"])(g,{label:"Tomorrow",class:"p-button-secondary",onClick:t[3]||(t[3]=function(t){return e.save("tmr")})})])]),Object(o["createVNode"])("div",u,[Object(o["createVNode"])("div",p," Next: "+Object(o["toDisplayString"])(e.next)+" | Keep: "+Object(o["toDisplayString"])(e.keep)+" | Tomorrow: "+Object(o["toDisplayString"])(e.tmr),1)])],64)):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(v)],64)})),k=(c("d3b7"),c("c1df")),g=c.n(k),v=c("8049"),h=c("0242"),w=c("7a37"),y=Object(o["defineComponent"])({components:{Document:w["a"]},methods:{loadReview:function(e){var t=this;e&&this.showLoading(),Object(h["b"])().then((function(e){t.total=e.docs.length,t.total&&(t.data=e.docs[0].data(),t.nextFibonacci=Object(v["d"])(t.data.last_fibonacci),t.next=g()().add(t.nextFibonacci,"days").format("YYYY-MM-DD"),t.keep=g()().add(t.data.last_fibonacci,"days").format("YYYY-MM-DD"),t.tmr=g()().add(1,"days").format("YYYY-MM-DD"))})).catch((function(e){console.log(e),t.errorToast("Error while loading review.")})).finally((function(){e&&t.hideLoading()}))},save:function(e){var t=this;this.showLoading();var c=new Object;c.last_review=g()().format("YYYY-MM-DD"),"next"==e?(c.last_fibonacci=this.nextFibonacci,c.next_review=this.next):c.next_review="keep"==e?this.keep:this.tmr,Object(h["e"])(this.data.word,c).then((function(){t.loadReview(!1)})).catch((function(e){console.log(e),t.errorToast("Error while updating word.")})).finally((function(){t.hideLoading()}))},showLoading:function(){f=this.$loading.show({color:"#42b983"})},hideLoading:function(){f.hide()},errorToast:function(e){this.$toast.add({severity:"error",summary:"Error",detail:e,life:3e3})}},data:function(){return{total:0,data:{word:"",last_fibonacci:0},nextFibonacci:0,next:"",keep:"",tmr:""}},mounted:function(){this.loadReview(!0)}});c("ce02");y.render=m,y.__scopeId="data-v-52d41e8e";t["default"]=y},ce02:function(e,t,c){"use strict";c("5779")},d341:function(e,t,c){"use strict";c("93be")}}]);
//# sourceMappingURL=chunk-2c0796de.js.map