# Chrome CSV Extension

Automatically presents CSV files in browser.

# Usage

1. Install extension from [webstore][] (creates no new UI)
2. Check "Allow access to file URLs" in `chrome://extensions` listing
3. Open local or remote csv files in Chrome.

[webstore]: TODO

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
