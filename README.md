# was-keypress-enter (Node package)
A function to check if a keypress was the return/enter key (either on the numpad or the main keyboard). The function takes an event (generated by a keypress for example) and returns a boolean.

# Usage Example

```javascript
document.getElementById('input-field-one').addEventListener('keydown', function(e) {
  if(wasKeypressEnter(e)) {
    // enter was pressed
  }
  else {
    // a key was pressed but it wasn't enter
  }
});
