---
title: Custom Script Examples
sidebar_position: 3
sidebar_label: Examples
slug: examples
---

## Export quotation lines to Excel
This sample script demonstrates how custom scripting can be leveraged to create a export function to the quotation page.
``` js
async function generateExcelSheet() {
    const quotation = await fetchQuotation();  

    const quotationLines = quotation.lines;
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

    const name = `${quotation.quotationNumber}v${quotation.versionNumber}.xlsx`;
    saveWorkbook(workbook, name);
}

async function fetchQuotation(){
    return (await api.fetch(`api/2/quotations/${parameters.quotationId}?include=Lines`)).body;
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
}

const scriptTag = document.createElement('script');
scriptTag.setAttribute('src', 'https://cdn.jsdelivr.net/npm/exceljs@4.3.0/dist/exceljs.min.js');
scriptTag.addEventListener('load', () => { 
    generateExcelSheet();
});
document.body.appendChild(scriptTag);

```