(this.webpackJsonpbackofthenet=this.webpackJsonpbackofthenet||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(8),s=n.n(a),i=n(4),l=n.n(i),o=n(5),u=n(6),j=n(1),d=function(e){var t=e.player,n={borderColor:"FWD"===t.role.code3?"#25aefe":"DEF"===t.role.code3?"#0ea90b":"MID"===t.role.code3?"#ffa515":"#c5312d"},r=(new Date).toISOString().slice(0,4);return Object(j.jsxs)("tr",{className:"player",children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{style:n,src:t.image,alt:t.shortName})}),Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:t.birthArea.name})}),Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:t.firstName.length+t.lastName.length>=20?t.shortName:t.firstName+" "+t.lastName})}),Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:t.birthDate?+r-+t.birthDate.slice(0,4):"-"})}),Object(j.jsx)("td",{children:Object(j.jsx)("p",{children:t.foot?t.foot:"-"})})]})},b=function(e){var t=e.team,n=e.getAndSetPlayers,r=e.select,c=e.isSelected;return Object(j.jsxs)("div",{onClick:function(){r(t.id),n(t.id)},className:"team",children:[Object(j.jsx)("img",{src:t.icon,alt:""}),Object(j.jsxs)("p",{children:[" ",t.name," "]}),Object(j.jsx)("div",{style:{backgroundColor:c===t.id?"#25aefe":"#ededed"},className:"team__selector"})]})},h=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mock-foooty-api.herokuapp.com/teams");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.teams);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mock-foooty-api.herokuapp.com/teams/".concat(t,"/players"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.players);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=n(19),O=function(){return Object(j.jsx)("div",{className:"loader"})},x={initial:{x:-1e3},visible:{x:0,transition:{duration:.4}}},m=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),s=Object(u.a)(a,2),i=s[0],m=s[1],v=Object(r.useState)(),y=Object(u.a)(v,2),g=y[0],k=y[1],N=Object(r.useRef)(null),w=n.filter((function(e){return e.id===g}));Object(r.useEffect)((function(){S()}),[]);var S=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n=e.sent,m(n),N.current&&N.current.scrollIntoView();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){k(e)};return 0===n.length?Object(j.jsx)(O,{}):Object(j.jsxs)(f.a.div,{variants:x,initial:"initial",animate:"visible",className:"main-page",children:[Object(j.jsx)("h1",{children:"Teams"}),Object(j.jsx)("div",{className:"main-page__teams",children:n.map((function(e){return Object(j.jsx)(b,{isSelected:g,select:_,getAndSetPlayers:D,team:e},e.id)}))}),n&&Object(j.jsx)("div",{ref:N,children:w[0]?Object(j.jsxs)("h1",{children:[w[0].name,"'s Players"]}):Object(j.jsx)("h1",{children:"Select a team"})}),i&&Object(j.jsxs)(f.a.table,{variants:x,initial:"initial",animate:"visible",className:"main-page__players",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{}),Object(j.jsx)("th",{children:"Country"}),Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Age"}),Object(j.jsx)("th",{children:"Foot"})]})}),Object(j.jsx)("tbody",{children:i.map((function(e){return Object(j.jsx)(d,{player:e},e.id)}))})]})]})};n(15);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d685fe83.chunk.js.map