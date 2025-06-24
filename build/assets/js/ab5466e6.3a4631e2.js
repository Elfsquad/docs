"use strict";(self.webpackChunkelfsquad=self.webpackChunkelfsquad||[]).push([["42421"],{13936:function(e,t,n){n.r(t),n.d(t,{frontMatter:()=>r,default:()=>p,toc:()=>h,metadata:()=>i,assets:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"extensions/getting-started/customize-the-extension","title":"Customize the extension","description":"In the previous steps you\'ve created a new extension and learned how","source":"@site/docs/extensions/getting-started/customize-the-extension.mdx","sourceDirName":"extensions/getting-started","slug":"/extensions/getting-started/customize-the-extension","permalink":"/docs/extensions/getting-started/customize-the-extension","draft":false,"unlisted":false,"editUrl":"https://github.com/elfsquad/docs/edit/main/docs/extensions/getting-started/customize-the-extension.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Customize the extension","sidebar_position":3,"sidebar_label":"Customize the extension","slug":"./customize-the-extension"},"sidebar":"extensionsSidebar","previous":{"title":"Explore the scaffolded extension","permalink":"/docs/extensions/getting-started/explore-scaffolded-extension"},"next":{"title":"Page actions","permalink":"/docs/extensions/components/page-actions"}}'),s=n(85893),o=n(50065),a=n(90291),l=n(88878);let r={title:"Customize the extension",sidebar_position:3,sidebar_label:"Customize the extension",slug:"./customize-the-extension"},d=void 0,c={},h=[{value:"Step 1: Create an index.html",id:"step-1-create-an-indexhtml",level:2},{value:"import index.js",id:"import-indexjs",level:4},{value:"Display information",id:"display-information",level:4},{value:"Step 2: Update the index.ts",id:"step-2-update-the-indexts",level:2},{value:"imports",id:"imports",level:4},{value:"Context",id:"context",level:4},{value:"Calling the Elfsquad API",id:"calling-the-elfsquad-api",level:4},{value:"Step 3. Update the elfsquadrc.yml",id:"step-3-update-the-elfsquadrcyml",level:2},{value:"Executable type",id:"executable-type",level:4},{value:"Entrypoint",id:"entrypoint",level:4},{value:"Step 4. Update the package.json",id:"step-4-update-the-packagejson",level:2},{value:"Build script",id:"build-script",level:4}];function u(e){let t={code:"code",h2:"h2",h4:"h4",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In the previous steps you've created a new extension and learned how\nan Elfsquad extension is structured. The default extension code however, it not\nthat useful."}),"\n",(0,s.jsx)(t.p,{children:"In this step, you'll learn how to customize the extension and extend your\nElfsquad environment with your own functionality. In the example, you'll make\na simple dialog that displays information about your quotation."}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h2,{id:"step-1-create-an-indexhtml",children:"Step 1: Create an index.html"}),"\n",(0,s.jsxs)(t.p,{children:["Create a new file in the ",(0,s.jsx)(t.code,{children:"src"})," folder and name it ",(0,s.jsx)(t.code,{children:"index.html"}),". This file\nwill be displayed in an iframe in the dialog."]}),"\n",(0,s.jsxs)(a.k,{children:[(0,s.jsxs)(a.B,{highlight:"{3-3}",children:[(0,s.jsx)(t.h4,{id:"import-indexjs",children:"import index.js"}),(0,s.jsxs)(t.p,{children:["Import the ",(0,s.jsx)(t.code,{children:"index.js"})," file. This file will contain the business logic."]})]}),(0,s.jsxs)(a.B,{highlight:"{7-19}",children:[(0,s.jsx)(t.h4,{id:"display-information",children:"Display information"}),(0,s.jsx)(t.p,{children:"This renders the average configuration value and margin, and includes\nplaceholder values. The actual values will be calculated with JavaScript."})]}),(0,s.jsx)(l.default,{language:"html",title:"src/index.html",children:`<html>
<head>
  <script src="index.js"></script>
</head>

<body>
  <table>
    <tbody id="table-body">
      <tr>
        <td>Average configuration value</td>
        <td id="average-configuration-value">...</td>
      </tr>

      <tr>
        <td>Average configuration margin</td>
        <td id="average-configuration-margin">...</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h2,{id:"step-2-update-the-indexts",children:"Step 2: Update the index.ts"}),"\n",(0,s.jsxs)(t.p,{children:["You already have an ",(0,s.jsx)(t.code,{children:"index.ts"})," file in the ",(0,s.jsx)(t.code,{children:"src"})," folder. The current contents\nof this file can be removed."]}),"\n",(0,s.jsxs)(a.k,{children:[(0,s.jsxs)(a.B,{highlight:"{1-1}",children:[(0,s.jsx)(t.h4,{id:"imports",children:"imports"}),(0,s.jsxs)(t.p,{children:["Import the ",(0,s.jsx)(t.code,{children:"api"})," and ",(0,s.jsx)(t.code,{children:"context"})," object from the @elfsquad/custom-scripting package.\nThe API is an abstraction around the JavaScript fetch API, and can be used for interacting\nwith the Elfsquad API."]})]}),(0,s.jsxs)(a.B,{highlight:"{3-3}",children:[(0,s.jsx)(t.h4,{id:"context",children:"Context"}),(0,s.jsx)(t.p,{children:"The context object contains information about the context in which the dialog or action\nis executed, such as the identifier of the viewed entity."})]}),(0,s.jsxs)(a.B,{highlight:"{24-31}",children:[(0,s.jsx)(t.h4,{id:"calling-the-elfsquad-api",children:"Calling the Elfsquad API"}),(0,s.jsxs)(t.p,{children:["This uses the previously imported ",(0,s.jsx)(t.code,{children:"api"})," object to fetch the quotation groups for the quotation\nwith the id, which you've previously retrieved from the ",(0,s.jsx)(t.code,{children:"context"})," object."]})]}),(0,s.jsx)(l.default,{language:"typescript",title:"src/index.ts",children:`import { api, context } from '@elfsquad/custom-scripting';

const { quotationId } = context;

const processQuotationGroups = (quotationGroups: any) => {
const averageConfigurationValue = document.getElementById('average-configuration-value');
const averageConfigurationMargin = document.getElementById('average-configuration-margin');

const totalValue = quotationGroups.reduce((acc: number, group: any) => acc + group.value, 0);
const totalMargin = quotationGroups.reduce((acc: number, group: any) => acc + group.profitMargin, 0);

if (totalValue > 0) {
  averageConfigurationValue!.innerText = (totalValue / quotationGroups.length).toFixed(2);
} else {
  averageConfigurationValue!.innerText = '0.00';
}
if (totalMargin > 0) {
  averageConfigurationMargin!.innerText = (totalMargin / quotationGroups.length).toFixed(2);
} else {
  averageConfigurationMargin!.innerText = '0.00';
}
}

const qp = {
'$filter': \`quotationId eq $\{quotationId}\`,
};

api.fetch('/data/1/quotationgroups?' + new URLSearchParams(qp))
  .then((r: any) => return r.body['value'])
  .then(processQuotationGroups)
  .catch((e: any) => console.error('Error fetching quotation groups:', e));
`})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h2,{id:"step-3-update-the-elfsquadrcyml",children:"Step 3. Update the elfsquadrc.yml"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"elfsquadrc.yml"})," file contains a background action by default. We'll have to change this\nto disable a dialog."]}),"\n",(0,s.jsxs)(a.k,{children:[(0,s.jsxs)(a.B,{highlight:"{12-12}",children:[(0,s.jsx)(t.h4,{id:"executable-type",children:"Executable type"}),(0,s.jsxs)(t.p,{children:["The type of the executable has been changed from ",(0,s.jsx)(t.code,{children:"action"})," to ",(0,s.jsx)(t.code,{children:"dialog"}),"."]})]}),(0,s.jsxs)(a.B,{highlight:"{13-13}",children:[(0,s.jsx)(t.h4,{id:"entrypoint",children:"Entrypoint"}),(0,s.jsxs)(t.p,{children:["The entrypoint has been changed from ",(0,s.jsx)(t.code,{children:"index.js"})," to ",(0,s.jsx)(t.code,{children:"index.html"}),"."]})]}),(0,s.jsx)(l.default,{language:"yml",title:"elfsquadrc.yml",children:`identifier: "example-extension"
page_extensions:
quotation:
  actions:
  - position: right
    color: primary

    names:
      en: Execute

    executable: 
      type: "dialog"
      entrypoint: "index.html"`})]}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.h2,{id:"step-4-update-the-packagejson",children:"Step 4. Update the package.json"}),"\n",(0,s.jsxs)(a.k,{children:[(0,s.jsxs)(a.B,{highlight:"{4-4}",children:[(0,s.jsx)(t.h4,{id:"build-script",children:"Build script"}),(0,s.jsxs)(t.p,{children:["The build script has been updated to copy the ",(0,s.jsx)(t.code,{children:"index.html"})," file to the ",(0,s.jsx)(t.code,{children:"dist"})," folder."]})]}),(0,s.jsx)(l.default,{language:"json",title:"package.json",children:`{
"name": "example-extension",
"scripts": {
  "build": "esbuild src/index.ts --bundle --platform=node --outfile=dist/index.js && cp src/index.html dist/index.html" 
},
"devDependencies": {
  "esbuild": "^0.12.0",
  "typescript": "^4.3.5"
},
"dependencies": {
  "@elfsquad/custom-scripting": "^0.0.5"
}
}`})]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},34643:function(e,t,n){n.d(t,{Z:()=>s});var i=n(85893);function s(e){return(0,i.jsx)(i.Fragment,{children:e.children})}n(67294)},90291:function(e,t,n){n.d(t,{B:()=>a,k:()=>l});var i=n(67294),s=n(34643),o=n(88878);let a=e=>{let{children:t}=e;return i.createElement("div",null,t)},l=e=>{let{children:t}=e,[n,l]=(0,i.useState)(null),[d,c]=(0,i.useState)(""),[h,u]=(0,i.useState)(-1),p=i.Children.toArray(t).filter(e=>i.isValidElement(e)),x=p.find(e=>e.type===o.default||e.type===s.Z),g=p.filter(e=>e.type===a),m=i.useRef(null),f=g.map(()=>i.useRef(null)),j=()=>{if(!m.current)return;let e=m.current.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;l(Math.floor(Math.max(0,Math.min(e.bottom,t)-Math.max(e.top,0)))-32)},v=e=>{var t;if(!(null==(t=g[e])?void 0:t.props.highlight)||e<0||e>=g.length||e==h||(u(e),c(g[e].props.highlight),!m.current))return;let n=m.current.getElementsByClassName("theme-code-block-highlighted-line");n.length>0&&setTimeout(()=>{m.current&&(m.current.scrollTop=n[0].offsetTop-24)},200)},y=()=>{let e=window.scrollY+r(),t=f.findIndex(t=>!!t.current&&t.current.offsetTop>e);t!=h&&v(t)};return(0,i.useEffect)(()=>(j(),window.removeEventListener("scroll",y),window.addEventListener("scroll",y,{passive:!0}),v(0),()=>window.removeEventListener("scroll",y)),[]),i.createElement("div",{className:"codedoc-container"},i.createElement("div",null,g.map((e,t)=>i.createElement("div",{key:t,ref:f[t],className:`codedoc-section ${h==t?"active":""}`,onClick:()=>v(t)},i.createElement(a,Object.assign({},e.props))))),i.createElement("div",{ref:m,style:{height:`${n}px`,top:`${r()}px`},className:"codedoc-code-container"},x&&i.createElement(o.default,Object.assign({},x.props,{metastring:d,key:d}))))},r=()=>{if("undefined"==typeof getComputedStyle)return 0;let e=getComputedStyle(document.documentElement).getPropertyValue("--ifm-navbar-height");return e?e.includes("px")?parseInt(e.replace("px","")):e.includes("rem")?Math.floor(parseInt(e.replace("rem",""))*parseFloat(getComputedStyle(document.documentElement).fontSize)):0:0}}}]);