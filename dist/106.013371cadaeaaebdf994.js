"use strict";(self.webpackChunkhealthcare_application_e_portfolio=self.webpackChunkhealthcare_application_e_portfolio||[]).push([[106],{2953:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(6540),s=n(6942),i=n.n(s),a=n(2279),o=n(6121),l=n(5006),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function d(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const p=["xs","sm","md","lg","xl","xxl"];const u=r.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:s}=r.useContext(a.QO),{gutter:u,wrap:m}=r.useContext(o.A),{prefixCls:h,span:f,order:g,offset:y,push:x,pull:b,className:v,children:j,flex:w,style:$}=e,O=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),k=n("col",h),[A,I,N]=(0,l.xV)(k),C={};let S={};p.forEach((t=>{let n={};const r=e[t];"number"==typeof r?n.span=r:"object"==typeof r&&(n=r||{}),delete O[t],S=Object.assign(Object.assign({},S),{[`${k}-${t}-${n.span}`]:void 0!==n.span,[`${k}-${t}-order-${n.order}`]:n.order||0===n.order,[`${k}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${k}-${t}-push-${n.push}`]:n.push||0===n.push,[`${k}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${k}-rtl`]:"rtl"===s}),n.flex&&(S[`${k}-${t}-flex`]=!0,C[`--${k}-${t}-flex`]=d(n.flex))}));const F=i()(k,{[`${k}-${f}`]:void 0!==f,[`${k}-order-${g}`]:g,[`${k}-offset-${y}`]:y,[`${k}-push-${x}`]:x,[`${k}-pull-${b}`]:b},v,S,I,N),R={};if(u&&u[0]>0){const e=u[0]/2;R.paddingLeft=e,R.paddingRight=e}return w&&(R.flex=d(w),!1!==m||R.minWidth||(R.minWidth=0)),A(r.createElement("div",Object.assign({},O,{style:Object.assign(Object.assign(Object.assign({},R),$),C),className:F,ref:t}),j))}))},106:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(6540),s=n(5448),i=n(5147),a=n(2953),o=n(1343);const l=n.p+"images/curated_notes.png",c=n.p+"images/git.png",d=n.p+"images/figma.png",p=n.p+"images/kotlin.png",u=n.p+"images/compose.png";var m=n(4848);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,i,a,o=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);l=!0);}catch(e){c=!0,s=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw s}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var g=s.A.Content,y=s.A.Sider;function x(){var e=h((0,r.useState)("1"),2),t=e[0],n=e[1];function f(e,t){return{key:t,label:e}}var x=[f("Overall Reflection","1"),f("Certifications","2"),f("Curated Notes","3")];return(0,m.jsx)(s.A,{className:"layout",children:(0,m.jsx)(g,{className:"context-box",style:{padding:"64px"},children:(0,m.jsxs)(s.A,{style:{padding:"24px",background:"#D0DDD0",borderRadius:24,height:"70vh"},children:[(0,m.jsx)(y,{style:{background:"#FFFFFF",borderRadius:16},children:(0,m.jsx)(o.A,{defaultSelectedKeys:["1"],selectedKeys:[t],onClick:function(e){n(e.key)},items:x,style:{padding:"16px 0px",background:"#FFFFFF",borderRadius:16}})}),(0,m.jsx)(g,{style:{padding:"0 24px",minHeight:280},children:function(){switch(t){case"1":return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Overall Reflection"}),(0,m.jsx)("p",{children:"This project has been an enriching experience that has contributed to my technical skills, problem-solving capabilities, and personal growth. When I first started, I had limited coding experiences and a lot of uncertainties ahead. However, through determination and consistency, I have since learnt a lot about Mobile Application Development in Kotlin and Jetpack Compose, which has provided me with a solid foundation in preparation for WorldSkills Singapore 2025. One of the most significant lessons I learned was the importance of adaptability and resilience. I’ve always been so afraid of finding my own solutions to debugging because I’m worried that it will take days and get me nowhere. However, even if it does take a long time, developing an independent understanding is essential in progressing as a programmer. I should not solely rely on the solutions provided by Google, but I should learn how to solve my own problems with my own methods. Overcoming these challenges will help me be more versatile in my area of expertise and help me better navigate complex environments. Likewise, I should remain open-minded in my tools and explore in order to stay relevant in this constantly evolving IT field. I also surprised myself with my persistence in emphasising understanding over memorisation because there were so many instances where I could have given up but I still followed through. I would say that my planning and time management also played a crucial role in balancing this project with my other academic commitments. I am proud of my progress and look forward to representing Temasek Polytechnic at the WorldSkills Singapore 2025 Competition."})]});case"2":return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Certifications"}),(0,m.jsxs)(i.A,{children:[(0,m.jsx)(a.A,{span:6,className:"column",children:(0,m.jsx)("img",{src:c,alt:"git",className:"cert"})}),(0,m.jsx)(a.A,{span:6,className:"column",children:(0,m.jsx)("img",{src:d,alt:"figma",className:"cert"})}),(0,m.jsx)(a.A,{span:6,className:"column",children:(0,m.jsx)("img",{src:p,alt:"kotlin",className:"cert"})}),(0,m.jsx)(a.A,{span:6,className:"column",children:(0,m.jsx)("img",{src:u,alt:"compose",className:"cert"})})]})]});case"3":return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Curated Notes"}),(0,m.jsxs)(i.A,{children:[(0,m.jsx)(a.A,{span:6,children:(0,m.jsx)("p",{children:"After completing this guided learning project, I set up a local online learning system on the Obsidian productivity platform, organising notes on everything I've learned to make it easier to review and memorise before the WorldSkills competition."})}),(0,m.jsx)(a.A,{span:18,className:"column",children:(0,m.jsx)("img",{src:l,alt:"curated-notes",className:"curated-notes"})})]})]});default:return(0,m.jsx)("div",{children:"Select a tab to see content"})}}()})]})})})}}}]);
//# sourceMappingURL=106.013371cadaeaaebdf994.js.map