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

The basic approach of this extension is therefore:

* Add a click event listeners on each page
* Intercept these if the target file is a CSV (identified crudely by the .csv
  extension)
* Render the CSV in page

It would be much preferable to simply over-ride the file handler for CSV files
(identified by mimetype or extension).  <strike>Unfortunately there seems to be no way
to do this at present (see [this issue][issue], and [this
thread][thread])).</strike> With the new(ish) chrome [webrequest
API][webrequest] this is now possible. In particular:

1. Listen to onBeforeRequest (this has to be in a background script - see background.js)
2. Check if this is a CSV file (mimetype or file extension)
3. Display the data in a tab

A partially working version of this can be found in the current version of the
extension (step 3 is not yet fully implemented).

[webrequest]: https://developer.chrome.com/extensions/webRequest.html
[issue]: http://code.google.com/p/chromium/issues/detail?id=35070
[thread]: https://groups.google.com/a/chromium.org/forum/?fromgroups=#!topic/chromium-extensions/p2y18CG7zn4

