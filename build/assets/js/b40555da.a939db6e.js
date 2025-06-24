"use strict";(self.webpackChunkelfsquad=self.webpackChunkelfsquad||[]).push([["22561"],{26823:function(e,t,o){o.r(t),o.d(t,{frontMatter:()=>c,default:()=>x,toc:()=>u,metadata:()=>i,assets:()=>h,contentTitle:()=>d});var i=JSON.parse('{"id":"customization/examples/excel-export","title":"\uD83D\uDCCA Quotation Excel Export","description":"The quotation excel export script allows you to export quotation lines to an Excel file. The script fetches the quotation lines using the Data API and creates an Excel file with the lines. The file is then downloaded to the user\'s device when the link is clicked.","source":"@site/docs/customization/examples/excel-export.mdx","sourceDirName":"customization/examples","slug":"/customization/examples/quotation-excel-export","permalink":"/docs/customization/examples/quotation-excel-export","draft":false,"unlisted":false,"editUrl":"https://github.com/elfsquad/docs/edit/main/docs/customization/examples/excel-export.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"\uD83D\uDCCA Quotation Excel Export","sidebar_position":2,"sidebar_label":"Quotation Excel Export","slug":"./quotation-excel-export","hide_table_of_contents":true},"sidebar":"customizationSidebar","previous":{"title":"Overview","permalink":"/docs/customization/examples/"}}'),n=o(85893),a=o(50065),l=o(83012),r=o(88878),s=o(90291);let c={title:"\uD83D\uDCCA Quotation Excel Export",sidebar_position:2,sidebar_label:"Quotation Excel Export",slug:"./quotation-excel-export",hide_table_of_contents:!0},d="Quotation Excel Export",h={},u=[{value:"1. Load the ExcelJS library",id:"1-load-the-exceljs-library",level:3},{value:"2. Fetch quotation data",id:"2-fetch-quotation-data",level:3},{value:"3. Create the Excel sheet",id:"3-create-the-excel-sheet",level:3},{value:"4. Download the Excel file",id:"4-download-the-excel-file",level:3},{value:"Result",id:"result",level:3}];function p(e){let t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(s.k,{children:[(0,n.jsxs)(s.B,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"quotation-excel-export",children:"Quotation Excel Export"})}),(0,n.jsx)(t.p,{children:"The quotation excel export script allows you to export quotation lines to an Excel file. The script fetches the quotation lines using the Data API and creates an Excel file with the lines. The file is then downloaded to the user's device when the link is clicked."}),(0,n.jsx)(l.default,{className:"button button--primary",to:"https://ems.elfsquad.io/?action=installScript&actionArgs=quotation.export,Download Excel,quotation,download,Quotation Excel Export,https://raw.githubusercontent.com/Elfsquad/custom-script-examples/main/excel-export/script.js",children:"Install script"})]}),(0,n.jsxs)(s.B,{highlight:"{1-6}",children:[(0,n.jsx)(t.h3,{id:"1-load-the-exceljs-library",children:"1. Load the ExcelJS library"}),(0,n.jsxs)(t.p,{children:["We start by loading the ExcelJS library from a CDN. ExcelJS is a library that allows us to create and manipulate Excel files in JavaScript. We use the ",(0,n.jsx)(t.code,{children:"addEventListener"})," method to wait for the library to be loaded before we start using it."]}),(0,n.jsxs)(t.p,{children:["When the library is loaded, we call the ",(0,n.jsx)(t.code,{children:"generateExcelSheet"})," function to create the Excel sheet."]}),(0,n.jsxs)(t.p,{children:["For more information about ExcelJS, you can visit the ",(0,n.jsx)(t.a,{href:"https://github.com/exceljs/exceljs",children:"official documentation"}),"."]})]}),(0,n.jsxs)(s.B,{highlight:"{9-10,28-30,32-34}",children:[(0,n.jsx)(t.h3,{id:"2-fetch-quotation-data",children:"2. Fetch quotation data"}),(0,n.jsxs)(t.p,{children:["From within our main ",(0,n.jsx)(t.code,{children:"generateExcelSheet"})," function, we start with loading the quotation data."]}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"fetchQuotation"})," and ",(0,n.jsx)(t.code,{children:"fetchQuotationLines"})," functions leverage the Data API to filter the quotation lines by the quotation ID. The Data API implements the ",(0,n.jsx)(t.a,{href:"https://www.odata.org/getting-started/",children:"OData specification"}),", which allows us to filter data using the ",(0,n.jsx)(t.code,{children:"$filter"})," query parameter."]}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"fetchQuotationLines"})," function uses a helper function ",(0,n.jsx)(t.code,{children:"fetchAll"})," to fetch paginated results. By default the response is limited to 500 result items."]}),(0,n.jsxs)(t.p,{children:["For more information about the Data API, you can visit the ",(0,n.jsx)(t.a,{href:"/docs/apis/data-api",children:"data integration page"}),"."]})]}),(0,n.jsxs)(s.B,{highlight:"{12-24}",children:[(0,n.jsx)(t.h3,{id:"3-create-the-excel-sheet",children:"3. Create the Excel sheet"}),(0,n.jsx)(t.p,{children:"We create a new Excel workbook and add a worksheet named 'Lines'. We then add a table to the worksheet with the columns 'Code', 'Description', and 'Quantity'."}),(0,n.jsx)(t.p,{children:"The table data is populated with the quotation lines fetched in the previous step."})]}),(0,n.jsxs)(s.B,{highlight:"{47-59}",children:[(0,n.jsx)(t.h3,{id:"4-download-the-excel-file",children:"4. Download the Excel file"}),(0,n.jsxs)(t.p,{children:["Finally, we save the workbook as an Excel file. We use the ",(0,n.jsx)(t.code,{children:"writeBuffer"})," method to write the workbook to a buffer. We then create a Blob object from the buffer and create a download link."]}),(0,n.jsxs)(t.p,{children:["When the link is clicked, the Excel file is downloaded to the user's device. We use the ",(0,n.jsx)(t.code,{children:"revokeObjectURL"})," method to release the object URL and remove the download link from the DOM."]})]}),(0,n.jsxs)(s.B,{children:[(0,n.jsx)(t.h3,{id:"result",children:"Result"}),(0,n.jsxs)(t.p,{children:["The code above will generate an Excel file with the quotation lines. The file will be downloaded to the user's device when the link is clicked.\n",(0,n.jsx)(t.img,{alt:"Export to Excel",src:o(49554).Z+"",width:"1598",height:"814"})]})]}),(0,n.jsx)(r.default,{language:"js",children:`const scriptTag = document.createElement('script');
scriptTag.setAttribute('src', 'https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js');
scriptTag.addEventListener('load', () => { 
  generateExcelSheet();
});
document.body.appendChild(scriptTag);

async function generateExcelSheet() {
  const quotation = await fetchQuotation();  
  const quotationLines = await fetchQuotationLines();

  const tableData = quotationLines
      .map(l => [ l.articleCode, l.description, l.quantityAmount ]);
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Lines');
  worksheet.addTable({
      name: 'Lines',
      ref: 'A1',
      headerRow: true,
      style: {
      },
      columns: ['Code', 'Description', 'Quantity'].map(n => ({name: n, filterButton: true})),
      rows: tableData,
  });
  const name = \`$\{quotation.quotationNumber}v\${quotation.versionNumber}.xlsx\`;
  saveWorkbook(workbook, name);
}
async function fetchQuotation(){
  return (await api.fetch(\`data/1/quotations/\${parameters.quotationId}\`)).body;
}

async function fetchQuotationLines() {
  return await fetchAll(\`data/1/quotationlines?\\$filter=quotationId eq \${parameters.quotationId}\`);
}

async function fetchAll(url) {
  let nextUrl = url;
  let result = [ ];
  while(nextUrl) {
      let response = await api.fetch(nextUrl);
      result.push(...response.body.value);
      nextUrl = response.body['@odata.nextLink'];
  }
  return result;
}

function saveWorkbook(workbook, name){
  workbook.xlsx.writeBuffer().then(function (data) {
      var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.setAttribute("href", url);
      a.setAttribute("download", name);
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
  });
}`})]})}function x(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},49554:function(e,t,o){o.d(t,{Z:()=>i});let i=o.p+"assets/images/excel-export-b75c9e125aa979fb660bb56e41dd3e0d.gif"},34643:function(e,t,o){o.d(t,{Z:()=>n});var i=o(85893);function n(e){return(0,i.jsx)(i.Fragment,{children:e.children})}o(67294)},90291:function(e,t,o){o.d(t,{B:()=>l,k:()=>r});var i=o(67294),n=o(34643),a=o(88878);let l=e=>{let{children:t}=e;return i.createElement("div",null,t)},r=e=>{let{children:t}=e,[o,r]=(0,i.useState)(null),[c,d]=(0,i.useState)(""),[h,u]=(0,i.useState)(-1),p=i.Children.toArray(t).filter(e=>i.isValidElement(e)),x=p.find(e=>e.type===a.default||e.type===n.Z),f=p.filter(e=>e.type===l),m=i.useRef(null),w=f.map(()=>i.useRef(null)),b=()=>{if(!m.current)return;let e=m.current.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;r(Math.floor(Math.max(0,Math.min(e.bottom,t)-Math.max(e.top,0)))-32)},g=e=>{var t;if(!(null==(t=f[e])?void 0:t.props.highlight)||e<0||e>=f.length||e==h||(u(e),d(f[e].props.highlight),!m.current))return;let o=m.current.getElementsByClassName("theme-code-block-highlighted-line");o.length>0&&setTimeout(()=>{m.current&&(m.current.scrollTop=o[0].offsetTop-24)},200)},E=()=>{let e=window.scrollY+s(),t=w.findIndex(t=>!!t.current&&t.current.offsetTop>e);t!=h&&g(t)};return(0,i.useEffect)(()=>(b(),window.removeEventListener("scroll",E),window.addEventListener("scroll",E,{passive:!0}),g(0),()=>window.removeEventListener("scroll",E)),[]),i.createElement("div",{className:"codedoc-container"},i.createElement("div",null,f.map((e,t)=>i.createElement("div",{key:t,ref:w[t],className:`codedoc-section ${h==t?"active":""}`,onClick:()=>g(t)},i.createElement(l,Object.assign({},e.props))))),i.createElement("div",{ref:m,style:{height:`${o}px`,top:`${s()}px`},className:"codedoc-code-container"},x&&i.createElement(a.default,Object.assign({},x.props,{metastring:c,key:c}))))},s=()=>{if("undefined"==typeof getComputedStyle)return 0;let e=getComputedStyle(document.documentElement).getPropertyValue("--ifm-navbar-height");return e?e.includes("px")?parseInt(e.replace("px","")):e.includes("rem")?Math.floor(parseInt(e.replace("rem",""))*parseFloat(getComputedStyle(document.documentElement).fontSize)):0:0}}}]);