(this["webpackJsonpamzinai-alkanas-v1"]=this["webpackJsonpamzinai-alkanas-v1"]||[]).push([[5],{38:function(n,t,e){"use strict";function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}e.d(t,"a",(function(){return a}))},46:function(n,t,e){"use strict";var i=e(1),r=e(11),a=e(0),c=e(6),o=e(7);function u(){var n=Object(c.a)([""]);return u=function(){return n},n}function s(){var n=Object(c.a)(["\n  width: 50px;\n  height: 50px; // TODO: fix\n  background-color: red;\n  color: white;\n"]);return s=function(){return n},n}var d=o.b.select(s()),l=o.b.option(u());t.a=function(n){var t=n.options,e=n.onFilterChange,c=Object(a.useState)(t[0]._id),o=Object(r.a)(c,2),u=o[0],s=o[1];return Object(i.jsx)(d,{value:u,onChange:function(n){s(n.target.value),e(n.target.value)},children:t.map((function(n){return Object(i.jsxs)(l,{value:n._id,children:[n.title,":"]},n._id)}))})}},47:function(n){n.exports=JSON.parse('[{"sectionId":"introSection","heading":"Labas! Nori i\u0161bandyti naujus, patikimus restoranus ar atrasti nauj\u0173 recept\u0173?","subheading":"Sveikas atvyk\u0119s \u012f mano tinklara\u0161t\u012f!","buttonText":"Apie mane","linkTo":"/apie"},{"sectionId":"reviewSection","title":"restoran\u0173 ap\u017evalgos","linkTo":"/apzvalgos","linkText":"Skaityti ap\u017evalg\u0105","dropdown":[{"_id":"rating","title":"Populiariausios"},{"_id":"timestamp","title":"Naujausios"}]},{"sectionId":"recipesSection","title":"receptai","linkTo":"/recipes","linkText":"Skaityti recept\u0105","dropdown":[{"_id":"rating","title":"Populiariausi"},{"_id":"timestamp","title":"Naujausi"}]},{"sectionId":"topSection","title":"restoran\u0173 top 10","linkTo":"/apzvalgos","dropdown":[{"_id":"pizza","title":"Picerijos"},{"_id":"asian","title":"Azijieti\u0161ka virtuv\u0117"},{"_id":"kebab","title":"Kebabin\u0117s"},{"_id":"lithuanian","title":"Lietuvi\u0161ka virtuv\u0117"},{"_id":"fastFood","title":"Greitas maistas"}]}]')},49:function(n,t,e){"use strict";e.r(t);var i=e(1),r=e(38),a=e(0),c=e(6),o=e(7);function u(){var n=Object(c.a)([""]);return u=function(){return n},n}var s=o.b.div(u()),d=e.p+"static/media/intro-image.6ba60f3b.jpg";function l(){var n=Object(c.a)(["\n  font-size: var(--subheading-font-size);\n  font-style: italic;\n  letter-spacing: 0.086rem;\n  margin: var(--subheading-margins);\n"]);return l=function(){return n},n}function b(){var n=Object(c.a)(["\n  font-size: var(--heading-font-size);\n  font-weight: 900;\n  max-width: 40ch;\n  margin: var(--heading-margins);\n"]);return b=function(){return n},n}function j(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: white;\n  background: rgba(0, 0, 0, 0.65);\n"]);return j=function(){return n},n}function f(){var n=Object(c.a)(["\n  height: var(--introSection-height);\n  background-image: url(",");\n  background-size: cover;\n  background-position: center right;\n  background-repeat: no-repeat;\n  background-color: black;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n"]);return f=function(){return n},n}var p=o.b.div(f(),d),h=o.b.div(j()),g=o.b.div(b()),x=o.b.span(l()),O=e(9);function m(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100px;\n  background: red;\n  font-size: var(--button-font-size);\n  padding: var(--button-padding);\n  font-weight: 900;\n  color: white;\n  text-decoration: none;\n"]);return m=function(){return n},n}var v=Object(o.b)(O.b)(m()),w=function(n){return Object(i.jsx)(v,{to:n.to,children:n.children})},y=function(n){return Object(i.jsx)(p,{children:Object(i.jsxs)(h,{children:[Object(i.jsx)(g,{children:n.heading}),Object(i.jsx)(x,{children:n.subheading}),Object(i.jsx)(w,{to:n.linkTo,children:n.buttonText})]})})},k=e(11);function S(){var n=Object(c.a)(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return n},n}function z(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 48rem;\n  width: 100%;\n  background: white;\n  padding: 4.6rem 0;\n"]);return z=function(){return n},n}var T=o.b.div(z()),_=o.b.div(S());function P(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: start;\n"]);return P=function(){return n},n}function A(){var n=Object(c.a)(["\n  display: grid;\n  width: 100%;\n  height: fit-content;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  justify-items: center;\n"]);return A=function(){return n},n}var C=o.b.div(A()),I=(o.b.div(P()),e(46)),E=function(n){var t=n.title,e=n.dropdown,r=n.onFilterChange;return Object(i.jsxs)(C,{children:[Object(i.jsx)(I.a,{options:e,onFilterChange:r}),Object(i.jsx)("h1",{children:t.toUpperCase()})]})};function D(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 4rem;\n\n  > * {\n    margin-right: 3rem;\n  }\n\n  > :last-child {\n    margin-right: 0;\n  }\n"]);return D=function(){return n},n}var F=o.b.div(D()),N=e(39),U=function(n){var t=n.data,e=n.linkTo,r=n.linkText;return Object(i.jsx)(F,{children:t.map((function(n){return Object(i.jsx)(N.a,{imgUrl:n.imgUrl,heading:n.heading,intro:n.intro,rating:n.rating,to:e,linkText:r},n._id)}))})},J=function(n){var t=n.title,e=n.linkTo,c=n.linkText,o=n.dropdown,u=n.data,s={title:t,dropdown:o},d=Object(a.useState)([]),l=Object(k.a)(d,2),b=l[0],j=l[1],f=Object(a.useState)(o[0]._id),p=Object(k.a)(f,2),h=p[0],g=p[1];Object(a.useEffect)((function(){var n=u.sort((function(n,t){return t[h]-n[h]})).slice(0,3);j(n)}),[h,u]);var x={linkText:c,data:b,linkTo:e};return Object(i.jsx)(T,{children:Object(i.jsxs)(_,{children:[Object(i.jsx)(E,Object(r.a)(Object(r.a)({},s),{},{onFilterChange:function(n){return g(n)}})),Object(i.jsx)(U,Object(r.a)({},x)),Object(i.jsx)(w,{to:e,children:"Daugiau"})]})})};function R(){var n=Object(c.a)(["\n  width: 100%;\n  max-width: 37ch;\n  padding-right: 1rem;\n"]);return R=function(){return n},n}function M(){var n=Object(c.a)(["\n  color: red;\n  width: 3ch;\n  padding-right: 1.36rem;\n"]);return M=function(){return n},n}function K(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-bottom: 1.111rem;\n\n  > :last-child {\n    margin-left: auto;\n  }\n"]);return K=function(){return n},n}function L(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 50ch;\n\n  &:first-child {\n    margin-right: var(--firstChild-margin-right);\n  }\n"]);return L=function(){return n},n}function B(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: var(--topSection-flex-direction);\n  justify-content: space-between;\n  align-items: center;\n  margin: 8rem 0;\n  width: 100%;\n"]);return B=function(){return n},n}function G(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 3.5rem 0;\n  width: 100%;\n  max-width: var(--page-layout-width);\n  height: fit-content;\n  margin: 0 1rem;\n"]);return G=function(){return n},n}function V(){var n=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  background: black;\n"]);return V=function(){return n},n}var Y=o.b.div(V()),q=o.b.div(G()),H=o.b.div(B()),Q=o.b.div(L()),W=o.b.span(K()),X=o.b.span(M()),Z=o.b.span(R()),$=e(45),nn=function(n){var t=n.refs,e=n.title,c=n.dropdown,o=n.data,u={title:e,dropdown:c},s=Object(a.useState)([]),d=Object(k.a)(s,2),l=d[0],b=d[1],j=Object(a.useState)([]),f=Object(k.a)(j,2),p=f[0],h=f[1],g=Object(a.useState)(c[0]._id),x=Object(k.a)(g,2),O=x[0],m=x[1];return Object(a.useEffect)((function(){var n=o.filter((function(n){return n.type===O})).sort((function(n,t){return t.rating-n.rating}));b(n.slice(0,5)),h(n.slice(5,10))}),[O,o]),Object(i.jsx)(Y,{ref:t.topRef,children:Object(i.jsxs)(q,{children:[Object(i.jsx)(E,Object(r.a)(Object(r.a)({},u),{},{onFilterChange:function(n){return m(n)}})),Object(i.jsxs)(H,{children:[Object(i.jsx)(Q,{children:l.map((function(n,t){return Object(i.jsxs)(W,{children:[Object(i.jsxs)(X,{children:[t+1,"."]}),Object(i.jsx)(Z,{children:n.heading.toUpperCase()}),Object(i.jsx)($.a,{children:n.rating})]},n._id)}))}),Object(i.jsx)(Q,{children:p.map((function(n,t){return Object(i.jsxs)(W,{children:[Object(i.jsxs)(X,{children:[t+6,"."]}),Object(i.jsx)(Z,{children:n.heading.toUpperCase()}),Object(i.jsx)($.a,{children:n.rating})]},n._id)}))})]}),Object(i.jsx)(w,{to:"/apzvalgos",children:"Daugiau"})]})})};function tn(){var n=Object(c.a)(["\n  display: flex;\n  width: 132px;\n  height: 46px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 23px;\n  background: red;\n  font-size: 1.286rem;\n  color: white;\n  border: 0;\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    cursor: pointer;\n  }\n"]);return tn=function(){return n},n}function en(){var n=Object(c.a)(["\n  width: 100%;\n  height: 230px;\n  border: 3px solid white;\n  border-radius: 15px;\n  box-sizing: border-box;\n  background: none;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  padding-top: 15px;\n  color: white;\n  font-family: inherit;\n  font-size: 1.286rem;\n  resize: none;\n\n  ::placeholder {\n    font-size: 1.286rem;\n    text-align: start;\n    color: #7a7a7a;\n    opacity: 1;\n  }\n\n  :focus {\n    outline: none;\n  }\n"]);return en=function(){return n},n}function rn(){var n=Object(c.a)(["\n  width: 100%;\n  height: ",";\n  border: 3px solid white;\n  border-radius: 15px;\n  box-sizing: border-box;\n  background: none;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  color: white;\n  font-size: 1.286rem;\n\n  ::placeholder {\n    font-size: 1.286rem;\n    text-align: start;\n    color: #7a7a7a;\n    opacity: 1;\n  }\n\n  :focus {\n    outline: none;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(c.a)([""]);return an=function(){return n},n}function cn(){var n=Object(c.a)(["\n  width: 50ch;\n  height: 100%;\n"]);return cn=function(){return n},n}function on(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: space-between;\n\n  div {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: center;\n  }\n"]);return on=function(){return n},n}function un(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  padding-bottom: 2.5rem;\n  margin: 0 2rem;\n"]);return un=function(){return n},n}function sn(){var n=Object(c.a)(["\n  width: 12.5rem;\n  height: 12.5rem;\n  border-radius: 50%;\n  background: red;\n  margin-bottom: 1.4rem;\n"]);return sn=function(){return n},n}function dn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 50ch;\n\n  margin-bottom: 4rem;\n\n  p {\n    text-align: center;\n    font-size: 1.286rem;\n    font-weight: 300;\n    margin: 0;\n  }\n"]);return dn=function(){return n},n}function ln(){var n=Object(c.a)(["\n  text-align: center;\n  margin-bottom: 5rem;\n"]);return ln=function(){return n},n}function bn(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  padding: 7rem 0;\n  width: 100%;\n  max-width: var(--page-layout-width);\n  height: fit-content;\n  margin: 0 1rem;\n"]);return bn=function(){return n},n}function jn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  color: white;\n  background: black;\n"]);return jn=function(){return n},n}var fn=o.b.div(jn()),pn=o.b.div(bn()),hn=o.b.h1(ln()),gn=o.b.div(dn()),xn=o.b.img(sn()),On=o.b.div(un()),mn=o.b.div(on()),vn=o.b.div(cn()),wn=o.b.form(an()),yn=o.b.input(rn(),(function(n){return"title"===n.inputType?"60px":"230px"})),kn=o.b.textarea(en()),Sn=o.b.input(tn()),zn=e(44),Tn=function(n){var t=n.refs;return Object(i.jsx)(fn,{children:Object(i.jsxs)(pn,{children:[Object(i.jsxs)(gn,{ref:t.aboutRef,children:[Object(i.jsx)(hn,{children:"APIE MANE"}),Object(i.jsx)(xn,{}),Object(i.jsx)("p",{children:"Jeigu mes dar nesusipa\u017einome - LABAS! A\u0161 esu Robertas. Maistas man yra aistra - m\u0117gstu skaniai ir kokybi\u0161kai pasigaminti maist\u0105, ta\u010diau taip pat m\u0117gstu aplankyti \u012fvairius restoranus, paragauti neragaut\u0173 skoni\u0173, atrasti nauj\u0173 patiekal\u0173 bei kokybi\u0161kai pavalgyti. Jeigu maisto ragavimas ar gaminimas yra ir TAVO aistra - tuomet Sveikas, naujasis bi\u010diuli!"})]}),Object(i.jsxs)(On,{ref:t.contactRef,children:[Object(i.jsx)(hn,{children:"SUSISIEKIME"}),Object(i.jsxs)(mn,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(zn.a,{icon:"facebook",link:"https://facebook.com"}),Object(i.jsx)(zn.a,{icon:"gmail",link:"https://gmail.com"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(zn.a,{icon:"instagram",link:"https://instagram.com"}),Object(i.jsx)(zn.a,{icon:"youtube",link:"https://youtube.com"})]})]})]}),Object(i.jsxs)(vn,{children:[Object(i.jsx)(hn,{children:"PARA\u0160YK MAN"}),Object(i.jsxs)(wn,{children:[Object(i.jsx)(yn,{inputType:"title",type:"text",placeholder:"Tema...",name:"email"}),Object(i.jsx)(kn,{inputType:"message",type:"text",placeholder:"\u017dinut\u0117...",name:"message"}),Object(i.jsx)(Sn,{type:"submit",value:"Si\u0173sti"})]})]})]})})},_n=e(47),Pn=e(42),An=e(43),Cn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=Object(r.a)({},_n.find((function(t){return t.sectionId===n})));return t&&(e.data=t),e};t.default=function(n){var t=n.refs;return Object(i.jsxs)(s,{children:[Object(i.jsx)(y,Object(r.a)({},Cn("introSection"))),Object(i.jsx)(J,Object(r.a)({},Cn("reviewSection",Pn))),Object(i.jsx)(nn,Object(r.a)({refs:t},Cn("topSection",Pn))),Object(i.jsx)(J,Object(r.a)({},Cn("recipesSection",An))),Object(i.jsx)(Tn,{refs:t})]})}}}]);
//# sourceMappingURL=5.6f1eb749.chunk.js.map