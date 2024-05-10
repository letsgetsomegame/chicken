document.addEventListener('DOMContentLoaded', function() {
  var injectButton = document.getElementById('injectButton');
  var jsCodeInput = document.getElementById('jsCode');

  injectButton.addEventListener('click', function() {
    var jsCode = jsCodeInput.value;

    // Open a new tab
    chrome.tabs.create({ url: 'about:blank' }, function(tab) {
      // Execute JavaScript code after 5 seconds
      setTimeout(function() {
        chrome.tabs.executeScript(tab.id, { code: jsCode }, function() {
          alert('First execution: JavaScript code injected successfully in a new tab!');
        });
      }, 5000);

      // Execute JavaScript code again after 10 seconds (5-second delay + 5-second interval)
      setTimeout(function() {
        chrome.tabs.executeScript(tab.id, { code: jsCode }, function() {
          alert('Second execution: JavaScript code injected successfully in a new tab!');
        });
      }, 10000);
    });
  });
});
