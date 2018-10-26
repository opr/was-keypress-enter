# was-keypress-enter (Node package)
[![Build Status](https://travis-ci.org/opr/was-keypress-enter.svg?branch=master)](https://travis-ci.org/opr/was-keypress-enter) [![Coverage Status](https://coveralls.io/repos/github/opr/was-keypress-enter/badge.svg?branch=master)](https://coveralls.io/github/opr/was-keypress-enter?branch=master)

A function to check if a keypress was the return/enter key (either on the numpad or the main keyboard). The function takes an event (generated by a keypress for example) and returns a boolean.

# Usage Example in the browser

```html
<input type="text" id="input-field-one" />
```

```javascript
document.getElementById('input-field-one').addEventListener('keydown', function(e) {
  if(wasKeypressEnter(e)) {
    // enter was pressed
  }
  else {
    // a key was pressed but it wasn't enter
  }
});
```
# Usage example in react

```jsx
import wasKeypressEnter from 'was-keypress-enter';

export class CustomUserInput extends React.Component {

    constructor(props) {
      super();
    }
    
    handleClick(e) {
      //the element was clicked
    }
    
    handleKeyPress(e) {
      if(wasKeypressEnter(e) {
        //the keypress was the enter key - do something
      }
    }
    
    render() {
      return (
        <CustomComponent tabIndex="0" onClick={this.handleClick} onKeyPress={this.handleKeyPress} />
      );
    }
}
```
