(this["webpackJsonpcontinents-app"]=this["webpackJsonpcontinents-app"]||[]).push([[0],{11:function(n,e,a){},13:function(n,e,a){"use strict";a.r(e);var c=a(1),i=a.n(c),t=a(5),r=a.n(t),o=a(4),s=i.a.createContext(""),l=(a(11),a(6)),d=a(2),u=a.n(d),j=a(0);var h=function(){var n=l.data;return Object(j.jsx)("div",{className:"world",children:n.map((function(n){return Object(j.jsx)("div",{children:Object(j.jsx)(b,{continent:n})},u()())}))})},b=function(n){var e=n.continent,a=Object(c.useState)(!1),i=Object(o.a)(a,2),t=i[0],r=i[1];console.log(e);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"box continent-box",onClick:function(){r(!t)},children:e.name}),t&&Object(j.jsx)(s.Provider,{value:function(){r(!1)},children:Object(j.jsx)(m,{countries:e.children})})]})},m=function(n){var e=n.countries;return console.log(e),Object(j.jsx)("div",{children:e.map((function(n){return Object(j.jsx)("div",{children:Object(j.jsx)(v,{country:n})},u()())}))})},v=function(n){var e=n.country,a=Object(c.useState)(!1),i=Object(o.a)(a,2),t=i[0],r=i[1];return console.log(e),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"box country-box",onClick:function(){r(!t)},children:e.name}),t&&Object(j.jsx)(x,{cities:e.children})]})},x=function(n){var e=n.cities;return console.log(e),Object(j.jsx)("div",{children:e.map((function(n){return Object(j.jsx)("div",{children:Object(j.jsx)(O,{city:n})},u()())}))})},O=function(n){var e=n.city;console.log(e);var a=Object(c.useContext)(s);return Object(j.jsx)("div",{className:"box city-box",onClick:a,children:e})};r.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))},6:function(n){n.exports=JSON.parse('{"data":[{"name":"Europe","children":[{"name":"Ukraine","children":["Kyiv","Dnipro","Kharkiv","Lviv","Sumy"]},{"name":"Polska","children":["Wroclaw","Warsawa","Lodz","Kracow","Wroclaw"]},{"name":"Hungary","children":["Budapest","Debrecen","Seged"]},{"name":"Estonia","children":["Tallin","Narva","Tartu"]},{"name":"Montenegro","children":["Kotor","Budva","Tivat","Podgorica"]},{"name":"Croatia","children":["Haiduk","Split","Dubrovnik","Rieka"]},{"name":"Srbe","children":["Belgrad","Subotica","Novi-Sad"]}]},{"name":"America","children":[{"name":"USA","children":["Washington","NY","LA","Boston","Chicago","San-Francisko"]},{"name":"Mexico","children":["Acapulco","Mexico","Sinaloa","Monterey","Durango"]},{"name":"Canada","children":["Sascachewan","Ottawa","Quebeq","Winnipeg","Calgary"]}]},{"name":"Asia","children":[{"name":"China","children":["Pekin","Quanjou","Harbin","Nankin","Uhan"]},{"name":"Japan","children":["Tokio","Yokogama","Osaka","Hirosima","Nagasaki"]},{"name":"India","children":["Mumbai","Deli","Bengaluru","Koti"]}]}]}')}},[[13,1,2]]]);
//# sourceMappingURL=main.0fe712c6.chunk.js.map