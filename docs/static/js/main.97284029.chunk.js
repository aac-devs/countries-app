(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{83:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),i=n.n(c),l=(n(83),n(147)),r=n(18),o=n(9),s=n(121),d=n(14),u=n(71),j=n(149),b=n(125),p=n(129),x=n(130),h=n(131),m=n(126),g=n(127),f=n(128),O=n(132),v=n(39),N=Object(s.a)((function(e){return{grow:{flexGrow:1},bar:{backgroundColor:"#1a237e",top:0},menuButton:{marginRight:e.spacing(2)},title:Object(v.a)({display:"none",textDecoration:"none"},e.breakpoints.up("sm"),{display:"block"}),titleDesktop:Object(v.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),link:{textDecoration:"none",color:"inherit"},sectionMobile:Object(v.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),C=n(2),y=function(){var e=N(),t=Object(a.useState)(null),n=Object(d.a)(t,2),c=n[0],i=n[1],l=Boolean(c),o=function(e){i(null)},s="primary-search-account-menu-mobile",v=Object(C.jsxs)(u.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:s,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){return o()},children:[Object(C.jsx)(j.a,{onClick:function(){return o()},children:Object(C.jsx)(r.b,{to:"/",className:e.link,children:Object(C.jsx)(b.a,{color:"inherit",children:Object(C.jsx)(m.a,{})})})}),Object(C.jsx)(j.a,{onClick:function(){return o()},children:Object(C.jsx)(r.b,{to:"/countries",className:e.link,children:Object(C.jsx)(b.a,{color:"inherit",children:Object(C.jsx)(g.a,{})})})}),Object(C.jsx)(j.a,{onClick:function(){return o()},children:Object(C.jsx)(r.b,{to:"/stats",className:e.link,children:Object(C.jsx)(b.a,{color:"inherit",children:Object(C.jsx)(f.a,{})})})})]});return Object(C.jsxs)("div",{children:[Object(C.jsx)(p.a,{position:"fixed",className:e.bar,children:Object(C.jsxs)(x.a,{children:[Object(C.jsx)(h.a,{className:e.title,variant:"h5",noWrap:!0,children:"aac-devs"}),Object(C.jsx)("div",{className:e.grow}),Object(C.jsx)(b.a,{color:"inherit",className:e.titleDesktop,children:Object(C.jsx)(r.b,{to:"/",className:e.link,children:Object(C.jsx)(m.a,{})})}),Object(C.jsx)(b.a,{color:"inherit",className:e.titleDesktop,children:Object(C.jsx)(r.b,{to:"/countries",className:e.link,children:Object(C.jsx)(g.a,{})})}),Object(C.jsx)(b.a,{color:"inherit",className:e.titleDesktop,children:Object(C.jsx)(r.b,{to:"/stats",className:e.link,children:Object(C.jsx)(f.a,{})})}),Object(C.jsx)("div",{className:e.sectionMobile,children:Object(C.jsx)(b.a,{"aria-label":"show more","aria-controls":s,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"inherit",children:Object(C.jsx)(O.a,{})})})]})}),v]})},w=n(96),S=n(133),k=n(150),W=n(148),L=n(134),I=n(135),A=n(136),P=n(137),R=n(138),D=n(139),E=n(152),z=Object(s.a)((function(){return{link:{textDecoration:"none",color:"inherit"},root:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",padding:"16px",opacity:"0.7"},paper:{height:"calc(100vh - 128px)",maxWidth:"1024px",minWidth:"1024px",padding:"16px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"},head:{display:"flex",justifyContent:"flex-start",alignItems:"stretch"},body:{marginTop:"16px",flexGrow:1,overflowY:"hidden",border:"1px solid #eee",borderRadius:"5px"},cellSize:{minWidth:"175px",width:"175px",padding:"16px",fontSize:"18px"},cellPadding:{padding:"16px"},card:{heigh:"400px",maxHeight:"400px",width:"400px",maxWidth:"400px",marginRight:"16px",border:"1px solid #eee"},headBody:{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},name:{},button:{alignSelf:"flex-end"},formControl:{minWidth:"350px",maxWidth:"350px",width:"350px",alignSelf:"flex-end"},title:{margin:"0 auto",marginBottom:"8px"},tableContainer:{height:"100%"},cellInfo:{display:"flex",justifyContent:"space-between",alignItems:"center"},cellRight:{display:"flex",alignItems:"center",cursor:"pointer"},cellAvatar:{marginRight:"16px"},row:{minWidth:"386px",maxWidth:"386px",width:"386px"}}})),B=["World","Africa","Americas","Asia","Europe","Oceania","Polar"],G=z,F=n(44),T=n.n(F),M=n(57),J=function(e,t,n){var a=[],c={};return Object.keys(t).forEach((function(e){a.push(e),t[e].forEach((function(e){a.push(e)}))})),c.World={more:void 0,less:void 0},a.forEach((function(e){c[e]={more:void 0,less:void 0}})),e.forEach((function(e){e[n]&&(c.World.more?c.World.more[n]<e[n]&&(c.World.more=e):c.World.more=e,e.region&&(c[e.region].more?c[e.region].more[n]<e[n]&&(c[e.region].more=e):c[e.region].more=e),e.subregion&&(c[e.subregion].more?c[e.subregion].more[n]<e[n]&&(c[e.subregion].more=e):c[e.subregion].more=e),c.World.less?c.World.less[n]>e[n]&&(c.World.less=e):c.World.less=e,e.region&&(c[e.region].less?c[e.region].less[n]>e[n]&&(c[e.region].less=e):c[e.region].less=e),e.subregion&&(c[e.subregion].less?c[e.subregion].less[n]>e[n]&&(c[e.subregion].less=e):c[e.subregion].less=e))})),c},H=Object(a.createContext)(),U={region:"World",subregion:"All",language:"None",orderBy:"None",orderSense:"up-to-down"},K=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(d.a)(n,2),i=c[0],l=c[1],r=Object(a.useState)({}),o=Object(d.a)(r,2),s=o[0],u=o[1],j=Object(a.useState)(U),b=Object(d.a)(j,2),p=b[0],x=b[1],h=Object(a.useState)({}),m=Object(d.a)(h,2),g=m[0],f=m[1],O=Object(a.useState)(""),v=Object(d.a)(O,2),N=v[0],y=v[1],w=function(){var e=Object(M.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){w()}),[]),Object(a.useEffect)((function(){if(250===i.length){var e=function(e){var t={};return e.forEach((function(e){t[e.region]?t[e.region].includes(e.subregion)||t[e.region].push(e.subregion):""!==e.region&&(t[e.region]=[])})),t}(i);u(e)}}),[i]),Object(a.useEffect)((function(){if("{}"!==JSON.stringify(s)){var e=J(i,s,"area"),t=J(i,s,"population");f({surface:e,population:t})}}),[s]);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(H.Provider,{value:{countries:i,regions:s,mutations:p,setMutations:x,resetMutations:function(){x(U)},search:N,setSearch:y,stats:g},children:t})})};K.defaultProps={children:null};var Y=H,_=function(){var e=G(),t=Object(o.g)(),n=Object(a.useContext)(Y).stats,c=Object(a.useState)("surface"),i=Object(d.a)(c,2),l=i[0],r=i[1],s=Object(a.useState)({}),u=Object(d.a)(s,2),b=u[0],p=u[1];Object(a.useEffect)((function(){"{}"!==JSON.stringify(n)&&p("surface"===l?n.surface:n.population)}),[n,l]);var x=function(e){t.push("/countries/details/:".concat(e))},m=function(){};return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:e.root,children:Object(C.jsxs)(w.a,{className:e.paper,children:[Object(C.jsx)(h.a,{variant:"h4",className:e.title,children:"Statistics"}),Object(C.jsxs)(S.a,{variant:"outlined",className:e.formControl,children:[Object(C.jsx)(k.a,{id:"demo-simple-select-outlined-label",children:"Stats option"}),Object(C.jsxs)(W.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:l,onChange:function(e){return r(e.target.value)},label:"Stats option",children:[Object(C.jsx)(j.a,{value:"surface",children:"Surface"}),Object(C.jsx)(j.a,{value:"population",children:"Population"})]})]}),Object(C.jsx)("div",{className:e.body,children:Object(C.jsx)(L.a,{component:w.a,className:e.tableContainer,children:Object(C.jsxs)(I.a,{"aria-label":"simple table",stickyHeader:!0,children:[Object(C.jsx)(A.a,{children:Object(C.jsxs)(P.a,{children:[Object(C.jsx)(R.a,{align:"left",children:"Region - Subregion"}),Object(C.jsx)(R.a,{align:"center",className:e.row,children:"surface"===l?"Largest country (km\xb2)":"Most populated country"}),Object(C.jsx)(R.a,{align:"center",className:e.row,children:"surface"===l?"Less extensive country (km\xb2)":"Less populated country"})]})}),Object(C.jsx)(D.a,{children:b&&Object.entries(b).map((function(t){var n,a,c,i;return Object(C.jsxs)(P.a,{children:[B.includes(t[0])?Object(C.jsx)(R.a,{align:"left",variant:"head",className:e.cellPadding,children:t[0]}):Object(C.jsxs)(R.a,{align:"left",className:e.cellPadding,children:["\xa0\xa0",t[0]]}),Object(C.jsx)(R.a,{className:e.cellPadding,children:Object(C.jsxs)("div",{className:e.cellInfo,children:[Object(C.jsxs)("div",{tabIndex:0,onKeyPress:m,role:"button",className:e.cellRight,onClick:function(){var e;return x(null===(e=t[1].more.alpha2Code)||void 0===e?void 0:e.toLowerCase())},children:[Object(C.jsx)("div",{className:e.cellAvatar,children:Object(C.jsx)(E.a,{src:t[1].more.flag})}),Object(C.jsx)(h.a,{variant:"body2",children:t[1].more.name})]}),Object(C.jsx)(h.a,{variant:"body2",children:"surface"===l?null===(n=t[1].more.area)||void 0===n?void 0:n.toLocaleString():null===(a=t[1].more.population)||void 0===a?void 0:a.toLocaleString()})]})}),Object(C.jsx)(R.a,{className:e.cellPadding,children:Object(C.jsxs)("div",{className:e.cellInfo,children:[Object(C.jsxs)("div",{tabIndex:0,onKeyPress:m,role:"button",className:e.cellRight,onClick:function(){var e;return x(null===(e=t[1].less.alpha2Code)||void 0===e?void 0:e.toLowerCase())},children:[Object(C.jsx)("div",{className:e.cellAvatar,children:Object(C.jsx)(E.a,{src:t[1].less.flag})}),Object(C.jsx)(h.a,{variant:"body2",children:t[1].less.name})]}),Object(C.jsx)(h.a,{variant:"body2",children:"surface"===l?null===(c=t[1].less.area)||void 0===c?void 0:c.toLocaleString():null===(i=t[1].less.population)||void 0===i?void 0:i.toLocaleString()})]})})]},t[0])}))})]})})})]})})})},Z=n(140),q=n(141),Q=n(142),V=Object(s.a)((function(){return{link:{textDecoration:"none",color:"inherit"},root:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",padding:"16px",opacity:"0.7"},paper:{height:"calc(100vh - 128px)",maxWidth:"1024px",minWidth:"1024px",padding:"16px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"},head:{display:"flex",justifyContent:"flex-start",alignItems:"stretch"},body:{marginTop:"16px",flexGrow:1,overflowY:"scroll",border:"1px solid #eee",borderRadius:"5px"},cellSize:{minWidth:"125px",width:"125px",padding:"8px 16px"},cellPadding:{padding:"8px 16px"},card:{heigh:"400px",maxHeight:"400px",width:"400px",maxWidth:"400px",marginRight:"16px",border:"1px solid #eee"},headBody:{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},name:{},button:{alignSelf:"flex-end"}}})),X=function(e){var t;return[{title:"Native name",value:e.nativeName},{title:"Alternative spelling",value:"".concat(e.altSpellings.map((function(e,t){return"".concat(0===t?e:" ".concat(e))})))},{title:"Translations",value:'French: "'.concat(e.translations.fr,'" - Spanish: "').concat(e.translations.es,'" - German: "').concat(e.translations.de,'" - Japanesse: "').concat(e.translations.ja,'" - Portuguese: "').concat(e.translations.pt,'" - Italian: "').concat(e.translations.it,'" - Breton: "').concat(e.translations.br,'"')},{title:"Demonym",value:e.demonym},{title:"Region",value:e.region},{title:"Subregion",value:e.subregion},{title:"Languages",value:"".concat(e.languages.map((function(e,t){return"".concat(0===t?e.name:" ".concat(e.name))})))},{title:"Capital",value:e.capital},{title:"Numeric Code",value:e.numericCode},{title:"Alpha codes",value:"".concat(e.alpha2Code," - ").concat(e.alpha3Code)},{title:"Top level domains",value:"".concat(e.topLevelDomain.map((function(e,t){return"".concat(0===t?e:" ".concat(e))})))},{title:"Calling codes",value:"".concat(e.callingCodes.map((function(e,t){return"".concat(0===t?e:" ".concat(e))})))},{title:"Area",value:"".concat(e.area?"".concat(e.area.toLocaleString()," km\xb2"):"???")},{title:"Location",value:"Lat: ".concat(e.latlng[1],"\xb0, Long: ").concat(e.latlng[0],"\xb0")},{title:"Time zones",value:"".concat(e.timezones.map((function(e,t){return"".concat(0===t?e:" ".concat(e))})))},{title:"Population",value:null===(t=e.population)||void 0===t?void 0:t.toLocaleString()},{title:"Currencies",value:"".concat(e.currencies.map((function(e,t){return"".concat(0===t?"".concat(e.symbol," - ").concat(e.code," - ").concat(e.name):" ".concat(e.symbol," - ").concat(e.code," - ").concat(e.name))})))}]},$=function(){var e=Object(a.useState)({}),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),l=Object(d.a)(i,2),s=l[0],u=l[1],j=V(),b=Object(o.g)();return Object(a.useEffect)((function(){Object(M.a)(T.a.mark((function e(){var t,n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.location.pathname.split("/")[3].replace(":",""),e.next=3,fetch("https://restcountries.eu/rest/v2/alpha/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c(a),u(X(a));case 9:case"end":return e.stop()}}),e)})))()}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:j.root,children:Object(C.jsxs)(w.a,{className:j.paper,children:[Object(C.jsxs)("div",{className:j.head,children:[Object(C.jsx)(Z.a,{component:"img",alt:n.name,image:n.flag,title:n.name,className:j.card}),Object(C.jsxs)("div",{className:j.headBody,children:[Object(C.jsx)(h.a,{gutterBottom:!0,variant:"h3",align:"center",children:n.name}),Object(C.jsxs)(q.a,{className:j.button,children:[Object(C.jsx)(r.b,{to:"/countries",className:j.link,children:Object(C.jsx)(Q.a,{size:"small",color:"primary",variant:"outlined",children:"back to countries list"})}),Object(C.jsx)(r.b,{to:"/stats",className:j.link,children:Object(C.jsx)(Q.a,{size:"small",color:"secondary",variant:"outlined",children:"back to statistics page"})})]})]})]}),Object(C.jsx)("div",{className:j.body,children:Object(C.jsx)(L.a,{component:w.a,children:Object(C.jsx)(I.a,{"aria-label":"simple table",children:Object(C.jsx)(D.a,{children:s&&s.map((function(e){return Object(C.jsxs)(P.a,{children:[Object(C.jsx)(R.a,{align:"left",variant:"head",className:j.cellSize,children:e.title}),Object(C.jsx)(R.a,{align:"left",className:j.cellPadding,children:e.value})]},e.title)}))})})})})]})})})},ee=Object(s.a)((function(){return{root:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"stretch",flexGrow:1},title:{margin:"160px 0 48px 0",fontWeight:400,fontSize:"80px",color:"white",textShadow:"4px 4px 7px #ddd"},buttons:{color:"#000",margin:"0 24px",backgroundColor:"#c6ff00",width:"250px","&:hover":{color:"#fff",backgroundColor:"#d500f9"}},footer:{padding:"32px",textAlign:"center",color:"#fff",fontSize:"18px"},header:{display:"flex",flexDirection:"column",alignItems:"center"}}})),te=function(){var e=ee(),t=Object(o.g)();return Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsxs)("div",{className:e.header,children:[Object(C.jsx)(h.a,{variant:"h2",className:e.title,children:"Countries App"}),Object(C.jsxs)("div",{children:[Object(C.jsx)(Q.a,{size:"large",variant:"contained",className:e.buttons,onClick:function(){return t.push("/countries")},children:"Go to countries list"}),Object(C.jsx)(Q.a,{size:"large",variant:"contained",className:e.buttons,onClick:function(){return t.push("/stats")},children:"Go to statistics"})]})]}),Object(C.jsx)("div",{className:e.footer,children:"\xa9 Andr\xe9s Arana Castillo - 2021"})]})},ne=n(22),ae=n(145),ce=n(151),ie=n(143),le=n(144),re=n(146),oe=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",padding:"16px",opacity:"0.7"},tableRow:{cursor:"pointer",transition:"all 0.5s","&:hover":{backgroundColor:"#eee"}},paper:{height:"calc(100vh - 128px)",maxWidth:"1024px",minWidth:"1024px",padding:"16px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"},head:{display:"flex",justifyContent:"space-between",padding:"16px 0"},body:{marginTop:"16px",flexGrow:1,border:"1px solid #eee",borderRadius:"5px",overflow:"hidden"},tableContainer:{height:"100%"},formControl:{minWidth:"225px",maxWidth:"225px",width:"225px"},title:{margin:"0 auto",marginBottom:"8px"},search:{position:"relative",borderRadius:"5px",alignSelf:"flex-end",border:"1px solid #ccc",marginTop:"16px",width:"30%","&:hover":{backgroundColor:"#eee"}},searchIcon:{padding:"0 16px",height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:"8px 8px 8px 0",paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%"}}})),se=n(34),de=[{name:"Arabic (ARA)",code:"ar"},{name:"Chinese (ZHO)",code:"zh"},{name:"Dutch (NLD)",code:"nl"},{name:"English (ENG)",code:"en"},{name:"French (FRA)",code:"fr"},{name:"German (DEU)",code:"de"},{name:"Italian (ITA)",code:"it"},{name:"Japanese (JPN)",code:"ja"},{name:"Persian (FAS)",code:"fa"},{name:"Portuguese (POR)",code:"pt"},{name:"Russian (RUS)",code:"ru"},{name:"Spanish (SPA)",code:"es"},{name:"Swedish (SWE)",code:"sv"}],ue=function(e,t){var n=[],a=[],c=[];return n="World"===t.region?Object(se.a)(e):"All"!==t.subregion?e.filter((function(e){return e.subregion===t.subregion})):e.filter((function(e){return e.region===t.region})),a="None"===t.language?Object(se.a)(n):n.filter((function(e){return e.languages.map((function(e){return e.iso639_1})).includes(t.language)?e:null})),c="None"===t.orderBy?Object(se.a)(a):function(e,t){return Object(se.a)(t).sort((function(t,n){return"Name"===e?t.name.toLowerCase()<n.name.toLowerCase()?-1:t.name.toLowerCase()>n.name.toLowerCase()?1:0:"Area"===e?t.area<n.area?1:t.area>n.area?-1:0:t.population<n.population?1:t.population>n.population?-1:0}))}(t.orderBy,a),"up-to-down"===t.orderSense?Object(se.a)(c):Object(se.a)(c.reverse())},je=function(){var e=oe(),t=Object(o.g)(),n=Object(a.useContext)(Y),c=n.countries,i=n.regions,l=n.mutations,r=n.setMutations,s=n.resetMutations,u=n.search,b=n.setSearch,p=Object(a.useState)(c),x=Object(d.a)(p,2),m=x[0],g=x[1],f=Object(a.useState)(!1),O=Object(d.a)(f,2),v=O[0],N=O[1];Object(a.useEffect)((function(){g(c)}),[c]),Object(a.useEffect)((function(){g(ue(c,l)),N(!1)}),[l]),Object(a.useEffect)((function(){var e,t;u.length>=3&&g((e=c,t=u.toLowerCase(),e.filter((function(e){return e.name.toLowerCase().startsWith(t)||e.capital.toLowerCase().startsWith(t)||e.name.toLowerCase().includes(" ".concat(t))||e.capital.toLowerCase().includes(" ".concat(t))})))),0===u.length&&v&&g(c)}),[u]);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:e.root,children:Object(C.jsxs)(w.a,{className:e.paper,children:[Object(C.jsxs)(h.a,{variant:"h4",className:e.title,children:["Countries list [",m.length,"]"]}),Object(C.jsxs)("div",{className:e.head,children:[Object(C.jsxs)(S.a,{variant:"outlined",className:e.formControl,children:[Object(C.jsx)(k.a,{id:"demo-simple-select-outlined-label",children:"Select Region"}),Object(C.jsxs)(W.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:l.region,onChange:function(e){return r(Object(ne.a)(Object(ne.a)({},l),{},{region:e.target.value,subregion:"All"}))},onClick:function(){return b("")},label:"Select Region",children:[Object(C.jsx)(j.a,{value:"World",children:"World"}),i&&Object.keys(i).map((function(e){return Object(C.jsx)(j.a,{value:e,children:e},e)}))]})]}),Object(C.jsxs)(S.a,{variant:"outlined",className:e.formControl,children:[Object(C.jsx)(k.a,{id:"demo-simple-select-outlined-label",children:"Select Sub-region"}),Object(C.jsxs)(W.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:l.subregion,onChange:function(e){return r(Object(ne.a)(Object(ne.a)({},l),{},{subregion:e.target.value}))},onClick:function(){return b("")},label:"Select Sub-region",children:[Object(C.jsx)(j.a,{value:"All",children:"All"}),i[l.region]&&i[l.region].map((function(e){return Object(C.jsx)(j.a,{value:e,children:e},e)}))]})]}),Object(C.jsxs)(S.a,{variant:"outlined",className:e.formControl,children:[Object(C.jsx)(k.a,{id:"demo-simple-select-outlined-label",children:"Select Language"}),Object(C.jsxs)(W.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:l.language,onChange:function(e){return r(Object(ne.a)(Object(ne.a)({},l),{},{language:e.target.value}))},onClick:function(){return b("")},label:"Select Language",children:[Object(C.jsx)(j.a,{value:"None",children:"None"}),de.map((function(e){return Object(C.jsx)(j.a,{value:e.code,children:e.name},e.code)}))]})]}),Object(C.jsxs)(S.a,{variant:"outlined",className:e.formControl,children:[Object(C.jsx)(k.a,{id:"demo-simple-select-outlined-label",children:"Order by"}),Object(C.jsxs)(W.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:l.orderBy,onChange:function(e){return r(Object(ne.a)(Object(ne.a)({},l),{},{orderBy:e.target.value}))},onClick:function(){return b("")},label:"Order by",children:[Object(C.jsx)(j.a,{value:"None",children:"None"}),Object(C.jsx)(j.a,{value:"Name",children:"Name"}),Object(C.jsx)(j.a,{value:"Area",children:"Area"}),Object(C.jsx)(j.a,{value:"Population",children:"Population"})]})]}),Object(C.jsx)(Q.a,{variant:"outlined",onClick:function(){return r(Object(ne.a)(Object(ne.a)({},l),{},{orderSense:"up-to-down"===l.orderSense?"down-to-up":"up-to-down"}))},children:"up-to-down"===l.orderSense?Object(C.jsx)(ie.a,{}):Object(C.jsx)(le.a,{})})]}),Object(C.jsx)(ae.a,{}),Object(C.jsxs)("div",{className:e.search,children:[Object(C.jsx)("div",{className:e.searchIcon,children:Object(C.jsx)(re.a,{})}),Object(C.jsx)(ce.a,{value:u,placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){b(e.target.value),N(!0)},onClick:s})]}),Object(C.jsx)("div",{className:e.body,children:Object(C.jsx)(L.a,{component:w.a,className:e.tableContainer,children:Object(C.jsxs)(I.a,{"aria-label":"simple table",stickyHeader:!0,children:[Object(C.jsx)(A.a,{children:Object(C.jsxs)(P.a,{children:[Object(C.jsx)(R.a,{align:"center",children:"#"}),Object(C.jsx)(R.a,{align:"center",children:"Flag"}),Object(C.jsx)(R.a,{align:"left",children:"Name"}),Object(C.jsx)(R.a,{align:"left",children:"Capital"}),Object(C.jsxs)(R.a,{align:"right",children:["Area\xa0(km",Object(C.jsx)("sup",{children:"2"}),")"]}),Object(C.jsx)(R.a,{align:"right",children:"Population"}),Object(C.jsx)(R.a,{align:"right",children:"Languages"})]})}),Object(C.jsx)(D.a,{children:m.map((function(n,a){var c,i;return Object(C.jsxs)(P.a,{className:e.tableRow,onClick:function(){return e=n.alpha2Code.toLowerCase(),void t.push("/countries/details/:".concat(e));var e},children:[Object(C.jsx)(R.a,{align:"center",children:a+1}),Object(C.jsx)(R.a,{align:"center",children:Object(C.jsx)(E.a,{src:n.flag,className:e.tableAvatar})}),Object(C.jsx)(R.a,{align:"left",children:n.name}),Object(C.jsx)(R.a,{align:"left",children:n.capital}),Object(C.jsx)(R.a,{align:"right",children:null===(c=n.area)||void 0===c?void 0:c.toLocaleString()}),Object(C.jsx)(R.a,{align:"right",children:null===(i=n.population)||void 0===i?void 0:i.toLocaleString()}),Object(C.jsx)(R.a,{align:"right",children:n.languages.map((function(e,t){var a=e.iso639_2.toUpperCase();return t!==n.languages.length-1&&(a+="/ "),a}))})]},n.name)}))})]})})})]})})})},be=n.p+"static/media/wallpaper.416cb6d4.jpg",pe=Object(s.a)((function(e){return{offset:e.mixins.toolbar,wallpaper:{flexGrow:1,backgroundImage:"linear-gradient(rgba(5, 5, 5, 0), rgb(0, 0, 0)), linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(".concat(be,")"),backgroundSize:"cover",backgroundPosition:"top",backgroundRepeat:"no-repeat",display:"flex",flexDirection:"column"}}})),xe=function(){var e=pe();return Object(C.jsxs)(r.a,{className:"app-router",children:[Object(C.jsx)(y,{}),Object(C.jsx)("div",{className:e.offset}),Object(C.jsx)("div",{className:e.wallpaper,children:Object(C.jsxs)(o.d,{children:[Object(C.jsx)(o.b,{exact:!0,path:"/",component:te}),Object(C.jsx)(o.b,{exact:!0,path:"/countries",component:je}),Object(C.jsx)(o.b,{exact:!0,path:"/countries/details/:name",component:$}),Object(C.jsx)(o.b,{exact:!0,path:"/stats",component:_}),Object(C.jsx)(o.a,{to:"/"})]})})]})},he=n(70),me=Object(he.a)(),ge=function(){return Object(C.jsx)(l.a,{theme:me,children:Object(C.jsx)(K,{children:Object(C.jsx)(xe,{})})})};i.a.render(Object(C.jsx)(ge,{}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.97284029.chunk.js.map