# Chrome CSV Extension

Automatically view, graph and explore CSV files in browser.

# Usage

1. Install extension from [webstore][]
2. Check "Allow access to file URLs" in `chrome://extensions` listing
3. Open local or remote csv files in Chrome

[webstore]: https://chrome.google.com/webstore/detail/recline-csv-viewer/ibfcfelnbfhlbpelldnngdcklnndhael

# Some Developer Notes

By default Chrome will download a CSV file to disk. We want to prevent this
default behaviour and handle the CSV file in the extension.

It would be much preferable to simply over-ride the file handler for CSV files
(identified by mimetype or extension). Unfortunately there seems to be no way
to do this at present (see [this issue][issue], and [this thread][thread])).

[issue]: http://code.google.com/p/chromium/issues/detail?id=35070
[thread]: https://groups.google.com/a/chromium.org/forum/?fromgroups=#!topic/chromium-extensions/p2y18CG7zn4

The approach of this extension is therefore:

* Add a click event listeners on each page
* Intercept these if the target file is a CSV (identified crudely by the .csv
  extension)
* Render the CSV in page

# Building

To build the ZIP file for the Chrome webstore do:

    ./make

ZIP file will be in dist

# Copyright & License

Copyright 2012-2013 Rufus Pollock. Note that this utilizes various third-party
libraries which may be differently licensed.

Licensed under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
