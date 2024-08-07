/* this script rename de index.csr.html created with ng build 
to be able to deploy the projecto on github page. Also create a 404.html 
file*/

const fs = require("fs");
const path = require("path");

const currentDirectory  = process.cwd();
const sourceFile = path.join(currentDirectory, 'dist', 'fe-project', 'browser');
const destinationFile = path.join(currentDirectory, 'dist', 'fe-project', 'browser');

const content404 = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="refresh" content="0; URL='./index.html'" />
        <script>
        window.location.href = './index.html';
        </script>
    </head>
    <body></body>
    </html>`

fs.rename(path.join(sourceFile, 'index.csr.html'), path.join(destinationFile, 'index.html'), (error) => {
    if(error) {
        throw new Error(error);
    } 
    console.log("file renamed");
});

fs.writeFile(path.join(sourceFile, '404.html'), content404, (error) => {
    if(error) {
        throw new Error(error);
    } 

    console.log("file 404.html created");
})
