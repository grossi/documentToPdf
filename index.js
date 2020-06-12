const libre = require('libreoffice-convert');
const download = require('download');

const path = require('path');
const fs = require('fs');

(async () => { 

  if(!process.argv[2] || !process.argv[3] ) {
    console.log('Please provide the fileUrl and fileName');
    return;
  }
  
  const fileUrl = process.argv[2];
  const fileName = process.argv[3];
  const outputName = process.argv[4] ? process.argv[4] : 'output';
  const filePath = `dist/${fileName}`

  await download(fileUrl, 'dist', { filename: fileName });

  const extend = '.pdf'
  const enterPath = path.join(__dirname, filePath);
  const outputPath = path.join(__dirname, `/${outputName}${extend}`);

  // Read file
  file = fs.readFileSync(enterPath);
  // Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
  libre.convert(file, extend, undefined, (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`);
    }
    
    // Here in done you have pdf file which you can save or transfer in another stream
    fs.writeFileSync(outputPath, done);
  });
})()