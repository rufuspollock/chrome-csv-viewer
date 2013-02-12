(function(document) {
  var state = recline.View.parseQueryString(decodeURIComponent(window.location.search));
  chrome.extension.sendMessage({command: 'getData', url: state.url}, function(response) {
    var records = null;
    try {
      records = recline.Backend.CSV.parseCSV(response);
    } catch(e) {
      console.log(e);
      alert('Failed to parse CSV file ...');
    }
    if (records) {
      makeView({records: records});
    } else {
      document.body.innerHTML = '<pre>' + response + '</pre>';
    }
  });
}(document));

function makeView(datasetInfo) {
  var dataset = new recline.Model.Dataset({
    records: datasetInfo.records
  });
  var views = [
     {
       id: 'grid',
       label: 'Grid', 
       view: new recline.View.SlickGrid({
         model: dataset
       })
     },
     {
       id: 'graph',
       label: 'Graph',
       view: new recline.View.Graph({
         model: dataset
       })
     },
     {
       id: 'map',
       label: 'Map',
       view: new recline.View.Map({
         model: dataset
       })
     }
  ];

  var sidebarViews = [{
    id: 'filterEditor',
    label: 'Filters',
    view: new recline.View.FilterEditor({
      model: dataset
    })
  }];

  this.grid = new recline.View.MultiView({
    el: jQuery('.recline-multiview-here'),
    model: dataset,
    views: views,
    sidebarViews: sidebarViews
  });

  dataset.query({size: Math.min(datasetInfo.records.length - 1, 10000)});
}

