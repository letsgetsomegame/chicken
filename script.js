document.addEventListener('DOMContentLoaded', function() {
  var injectButton = document.getElementById('injectButton');
  var jsCodeInput = document.getElementById('jsCode');

  injectButton.addEventListener('click', function() {
    var jsCode = jsCodeInput.value;
    
    // Open a new tab
    chrome.tabs.create({ url: 'about:blank' }, function(tab) {
      // Inject JavaScript code into the new tab
      chrome.tabs.executeScript(tab.id, { code: jsCode }, function() {
        alert('JavaScript code injected successfully in a new tab!');
      });
    });
  });
});
