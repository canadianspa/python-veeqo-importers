(this["webpackJsonpcsc-frontend"]=this["webpackJsonpcsc-frontend"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},192:function(e,t,a){},227:function(e,t,a){},229:function(e,t,a){},231:function(e,t,a){},241:function(e,t){},343:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(191),a(185)),i=a(17),u=(a(192),a(63)),m=a(49),s=a(14),d=(a(195),a(7)),p=a(346),f=a(347),h=a(348),E=a(349),v=a(350),b=a(351),g=a(366),y=a(364),O=a(365),j=a(352);var C=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1];return r.a.createElement(p.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(f.a,{href:"/"},r.a.createElement("img",{className:"logo",src:"/images/csc-logo.png",alt:"logo"})),r.a.createElement(f.a,{href:"/"},"CSC Services"),r.a.createElement(h.a,{onClick:function(){return c(!a)}}),r.a.createElement(E.a,{isOpen:a,navbar:!0},r.a.createElement(v.a,{className:"mr-auto",navbar:!0},r.a.createElement(b.a,{href:"/update"},"Update"),r.a.createElement(b.a,{href:"/import"},"Import"),r.a.createElement(b.a,{href:"/calendar"},"Calendar"),r.a.createElement(g.a,{nav:!0,inNavbar:!0},r.a.createElement(y.a,{nav:!0,caret:!0},"B & Q"),r.a.createElement(O.a,{right:!0},r.a.createElement(j.a,null,r.a.createElement(b.a,{href:"/bandq/turnover"},"Turnover")),r.a.createElement(j.a,null,r.a.createElement(b.a,{href:"/bandq/orderwell"},"Order Well")),r.a.createElement(j.a,null,r.a.createElement(b.a,{href:"/bandq/comparison"},"Sales Comparison")))),r.a.createElement(g.a,{nav:!0,inNavbar:!0},r.a.createElement(y.a,{nav:!0,caret:!0},"Shipping"),r.a.createElement(O.a,{right:!0},r.a.createElement(j.a,null,r.a.createElement(b.a,{href:"/shipping/create"},"Create")),r.a.createElement(j.a,null,r.a.createElement(b.a,{href:"/shipping/items"},"Items")))))))};var S=function(e){var t=e.header,a=e.text,n=e.description;return r.a.createElement("div",{className:"card"},r.a.createElement("label",null,t),r.a.createElement("span",null,a),n&&r.a.createElement("p",null,n))};a(65);var k=function(e){var t=e.children;return r.a.createElement("div",{className:"header"},t)};var w=function(e){var t=e.children;return r.a.createElement("div",{className:"jumbotron"},t)},x=a(353);var _=function(e){var t=e.value,a=e.options,n=e.onChange,c=e.useObjects,l=e.objectTitleKey,o=void 0===l?"name":l,i=e.multiple,u=e.name,m=e.style;return r.a.createElement(x.a,{type:"select",className:"select",name:u,style:m,multiple:!!i,value:t,onChange:function(e){if(c){var t=e.target,r=t.value,l=t.name,i=a.find((function(e){return e[o]===r}));n(i,l)}else n(e)}},a.map((function(e,t){return r.a.createElement("option",{key:t},c?e[o]:e)})))},N=a(354);var T=function(e){var t=e.options,a=e.onSubmit,n=e.useObjects,c=e.optionKey,l=e.children,o=e.inputStyle;return r.a.createElement(N.a,{onSubmit:function(e){e.preventDefault();var r=e.target.elements.option.value;if(r)if(n){var l=t.find((function(e){return e[c]===r}));a(l)}else a(r);else a(t[0])}},r.a.createElement(x.a,{name:"option",type:"select",multiple:!0,style:o},t.map((function(e,t){var a=n?e[c]:e;return r.a.createElement("option",{key:t,value:a},a)}))),l)},D=a(355);var Y=function(e){var t=e.style;return r.a.createElement(D.a,{color:"dark",className:"spinner",style:t})},F=a(39),I=a(38),q=a(181),R=a.n(q);var U=S,M=k,V=w,P=_,A=T,L=Y,B=function(e){var t=e.options,a=e.onChange,c=e.name,l=e.predefinedSuggestions,o=Object(n.useState)(""),i=Object(d.a)(o,2),u=i[0],m=i[1],s=Object(n.useState)([]),p=Object(d.a)(s,2),f=p[0],h=p[1];function E(e){if(""!==u){var n=[].concat(Object(F.a)(t),e?[e]:[u]);a(n,c),m("")}}function v(e){var n=e.currentTarget.id,r=t.filter((function(e,t){return t!==parseInt(n)}));a(r,c)}var b={placeholder:"Email",className:"form-control",value:u,onChange:function(e,t){var a=t.newValue;m(a)},onKeyPress:function(e){"Enter"===e.key&&E(u)}};return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("div",{key:t,className:"multiselect-option"},r.a.createElement("span",null,e),r.a.createElement("button",{id:t,onClick:v},r.a.createElement(I.a,{icon:"times"})))})),r.a.createElement(R.a,{suggestions:f,onSuggestionsFetchRequested:function(e){var t=e.value;h(l.filter((function(e){return e.toLowerCase().includes(t)})))},onSuggestionsClearRequested:function(){return h([])},onSuggestionSelected:function(e,t){return E(t.suggestion)},getSuggestionValue:function(e){return e},renderSuggestion:function(e){return e},inputProps:b}))};var z=function(){return r.a.createElement(V,null,"Welcome to Canadian Spa Services")},W=(a(66),"/api"),H=[{name:"bandq",title:"B&Q"},{name:"homebase",title:"Homebase"},{name:"jtf",title:"JTF"},{name:"wayfair",title:"Wayfair"},{name:"range",title:"The Range"},{name:"travisperkins",title:"Travis Perkins"},{name:"robert_dyas",title:"Robert Dyas"},{name:"hornbach",title:"Hornbach"},{name:"shop_direct",title:"Shop Direct"}],J=[{name:"bandq",title:"B&Q CSV",requires_file:!0,file_type:".csv"},{name:"argos",title:"Argos CSV",requires_file:!0,file_type:".csv"},{name:"range",title:"The Range",requires_file:!1,file_type:null},{name:"homebase",title:"Homebase XML",requires_file:!0,file_type:".xml"},{name:"wayfair",title:"Wayfair CSV",requires_file:!0,file_type:".csv"},{name:"robert_dyas",title:"Robert Dyas CSV",requires_file:!0,file_type:".csv"},{name:"shop_direct",title:"Shop Direct TXT",requires_file:!0,file_type:".txt"},{name:"globus",title:"Globus XML",requires_file:!0,file_type:".xml"},{name:"hornbach",title:"Hornbach PDF",requires_file:!0,file_type:".pdf"}],K=["jasper.haward@canadianspacompany.com","kerry.avis@canadianspacompany.com","grace.wetherall@canadianspacompany.com","phil@canadianspacompany.com","troy.d.labelle@gmail.com","troylabellespa@googlemail.com","warehouseuk@canadianspacompany.com","shippinguk@canadianspacompany.com"];function $(e){if(e.ok)return e.json();throw new Error("Bad response.")}function Q(e){var t=e.start,a=e.end,n="".concat(W,"/bandq/turnover?start=").concat(t,"&end=").concat(a);return fetch(n).then($).catch((function(e){return console.error(e)}))}function X(){var e="".concat(W,"/bandq/orderwell");return fetch(e).then($).catch((function(e){return console.error(e)}))}function G(){var e="".concat(W,"/shipping/items");return fetch(e).then($).catch((function(e){return console.error(e)}))}function Z(){var e="".concat(W,"/shipping/carriers");return fetch(e).then($).catch((function(e){return console.error(e)}))}var ee=a(26),te=function(e,t){return Object(ee.a)(Object(ee.a)({},e),t)};var ae=a(178),ne=a(356);var re=function(e){var t=e.orders,a=e.handleEditClick,n=e.handleCheckboxClick;return r.a.createElement(ne.a,{bordered:!0,striped:!0,responsive:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Address 1"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"County"),r.a.createElement("th",null,"Postcode"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e,t){var c=e.deliver_to_attributes;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(x.a,{type:"checkbox",id:t,defaultChecked:"true",onChange:n})),r.a.createElement("td",null,c.first_name),r.a.createElement("td",null,c.last_name),r.a.createElement("td",null,c.address1),r.a.createElement("td",null,c.city),r.a.createElement("td",null,c.state),r.a.createElement("td",null,c.zip),r.a.createElement("td",null,c.country),r.a.createElement("th",null,r.a.createElement(ae.a,{color:"secondary",size:"sm",id:t,onClick:a},"Edit Address")))}))))};var ce=function(e){var t=e.orders,a=e.file,n=e.handleEditAddressClick,c=e.handleCheckboxClick,l=e.handleImportClick,o=e.setInitialState;return 0===t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,"No orders found"),r.a.createElement(ae.a,{color:"danger",onClick:o},"Back")):r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(M,null,"File: ",a.name),r.a.createElement(re,{orders:t,handleCheckboxClick:c,handleEditClick:n}),r.a.createElement("div",{className:"centered-parent"},r.a.createElement(ae.a,{color:"danger",onClick:o},"Cancel"),r.a.createElement(ae.a,{onClick:l},"Import")))},le=(a(227),a(186));var oe=function(e){var t=e.selectedVendor,a=e.handleFileSubmit,c=Object(n.useCallback)((function(e){e[0]&&a(t.name,e[0])}),[t,a]),l=Object(le.a)({onDrop:c,multiple:!1,accept:t.file_type}),o=l.getRootProps,i=l.getInputProps;return r.a.createElement("div",Object.assign({},o(),{className:"dropzone-container"}),r.a.createElement("input",i()),r.a.createElement("div",{className:"dropzone-content"},r.a.createElement(I.a,{icon:"upload"}),r.a.createElement("span",null,"Click to upload file (",t.file_type,")")))},ie=a(363),ue=a(357),me=a(358);var se=function(e){var t,a,n=e.isOpen,c=e.toggle,l=e.modalType,o=e.addresses,i=e.handleUpdateAddress;return"editAddress"===l&&(t="Select address",a=r.a.createElement(A,{options:o,onSubmit:i,useObjects:!0,optionKey:"summaryline",children:r.a.createElement("div",{className:"button-parent"},r.a.createElement(ae.a,{color:"danger",onClick:c},"Cancel"),r.a.createElement(ae.a,{color:"primary",type:"submit"},"Update"))})),r.a.createElement(ie.a,{isOpen:n},r.a.createElement(ue.a,{toggle:c},t),r.a.createElement(me.a,null,a))},de={activeOrderIndex:null,selectedVendor:J[0]};var pe=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(d.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)([]),p=Object(d.a)(m,2),f=p[0],h=p[1],E=Object(n.useState)([]),v=Object(d.a)(E,2),b=v[0],g=v[1],y=Object(n.useState)(!1),O=Object(d.a)(y,2),j=O[0],C=O[1],S=Object(n.useState)(!0),k=Object(d.a)(S,2),w=k[0],x=k[1],_=Object(n.useState)([]),N=Object(d.a)(_,2),T=N[0],D=N[1],Y=Object(n.useReducer)(te,de),I=Object(d.a)(Y,2),q=I[0],R=I[1],U=function(){return C(!j)};function A(e,t){c(!0),function(e){var t=e.vendor,a=e.file,n="".concat(W,"/import/convert/").concat(t),r={method:"POST"};if(a){var c=new FormData;c.append("file",a),r.body=c}return fetch(n,r).then($).catch((function(e){return console.error(e)}))}({vendor:e,file:t}).then((function(e){c(!1),e.error?s.b.dark("Error getting orders, ensure you are uploading the correct file."):(h(e),u(t),D(e.map((function(e,t){return t}))),x(!1))}))}function B(){R(de),h([]),x(!0)}return r.a.createElement("div",{className:"container"},r.a.createElement(V,null,"Import to Veeqo"),w?r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,"Select data source"),r.a.createElement(P,{options:J,objectTitleKey:"title",onChange:function(e){R({selectedVendor:e}),e.requires_file||A(e.name)},useObjects:!0}),a?r.a.createElement(L,{style:{marginTop:"60px"}}):r.a.createElement(oe,{selectedVendor:q.selectedVendor,handleFileSubmit:A})):r.a.createElement(ce,{orders:f,file:i,handleEditAddressClick:function(e){var t=e.target.id,a=parseInt(t);(function(e){var t=e.postcode,a="".concat(W,"/postcoder?postcode=").concat(t);return fetch(a).then($).catch((function(e){return console.error(e)}))})({postcode:f[a].deliver_to_attributes.zip}).then((function(e){R({activeOrderIndex:a}),g(e),C(!0)}))},handleCheckboxClick:function(e){var t=e.target,a=t.id,n=t.checked,r=parseInt(a);D(n?[].concat(Object(F.a)(T),[r]):T.filter((function(e){return e!==r})))},handleImportClick:function(){s.b.dark("Importing..."),function(e){var t=e.orders,a="".concat(W,"/import/orders"),n={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)};return fetch(a,n).then($).catch((function(e){return console.error(e)}))}({orders:f.filter((function(e,t){return T.includes(t)}))}).then((function(e){s.b.dark("Imported ".concat(e.length," orders")),B()}))},setInitialState:B}),r.a.createElement(se,{isOpen:j,toggle:U,modalType:"editAddress",addresses:b,handleUpdateAddress:function(e){var t=e.premise,a=e.street,n=e.posttown,r=e.county,c=e.postcode,l=f.map((function(e,l){return l===q.activeOrderIndex&&(e.deliver_to_attributes.address1=t+" "+a,e.deliver_to_attributes.city=n,e.deliver_to_attributes.state=r,e.deliver_to_attributes.zip=c),e}));U(),h(l)}}))};var fe=function(){var e=H[0],t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(e),i=Object(d.a)(o,2),u=i[0],m=i[1];return r.a.createElement("div",{className:"container"},r.a.createElement(V,null,"Update Google Spreadsheet"),c?r.a.createElement(L,{style:{width:"70px",height:"70px",marginTop:"50px"}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,"Select Spreadsheet"),r.a.createElement(P,{options:H,objectTitleKey:"title",onChange:m,useObjects:!0}),r.a.createElement(ae.a,{onClick:function(){l(!0),function(e){var t=e.vendor,a="".concat(W,"/update/").concat(t);return fetch(a).then($).catch((function(e){return console.error(e)}))}({vendor:u.name}).then((function(t){t.length>0?s.b.dark("Added ".concat(t.length," order(s)")):s.b.dark("No orders added"),l(!1),m(e)}))}},"Update")))},he=a(36),Ee=(a(114),a(9)),ve=a.n(Ee),be=a(359),ge=a(360);var ye=function(e){var t=e.formState,a=e.onFormChange,n=e.onSubmit,c=e.toggleView,l=t.title,o=t.date,i=t.time,u=t.length;return r.a.createElement("div",{style:{width:"400px"}},r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Title"),r.a.createElement(x.a,{name:"title",type:"text",value:l,onChange:a})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Date"),r.a.createElement(x.a,{type:"date",name:"date",value:o,onChange:a})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Time"),r.a.createElement(x.a,{type:"time",name:"time",value:i,onChange:a})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Length (min)"),r.a.createElement(x.a,{type:"select",name:"length",value:u,onChange:a},r.a.createElement("option",{value:"15"},"15"),r.a.createElement("option",{value:"30"},"30"),r.a.createElement("option",{value:"45"},"45"),r.a.createElement("option",{value:"60"},"60"))),r.a.createElement("div",{className:"centered-parent"},r.a.createElement(ae.a,{color:"danger",onClick:c},"Back"),r.a.createElement(ae.a,{onClick:n},"Create")))};var Oe=function(e){var t=e.formState,a=e.onFormChange,n=e.calendars,c=e.emails,l=e.toggleView,o=t.orderUrl,i=t.calendar,u=t.attendees;return r.a.createElement("div",{className:"event-form"},r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Veeqo Order URL"),r.a.createElement(x.a,{name:"orderUrl",type:"text",placeholder:"URL",value:o,onChange:a})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Select Calendar"),r.a.createElement(P,{name:"calendar",options:n,objectTitleKey:"summary",value:i.summary,onChange:a,useObjects:!0,style:{marginBottom:"10px",width:"250px"}})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Attendees"),r.a.createElement(B,{name:"attendees",options:u,onChange:a,predefinedSuggestions:c})),r.a.createElement(ae.a,{onClick:l},"Next"))},je={orderUrl:"",calendar:null,attendees:[],title:"",date:"",time:"",length:"30"};var Ce=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("initial"),o=Object(d.a)(l,2),i=o[0],u=o[1],m=Object(n.useReducer)(te,je),p=Object(d.a)(m,2),f=p[0],h=p[1],E=Object(n.useState)([]),v=Object(d.a)(E,2),b=v[0],g=v[1],y=Object(n.useState)(null),O=Object(d.a)(y,2),j=O[0],C=O[1];function S(){"initial"===i?function(e){var t=e.orderUrl,a="".concat(W,"/veeqo?url=").concat(t);return fetch(a).then($).catch((function(e){return console.error(e)}))}({orderUrl:f.orderUrl}).then((function(e){w(e,(function(){s.b.dark("Using order ".concat(e.number)),C(e),u("form")}))})):u("initial")}function k(e,t){if(t)h(Object(he.a)({},t,e));else{var a=e.target,n=a.name,r=a.value;h(Object(he.a)({},n,r))}}function w(e,t){e.error?s.b.error(e.message):t(e)}return Object(n.useEffect)((function(){(function(){var e="".concat(W,"/calendar");return fetch(e).then($).catch((function(e){return console.error(e)}))})().then((function(e){k(e[0],"calendar"),g(e),c(!1)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(V,null,"Create Event"),a?r.a.createElement(L,{style:{marginTop:"120px"}}):"initial"===i?r.a.createElement(Oe,{formState:f,onFormChange:k,calendars:b,emails:K,toggleView:S}):r.a.createElement(ye,{formState:f,onFormChange:k,onSubmit:function(){var e=f.calendar,t=f.title,a=f.date,n=f.time,r=f.length,c=f.attendees;if(""!==t&&""!==a&&""!==n){var l="".concat(a," ").concat(n),o=ve()(l,"YYYY-MM-DD HH-mm");(function(e){var t=e.event,a="".concat(W,"/calendar"),n={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)};return fetch(a,n).then($).catch((function(e){return console.error(e)}))})({event:{order:j,calendar:e,attendees:c,title:t,start:o.toISOString(),end:o.add(r,"minutes").toISOString()}}).then((function(e){w(e,(function(){s.b.dark("Event added successfully"),h(Object(ee.a)(Object(ee.a)({},je),{},{calendar:b[0]})),C(null),u("initial")}))}))}else s.b.dark("No inputs may be empty")},toggleView:S}))};a(229);var Se=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(d.a)(l,2),i=o[0],u=o[1],m=ve()().format("YYYY-MM");return r.a.createElement("div",{className:"container"},r.a.createElement(V,null,"Turnover"),r.a.createElement(N.a,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.date.value;t?(u(null),c(!0),Q({start:ve()(t).startOf("month").format("YYYY/MM/DD"),end:ve()(t).endOf("month").format("YYYY/MM/DD")}).then((function(e){u(e),c(!1)}))):s.b.dark("Please select a date")},className:"date-form"},r.a.createElement(M,null,"Select Month"),r.a.createElement(x.a,{type:"month",name:"date",min:"2017-04",max:m}),r.a.createElement(ae.a,{type:"submit"},"Calculate")),a&&r.a.createElement(L,{style:{marginTop:"50px"}}),i&&r.a.createElement("div",{className:"totals-wrapper"},r.a.createElement(U,{header:"Total excluding VAT",text:"\xa3".concat(i.total_ex_vat)}),r.a.createElement(U,{header:"Total including VAT",text:"\xa3".concat(i.total_with_vat)})))},ke=a(32),we=a.n(ke),xe=a(48);a(115);var _e=function(e){var t=e.orders;return r.a.createElement(ne.a,{bordered:!0,striped:!0,size:"sm",id:"orderwell-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Order Number"),r.a.createElement("th",null,"Items"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.date),r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",href:e.url,rel:"noopener noreferrer"},e.id)),r.a.createElement("td",null,e.items.map((function(e,t){return r.a.createElement(n.Fragment,{key:t},t>0&&r.a.createElement("br",null),e)}))))}))))};var Ne=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(d.a)(l,2),i=o[0],u=o[1];function m(){return(m=Object(xe.a)(we.a.mark((function e(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X().then((function(e){u(e),c(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(V,null,"Order Well"),a?r.a.createElement(L,{style:{marginTop:"120px"}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{onClick:function(){var e,t,a=document.getElementById("orderwell-table"),n=document.body;if(document.createRange&&window.getSelection){e=document.createRange(),(t=window.getSelection()).removeAllRanges();try{e.selectNodeContents(a),t.addRange(e)}catch(r){e.selectNode(a),t.addRange(e)}}else n.createTextRange&&((e=n.createTextRange()).moveToElementText(a),e.select());document.execCommand("Copy")}},"Copy"),r.a.createElement(_e,{orders:i})))},Te=(a(231),a(232),a(233),a(183)),De={startDate:null,endDate:null,focusedInput:null};var Ye=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useReducer)(te,De),o=Object(d.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)(null),p=Object(d.a)(m,2),f=p[0],h=p[1],E=Object(n.useState)(null),v=Object(d.a)(E,2),b=v[0],g=v[1];function y(e,t){return O.apply(this,arguments)}function O(){return(O=Object(xe.a)(we.a.mark((function e(t,a){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t).then((function(e){h(e)}));case 2:return e.next=4,Q(a).then((function(e){g(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(xe.a)(we.a.mark((function e(){var t,a,n,r;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.startDate,a=i.endDate,!t||!a){e.next=12;break}return h(null),g(null),c(!0),n={start:t.format("YYYY/MM/DD"),end:a.format("YYYY/MM/DD")},r={start:t.clone().subtract(1,"years").format("YYYY/MM/DD"),end:a.clone().subtract(1,"years").format("YYYY/MM/DD")},e.next=9,y(n,r);case 9:c(!1),e.next=13;break;case 12:s.b.dark("Please select both dates");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"container"},r.a.createElement(V,null,"Sales Comparison"),r.a.createElement(M,null,"Select Date Range"),r.a.createElement(Te.DateRangePicker,{startDate:i.startDate,startDateId:"1",endDate:i.endDate,endDateId:"2",onDatesChange:u,focusedInput:i.focusedInput,onFocusChange:function(e){return u({focusedInput:e})},isOutsideRange:function(e){return e.isBefore(ve()("04/2018","MM/YYYY"))||e.isAfter(ve()())},displayFormat:"DD/MM/YYYY"}),r.a.createElement(ae.a,{onClick:function(){return j.apply(this,arguments)},className:"calc-button"},"Calculate"),a&&r.a.createElement(L,{style:{marginTop:"50px"}}),f&&b&&r.a.createElement("div",{className:"totals-wrapper"},r.a.createElement(U,{header:"Previous Year",text:b.total_with_vat,description:"*With VAT"}),r.a.createElement(U,{header:"Selected Year",text:f.total_with_vat,description:"*With VAT"})))};a(175);var Fe=function(e){var t=e.parcel,a=e.index,n=e.onClick;return r.a.createElement("span",{className:"parcel-box"},r.a.createElement("span",null,t.quantity," x ",t.name),r.a.createElement("button",{className:"icon-button",name:"delete",id:a,onClick:n},r.a.createElement(I.a,{icon:"times"})))};var Ie=function(e){var t,a,c=e.items,l=e.parcels,o=e.updateFormState,i=Object(n.useState)(!1),u=Object(d.a)(i,2),m=u[0],s=u[1],p=function(){return s(!m)},f=Object(n.useRef)(null);function h(e){var t=e.currentTarget,a=t.id,n=t.name,r=Object(ee.a)({},c[a]),i=Object(F.a)(l);if("add"===n){var u=i.findIndex((function(e){return e._id===r._id}));o(function(e,t,a){t>-1?e[t].quantity+=1:e.push(Object(ee.a)(Object(ee.a)({},a),{},{quantity:1}));return e}(i,u,r),"parcels")}else"delete"===n&&o(function(e,t){e[t].quantity>1?e[t].quantity-=1:e.splice(t,1);return e}(i,a),"parcels")}return t=f,a=p,Object(n.useEffect)((function(){function e(e){t.current&&!t.current.contains(e.target)&&a()}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,a]),r.a.createElement("div",{className:"items-select"},r.a.createElement("div",{className:m?"items-bar open":"items-bar"},r.a.createElement("div",{className:"items-container"},l.map((function(e,t){return r.a.createElement(Fe,{key:t,index:t,parcel:e,onClick:h})}))),r.a.createElement("div",{className:"filler"}),r.a.createElement("button",{className:"icon-button",onClick:function(){return o([],"parcels")}},r.a.createElement(I.a,{icon:"times"})),r.a.createElement("button",{className:"icon-button",onClick:p},r.a.createElement(I.a,{icon:"chevron-down"}))),m&&r.a.createElement("div",{className:"items-dropdown",ref:f},c.map((function(e,t){return r.a.createElement("button",{key:t,name:"add",id:t,onClick:h},e.name)}))))},qe=a(361),Re=a(362),Ue=a(184);var Me=function(e){var t=e.formState,a=e.carriers,n=e.onFormChange,c=e.updateFormState;return r.a.createElement(r.a.Fragment,null,r.a.createElement(qe.a,{style:{width:"400px"}},r.a.createElement(Re.a,{addonType:"prepend"},r.a.createElement(Ue.a,null,"URL")),r.a.createElement(x.a,{name:"orderUrl",type:"text",placeholder:"Veeqo Order URL",value:t.orderUrl,onChange:n})),r.a.createElement(M,null,"Select Carrier"),r.a.createElement(P,{name:"carrier",useObjects:!0,options:a,onChange:c}),r.a.createElement(M,null,"Select Service"),r.a.createElement(P,{name:"service",useObjects:!0,options:t.carrier.services,onChange:c}),r.a.createElement(M,null,"Parcels"))},Ve={orderUrl:"",carrier:null,service:null,parcels:[]};var Pe=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useReducer)(te,Ve),o=Object(d.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)([]),p=Object(d.a)(m,2),f=p[0],h=p[1],E=Object(n.useState)([]),v=Object(d.a)(E,2),b=v[0],g=v[1];function y(){return(y=Object(xe.a)(we.a.mark((function e(){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G().then((function(e){g(e)}));case 2:return e.next=4,Z().then((function(e){h(e),j(e)}));case 4:c(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){u(Object(he.a)({},t,e))}function j(e){u(e?Object(ee.a)(Object(ee.a)({},Ve),{},{carrier:e[0],service:e[0].services[0]}):{orderUrl:"",parcels:[]})}return Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(V,null,"Create Shipment"),a?r.a.createElement(L,{style:{marginTop:"120px"}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,{carriers:f,formState:i,updateFormState:O,onFormChange:function(e){var t=e.target,a=t.name,n=t.value;u(Object(he.a)({},a,n))}}),r.a.createElement(Ie,{items:b,parcels:i.parcels,updateFormState:O}),r.a.createElement("h6",null,"Total weight: ",i.parcels.reduce((function(e,t){return e+t.quantity*t.weight}),0)," kg"),r.a.createElement(ae.a,{onClick:function(){var e={shipment:{order_url:i.orderUrl,carrier:i.carrier.code,service:i.service.code,parcels:i.parcels}};(function(){var e=i.parcels,t=i.orderUrl;return e.length>0&&""!==t})()?(s.b.dark("Creating shipment..."),function(e){var t=e.shipment,a="".concat(W,"/shipping/create/"),n={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)};return fetch(a,n).then($).catch((function(e){return console.error(e)}))}(e).then((function(e){var t;e.error?s.b.dark(e.message):(s.b.dark("Created shipment"),j(),t=e.label,window.open("").document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64, "+encodeURI(t)+"'></iframe>"))}))):s.b.dark("Parcels & Veeqo URL cannot be empty")}},"Create")))};a(176);var Ae=function(e){var t=e.item,a=e.onClick,n=e.formState,c=t.name,l=t._id;return r.a.createElement("span",{className:l===n._id?"item-selected item":"item",onClick:function(){return a(t)}},c)};var Le=function(e){var t=e.formState,a=e.onFormChange,n=t.name,c=t.height,l=t.width,o=t.length,i=t.weight;return r.a.createElement(r.a.Fragment,null,r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Name"),r.a.createElement(x.a,{type:"text",name:"name",value:n,onChange:a})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Height (cm)"),r.a.createElement(x.a,{name:"height",type:"number",min:0,value:c,onChange:a})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Width (cm)"),r.a.createElement(x.a,{name:"width",type:"number",min:0,value:l,onChange:a})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Length (cm)"),r.a.createElement(x.a,{name:"length",type:"number",min:0,value:o,onChange:a})),r.a.createElement(be.a,null,r.a.createElement(ge.a,null,"Weight (kg)"),r.a.createElement(x.a,{name:"weight",type:"number",min:0,value:i,onChange:a})))},Be={_id:null,name:"",height:"",width:"",length:"",weight:""};var ze=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(d.a)(l,2),i=o[0],u=o[1],m=Object(n.useReducer)(te,Be),p=Object(d.a)(m,2),f=p[0],h=p[1];function E(e){var t=e.target,a=t.name,n=t.value;h(Object(he.a)({},a,n))}function v(e){var t=e.target.name,a={id:f._id?f._id.$oid:null,item:{name:f.name,height:f.height,width:f.width,length:f.length,weight:f.weight}};(function(){var e=f.name,t=f.height,a=f.width,n=f.length,r=f.weight;return""!==e&&""!==t&&""!==a&&""!==r&&""!==n||(s.b.dark("Form elements cannot be empty."),!1)})()&&("delete"===t?function(e){var t=e.id,a="".concat(W,"/shipping/items?id=").concat(t);return fetch(a,{method:"DELETE"}).then($).catch((function(e){return console.error(e)}))}(a).then((function(e){b(e)})):function(e){var t=e.id,a=e.item,n="".concat(W,"/shipping/items");t&&(n+="?id=".concat(t));var r={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)};return fetch(n,r).then($).catch((function(e){return console.error(e)}))}(a).then((function(e){b(e)})))}function b(e){if(e.error)s.b.dark(e.message);else{var t=Object(F.a)(i);"created"===e.status?(s.b.dark("Created item"),t=function(e,t){return h(t.item),e.push(t.item),e}(t,e)):"updated"===e.status?(s.b.dark("Updated item"),t=function(e,t){var a=i.findIndex((function(e){return e._id.$oid===t.item._id.$oid}));return e[a]=t.item,e}(t,e)):"deleted"===e.status&&(s.b.dark("Deleted item"),t=function(e,t){return e=i.filter((function(e){return e._id.$oid!==t._id})),h(Be),e}(t,e)),u(t)}}return Object(n.useEffect)((function(){G().then((function(e){u(e),c(!1)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(V,null,"Edit Items"),a?r.a.createElement(L,{style:{marginTop:"120px"}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{color:"primary",size:"sm",onClick:function(){h(Be)}},"Create Item"),r.a.createElement("div",{className:"items-menu-container"},r.a.createElement("div",{className:"items-menu"},r.a.createElement(M,null,"Items"),i.map((function(e,t){return r.a.createElement(Ae,{key:t,item:e,onClick:h,formState:f})}))),r.a.createElement("div",{className:"items-form"},f._id?r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,"Edit Item"),r.a.createElement(Le,{formState:f,onFormChange:E}),r.a.createElement("div",{className:"centered-parent"},r.a.createElement(ae.a,{name:"delete",color:"danger",onClick:v},"Delete"),r.a.createElement(ae.a,{name:"update",onClick:v},"Update"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null,"Create Item"),r.a.createElement(Le,{formState:f,onFormChange:E}),r.a.createElement(ae.a,{name:"create",onClick:v},"Create"))))))};var We=function(){return r.a.createElement(V,null,"404 - Page not found")};u.b.add({faUpload:m.f,faPlus:m.c,faPencilAlt:m.b,faTrashAlt:m.e,faTimes:m.d,faChevronDown:m.a});var He=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(o.a,null,r.a.createElement(C,null),r.a.createElement(s.a,{hideProgressBar:!0,autoClose:3e3}),r.a.createElement("div",{className:"wrapper"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:z}),r.a.createElement(i.a,{path:"/update",component:fe}),r.a.createElement(i.a,{path:"/import/",component:pe}),r.a.createElement(i.a,{path:"/calendar/",component:Ce}),r.a.createElement(i.a,{path:"/bandq/turnover",component:Se}),r.a.createElement(i.a,{path:"/bandq/orderwell",component:Ne}),r.a.createElement(i.a,{path:"/bandq/comparison",component:Ye}),r.a.createElement(i.a,{path:"/shipping/create",component:Pe}),r.a.createElement(i.a,{path:"/shipping/items",component:ze}),r.a.createElement(i.a,{component:We})))))};l.a.render(r.a.createElement(He,null),document.getElementById("root"))},65:function(e,t,a){},66:function(e,t,a){}},[[343,1,2]]]);
//# sourceMappingURL=main.1aac0d18.chunk.js.map