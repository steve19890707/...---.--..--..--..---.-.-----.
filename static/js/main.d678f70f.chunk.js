(this.webpackJsonppuzzle=this.webpackJsonppuzzle||[]).push([[0],{31:function(n,e,t){"use strict";t.r(e);var s,i,a=t(1),c=t.n(a),l=t(13),r=t.n(l),o=t(10),d=t(6),x=t(7),j=t(14),b=t.n(j),g=t(15),p=t.n(g),u=t(4),h=t(3),m=t(2),f=window.location.hostname.indexOf(":")?"./puzzle/":"./",O=Object(x.a)(s||(s=Object(d.a)(["\n  body {\n    padding: 0;\n    margin: 0;\n    background-color:#f7f7f7;\n  }\n"]))),v=x.b.div(i||(i=Object(d.a)(['\n  margin-top: 50px;\n  header {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 50px;\n    background: #fff;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    z-index: 99;\n    font-family: "Gemunu Libre", sans-serif;\n    font-size: 24px;\n    letter-spacing: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #a0a0a0;\n  }\n  .cd-title {\n    text-align: center;\n    margin: 0;\n    padding: 15px 0;\n    letter-spacing: 1px;\n    font-size: 18px;\n    color: #383838;\n  }\n  .anser {\n    font-size: 22px;\n    letter-spacing: 6px;\n    width: 100%;\n    text-align: center;\n  }\n  .count-down {\n    width: 80%;\n    margin: 0 auto;\n    text-align: center;\n    font-family: "Gemunu Libre", sans-serif;\n    font-size: 22px;\n    letter-spacing: 2px;\n    color: #383838;\n    padding: 6px;\n    box-sizing: border-box;\n    border-radius: 8px;\n    border: 1px solid #a0a0a0;\n    background: #fff;\n  }\n  .subtitle {\n    width: 80%;\n    margin: 0 auto;\n    color: #383838;\n    font-family: "Gemunu Libre", sans-serif;\n    font-size: 22px;\n    letter-spacing: 2px;\n  }\n  .question {\n    padding: 15px 40px;\n    width: 80%;\n    margin: 30px auto;\n    border-radius: 8px;\n    box-sizing: border-box;\n    background: #fff;\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n    &:last-child {\n      margin: 15px auto 50px auto;\n    }\n    .sing {\n      font-size: 32px;\n    }\n    .mos {\n      width: 50%;\n    }\n    font-size: 18px;\n    .svg-IoCloseOutline {\n      width: 38px;\n      height: 38px;\n      fill: #000;\n    }\n    .svg-IoTriangleOutline {\n      width: 30px;\n      height: 30px;\n      fill: #000;\n    }\n    .svg-BiSquare {\n      width: 32px;\n      height: 32px;\n      fill: #000;\n    }\n    .svg-BiCircle {\n      width: 32px;\n      height: 32px;\n      fill: #000;\n    }\n    img {\n      height: 100%;\n    }\n  }\n'])));var w=function(){var n=Object(a.useState)("loading..."),e=Object(o.a)(n,2),t=e[0],s=e[1],i=Object(a.useState)(!1),c=Object(o.a)(i,2),l=c[0],r=c[1];return Object(a.useEffect)((function(){var n=setInterval((function(){var e=new Date(2021,9,7,13,30,0),t=b()(new Date,e,0),i=new Date;return p()(t.end).isBefore(i)?(alert("Time's up!"),s("Time's up!"),r(!0),void clearInterval(n)):(s("".concat(t.days," days ").concat(t.hours,":").concat(t.minutes,":").concat(t.seconds)),function(){return clearInterval(n)})}),1e3)}),[]),Object(m.jsxs)(v,{children:[Object(m.jsx)(O,{}),Object(m.jsx)("header",{children:Object(m.jsx)("span",{children:"Welecome"})}),!l&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"cd-title",children:"Time left:"}),Object(m.jsx)("div",{className:"count-down",children:t}),Object(m.jsxs)("div",{className:"question",children:[Object(m.jsx)(h.a,{className:"svg-BiCircle"}),Object(m.jsx)("div",{className:"sing",children:"\uff1d"}),Object(m.jsx)("div",{children:"IBKI"})]}),Object(m.jsxs)("div",{className:"question",children:[Object(m.jsx)(u.a,{className:"svg-IoCloseOutline"}),Object(m.jsx)("div",{className:"sing",children:"\uff1d"}),Object(m.jsx)("div",{children:"\u4eba\u4e00\u7530\u65e5"})]}),Object(m.jsxs)("div",{className:"question",children:[Object(m.jsx)(u.b,{className:"svg-IoTriangleOutline"}),Object(m.jsx)("div",{className:"sing",children:"\uff1d"}),Object(m.jsx)("img",{src:"".concat(f,"image/image.png"),alt:""})]}),Object(m.jsxs)("div",{className:"question",children:[Object(m.jsx)(h.b,{className:"svg-BiSquare"}),Object(m.jsx)("div",{className:"sing",children:"\uff1d"}),Object(m.jsx)("div",{className:"mos",children:"... --.- ..- .. -.. --. .- -- . "})]})]}),Object(m.jsx)("p",{className:"subtitle",children:"Anser:"}),Object(m.jsx)("div",{className:"question",children:l?Object(m.jsx)("div",{className:"anser",children:"A\u6703\u8b70\u5ba4"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.b,{className:"svg-IoTriangleOutline"}),Object(m.jsx)(u.a,{className:"svg-IoCloseOutline"}),Object(m.jsx)(h.a,{className:"svg-BiCircle"}),Object(m.jsx)(h.b,{className:"svg-BiSquare"})]})})]})},N=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(e){var t=e.getCLS,s=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),s(n),i(n),a(n),c(n)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),N()}},[[31,1,2]]]);
//# sourceMappingURL=main.d678f70f.chunk.js.map