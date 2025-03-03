const fs = require('fs');
const path = 'docs/spec/data/sidebar.ts';

const regex = /.*\{\n.*type: "category",\n.*label: "UNTAGGED"((.|\n)*)\}((.|\n)*)\},/gm;

fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const updatedData = data.replace(regex, '');

    fs.writeFile(path, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File updated successfully.');
        }
    });
});
