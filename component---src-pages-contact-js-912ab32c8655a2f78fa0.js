"use strict";(self.webpackChunkshadepro_gatsby=self.webpackChunkshadepro_gatsby||[]).push([[501],{6594:function(e,t,a){var r=a(5774),c=a(1245),l=a(9784),n=a(5900),m=a.n(n),s=a(7294),i=a(1118),o=a(9541),d=a(5893),b=["as","bsPrefix","variant","size","active","className"];function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=s.forwardRef((function(e,t){var a=e.as,r=e.bsPrefix,n=e.variant,s=e.size,g=e.active,p=e.className,f=(0,l.Z)(e,b),h=(0,o.vE)(r,"btn"),E=(0,i.FT)(u({tagName:a},f)),x=(0,c.Z)(E,2),N=x[0],y=x[1].tagName;return(0,d.jsx)(y,u(u(u({},f),N),{},{ref:t,className:m()(p,h,g&&"active",n&&"".concat(h,"-").concat(n),s&&"".concat(h,"-").concat(s),f.href&&f.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=p},3937:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),c=a(1350),l={theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta",buttonText:"Contact"},n={theme:"dark",style:"style1"},m=function(e){var t=e.children,a=e.headerConfig,m=void 0===a?null:a,s=e.footerConfig,i=void 0===s?null:s,o=(0,r.useContext)(c.Z);return(0,r.useEffect)((function(){o.themeDark?(o.setHeader(Object.assign({},l,m,{theme:"dark"})),o.setFooter(Object.assign({},n,i,{theme:"dark"}))):(o.setHeader(Object.assign({},l,m)),o.setFooter(Object.assign({},n,i)))}),[o.themeDark,m,i]),r.createElement(r.Fragment,null,t)}},262:function(e,t,a){a.r(t);var r=a(7294),c=a(6187),l=a(994),n=a(7408),m=a(6594),s=a(3937);t.default=function(){return r.createElement(r.Fragment,null,r.createElement(s.Z,{headerConfig:{align:"right",button:"cta"}},r.createElement("div",{className:"inner-banner pt-29 pb-md-11 bg-default-2"},r.createElement(c.Z,null,r.createElement(l.Z,{className:"justify-content-center pt-5"},r.createElement(n.Z,{lg:"9",xl:"8"},r.createElement("div",{className:"px-md-15 text-center"},r.createElement("h2",{className:"title gr-text-2 mb-9 heading-color"},"Contact us"),r.createElement("p",{className:"gr-text-8 mb-13 text-color-opacity"},"Get in touch with us!")))))),r.createElement("div",{className:"pb-5 pb-md-33 bg-default-2 "},r.createElement(c.Z,null,r.createElement(l.Z,{className:"justify-content-center"},r.createElement(n.Z,{xs:"12",className:"mb-9"},r.createElement(l.Z,null,r.createElement(n.Z,{md:"5",lg:"4",className:"mb-13"},r.createElement("div",{className:"single-contact-widget d-flex"},r.createElement("div",{className:"widget-icon circle-sm-2 bg-white gr-text-6 text-primary me-7"},r.createElement("i",{className:"icon icon-phone-2"})),r.createElement("div",{className:"widget-text"},r.createElement("h3",{className:"gr-text-6 mb-5 heading-color"},"Chat"),r.createElement("p",{className:"gr-text-7 mb-0 text-color-opacity"},r.createElement("a",{href:"https://discord.gg/MaUQuSGSbJ"},"Discord Server"))))),r.createElement(n.Z,{md:"5",lg:"4",className:"mb-13"},r.createElement("div",{className:"single-contact-widget d-flex"},r.createElement("div",{className:"widget-icon circle-sm-2 bg-white gr-text-6 text-primary me-7"},r.createElement("i",{className:"icon icon-pin-3-2"})),r.createElement("div",{className:"widget-text"},r.createElement("h3",{className:"gr-text-6 mb-5 heading-color"},"Tweet"),r.createElement("p",{className:"gr-text-7 mb-0 text-color-opacity"},r.createElement("a",{href:"https://twitter.com/b4racer"},"Twitter"))))))),r.createElement(n.Z,{xs:"12"},r.createElement("div",{className:"login-form bg-white border-gray-3 px-8 pt-8 pb-9 px-sm-11 py-sm-11 shadow-1 rounded-10"},r.createElement("form",{name:"contact2",method:"post","data-netlify":"true","data-netlify-honeypot":"bot-field",action:"https://formspree.io/f/xyyoyrwv"},r.createElement("input",{type:"hidden",name:"form-name",value:"contact2"}),r.createElement(l.Z,null,r.createElement(n.Z,{md:"6"},r.createElement("div",{className:"form-group mb-7"},r.createElement("label",{htmlFor:"name",className:"gr-text-11 fw-bold text-blackish-blue"},"First & Last Name"),r.createElement("input",{className:"form-control gr-text-11 border mt-3 bg-white",type:"text",id:"name",name:"name",placeholder:"i.e. John Doe",required:!0}))),r.createElement(n.Z,{md:"6"},r.createElement("div",{className:"form-group mb-7"},r.createElement("label",{htmlFor:"email",className:"gr-text-11 fw-bold text-blackish-blue"},"Email"),r.createElement("input",{className:"form-control gr-text-11 border mt-3 bg-white",type:"text",id:"email",name:"email",placeholder:"i.e. john@mail.com",required:!0}))),r.createElement(n.Z,{md:"12"},r.createElement("div",{className:"form-group mb-7"},r.createElement("label",{htmlFor:"subject",className:"gr-text-11 fw-bold text-blackish-blue"},"Subject"),r.createElement("input",{className:"form-control gr-text-11 border mt-3 bg-white",type:"text",id:"subject",name:"subject",placeholder:"i.e. I need a help",required:!0}))),r.createElement(n.Z,{md:"12"},r.createElement("div",{className:"form-group mb-7"},r.createElement("label",{htmlFor:"message",className:"gr-text-11 fw-bold text-blackish-blue"},"Message"),r.createElement("textarea",{id:"message",name:"message",className:"form-control gr-text-11 border-gray-3 gr-textarea-height mt-3 bg-white",required:!0}))),r.createElement(n.Z,{xs:"3"},r.createElement("div",{className:"form-group button-block mt-3 "},r.createElement(m.Z,{className:"form-btn btn btn-primary w-100",type:"submit"},"Send"))))))))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-912ab32c8655a2f78fa0.js.map