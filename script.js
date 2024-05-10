document.addEventListener('DOMContentLoaded', function() {
  var injectButton = document.getElementById('injectButton');
  var jsCodeInput = document.getElementById('jsCode');

  injectButton.addEventListener('click', function() {
    var jsCode = jsCodeInput.value;
    try {
      // Execute the JavaScript code
      eval(jsCode);
      alert('JavaScript code injected successfully!');
    } catch (error) {
      // Handle errors
      alert('Error injecting JavaScript code: ' + error.message);
    }
  });
});
