(this.webpackJsonpclustrwebapp=this.webpackJsonpclustrwebapp||[]).push([[0],[,,,,,function(e,t,a){e.exports={wrapper:"Club_wrapper__3j25p",name:"Club_name__1zi_t",tags:"Club_tags__19gWS",tag:"Club_tag__tO-Kc",filtered:"Club_filtered__3N8sb",field:"Club_field__29Z_Y",link:"Club_link__4KzB4",matched:"Club_matched__3WM7_"}},function(e,t,a){e.exports={wrapper:"ClubInfo_wrapper__11oQn",name:"ClubInfo_name__2BI2V",description:"ClubInfo_description__BHxm1",joinBtn:"ClubInfo_joinBtn__3tAch",feedItem:"ClubInfo_feedItem__29jig",feedTitle:"ClubInfo_feedTitle__jafwE",feedField:"ClubInfo_feedField__2P83O"}},function(e,t,a){e.exports={wrapper:"CategoryDropdown_wrapper__yPZ0h",opener:"CategoryDropdown_opener__3hmRC",dropdown:"CategoryDropdown_dropdown__Dm7Qy",item:"CategoryDropdown_item__sEfY4",check:"CategoryDropdown_check__2ub36",selected:"CategoryDropdown_selected__2MtXO",label:"CategoryDropdown_label__6C0Hv"}},function(e,t,a){e.exports={wrapper:"ClubList_wrapper__11lia",list:"ClubList_list__1aukA",searchWrapper:"ClubList_searchWrapper__QfeVZ",info:"ClubList_info__pLVgg",backBtn:"ClubList_backBtn__3a_Yq",clubSelected:"ClubList_clubSelected__1_ad-"}},,,,,function(e,t,a){e.exports={button:"FilterButton_button__2h4Nl",selected:"FilterButton_selected__25z-t"}},,,function(e,t,a){e.exports={button:"Button_button__3MQk7"}},function(e,t,a){e.exports={search:"Search_search__31UIS"}},,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(24),a(12)),i=a(10),s=a(1),u=a(2),p=a(4),m=a(3),d=(a(25),a(18)),f=a(16),h=a.n(f);var b=function(e){var t=e.className,a=e.children,n=Object(d.a)(e,["className","children"]);return r.a.createElement("button",Object.assign({className:"".concat(h.a.button," ").concat(t)},n),a)},_=a(5),v=a.n(_);function g(e,t){if(!t)return e;var a=[];t.lastIndex=0;for(var n=null,c=0;n=t.exec(e);)a.push(e.slice(c,n.index)),a.push(r.a.createElement("span",{className:v.a.matched,key:n.index},n[0])),c=n.index+n[0].length;return a.push(e.slice(c)),a}var C=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.handleClick=function(){e.setState({open:!e.state.open})},e.handleLinkClick=function(e){e.stopPropagation()},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.color,n=e.tags,c=e.description,l=e.meetingTime,o=e.presidents,i=e.zoomLink,s=e.searchFilter,u=e.filters,p=this.state.open;return r.a.createElement("button",{className:v.a.wrapper,style:{backgroundColor:a},onClick:this.handleClick},r.a.createElement("h2",{className:v.a.name},g(t,s)),r.a.createElement("ul",{className:v.a.tags},n.map((function(e){return r.a.createElement("li",{className:"".concat(v.a.tag," ").concat(u.includes(e)?v.a.filtered:""),key:e},e)}))),p&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:v.a.field},g(c,s)),r.a.createElement("p",{className:v.a.field},"Time: ",r.a.createElement("strong",null,l)),r.a.createElement("p",{className:v.a.field},"President: ",g(o,s)),i&&r.a.createElement("p",{className:v.a.field},"Zoom link: ",r.a.createElement("a",{className:v.a.link,href:i,target:"_blank",rel:"noopener noreferrer",onClick:this.handleLinkClick},i.replace(/^https?:\/\//,"")))))}}]),a}(r.a.Component),E=a(6),y=a.n(E),k=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.description,n=e.joinable,c=e.meetingDay,l=e.meetingTime;return r.a.createElement("div",{className:y.a.wrapper},r.a.createElement("h1",{className:y.a.name},t),n&&r.a.createElement(b,{className:y.a.joinBtn},"Join"),r.a.createElement("p",{className:y.a.description},a),r.a.createElement("div",{className:y.a.feedItem},r.a.createElement("h2",{className:y.a.feedTitle},"Club Meetings"),r.a.createElement("p",{className:y.a.feedField},"Weekly, ",c),r.a.createElement("p",{className:y.a.feedField},"Time: ",l)))}}]),a}(r.a.Component),N={PINK:"#ffa789",ORANGE:"#f4b869",LIGHT_ORANGE:"#f4cb87",DARK_ORANGE:"#f0a35b",VERY_LIGHT_ORANGE:"#f7cd96",BLUE:"#A0B4C7",BROWN:"#806961"},O=a(13),j=a.n(O),w=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.onSelect(e.props.name)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.color,n=e.selected;return r.a.createElement("button",{className:"".concat(j.a.button," ").concat(n?j.a.selected:""),onClick:this.handleClick,style:{"--color":a}},t)}}]),a}(r.a.Component),S=a(17),I=a.n(S),A=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleInput=function(t){e.props.onChange(t.target.value)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{type:"search",value:this.props.search,placeholder:"Search clubs",className:I.a.search,onChange:this.handleInput})}}]),a}(r.a.Component),R=a(7),B=a.n(R),L=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.onSelect(e.props.category)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e.category,a=e.selected;return r.a.createElement("button",{className:"".concat(B.a.item," ").concat(a?B.a.selected:""),onClick:this.handleClick},r.a.createElement("span",{className:B.a.check},"\u2714"),r.a.createElement("span",{className:B.a.label},t))}}]),a}(r.a.Component),D=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).wrapperRef=null,e.state={open:!1},e.handleOpen=function(){e.setState({open:!0})},e.handleClose=function(t){e.wrapperRef.contains(t.target)||e.setState({open:!1})},e.setRef=function(t){e.wrapperRef=t},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleClose)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.categories,n=e.onSelect,c=this.state.open,l=a.filter((function(e){return Object(i.a)(e,2)[1]})).length;return r.a.createElement("div",{className:B.a.wrapper,ref:this.setRef},r.a.createElement("button",{className:B.a.opener,onClick:this.handleOpen},t," ",l>0&&"(".concat(l,")")," \u25be"),c&&r.a.createElement("div",{className:B.a.dropdown},a.map((function(e){var t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(L,{key:a,category:a,selected:c,onSelect:n})}))))}}]),a}(r.a.Component),T=a(8),x=a.n(T);var F=[{name:"Monday",color:N.PINK},{name:"Tuesday",color:N.PINK},{name:"Wednesday",color:N.PINK},{name:"Thursday",color:N.PINK},{name:"Friday",color:N.PINK},{name:"New",color:N.DARK_ORANGE},{name:"Returning",color:N.DARK_ORANGE}],G=["Service","STEM","Culture","Political","Social","Arts","Sports","Hobbies","Games","Entertainment"],K=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedClub:null,search:"",filters:[]},e.handleSelectClub=function(e){},e.handleBack=function(){e.setState({selectedClub:null})},e.handleSelectFilter=function(t){e.state.filters.includes(t)?e.setState({filters:e.state.filters.filter((function(e){return e!==t}))}):e.setState({filters:[t].concat(Object(o.a)(e.state.filters))})},e.handleSearch=function(t){e.setState({search:t})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.clubs,a=this.state,n=a.selectedClub,c=a.search,l=a.filters,o=t.find((function(e){return e.name===n})),i=c?new RegExp(c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"ig"):null,s=t.filter((function(e){return!(l.length>0&&l.some((function(t){return!e.tags.includes(t)})))&&!(i&&!i.test(e.name)&&!i.test(e.description)&&!i.test(e.presidents))}));return r.a.createElement("div",{className:"".concat(x.a.wrapper," ").concat(o?x.a.clubSelected:"")},r.a.createElement("div",{className:x.a.list},r.a.createElement("h1",null," Gunn Clubs "),r.a.createElement("div",{className:x.a.searchWrapper},r.a.createElement(A,{search:c,onChange:this.handleSearch}),r.a.createElement("div",null,r.a.createElement(D,{categories:G.map((function(e){return[e,l.includes(e)]})),onSelect:this.handleSelectFilter},"Categories")),r.a.createElement("div",{className:x.a.filters},"Filter by:",F.map((function(t){var a=t.name,n=t.color;return r.a.createElement(w,{key:a,name:a,color:n,selected:l.includes(a),onSelect:e.handleSelectFilter})})))),s.map((function(t){var a=t.name,n=t.description,c=t.day,o=t.time,s=t.color,u=t.tags,p=t.presidents,m=t.zoomLink;return r.a.createElement(C,{key:a,name:a,color:s,tags:u,description:n,presidents:p,zoomLink:m,meetingDay:c,meetingTime:o,searchFilter:i,filters:l,onSelect:e.handleSelectClub})}))),o&&r.a.createElement("div",{className:x.a.info},r.a.createElement(b,{className:x.a.backBtn,onClick:this.handleBack},"< Back"),r.a.createElement(k,{name:o.name,description:o.description,joinable:!1,meetingDay:o.day,meetingTime:o.time})))}}]),a}(r.a.Component),P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={clubs:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/Clustr-Web-App/gunn-clubs-2020-21.json").then((function(e){return e.json()})).then((function(t){for(var a=Object.entries(t).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1],r=n.new,c=n.desc,l=n.day,s=n.time,u=n.tier,p=n.president,m=n.link,d=l.split(", ");return{name:a,description:c,day:l,time:s,tags:[].concat(Object(o.a)(d),["Tier ".concat(u),r?"New":"Returning"]),presidents:p,zoomLink:m}})),n=0;n<a.length;n++)n%4===1?a[n].color=N.ORANGE:n%4===2?a[n].color=N.PINK:n%4===3?a[n].color=N.BLUE:n%4===0&&(a[n].color=N.VERY_LIGHT_ORANGE);e.setState({clubs:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,{clubs:this.state.clubs}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.2953a1a4.chunk.js.map