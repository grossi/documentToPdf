# documentToPdf

A simple program that downloads a file from url and converts it into pdf.

It uses libreoffice, which must be installed on your system for it to work.

It supports all formats that libreoffice supports.

## API

### $ node index.js fileUrl fileName outputName?

It downloads the file from the url provided and converts it to pdf.

#### fileUrl

Type: `string`

URL to download.

#### fileName

Type: `string`

Name of the file, must contain the file extension.

#### outputName

Type: `string`

The name of the output file, the default being output.pdf



