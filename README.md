# Vuetify Clipboard Inputs
Vuetify Text Field and Text Area Components with 'Copy to Clipboard' icon and action.

## Installation
#### Node
Using npm:

```
npm i vuetify-clipboard-input
```

Using yarn:

```
yarn add vuetify-clipboard-input
```

#### Browser

```html
<script src='https://unpkg.com/vuetify-clipboard-input'></script>
```

## Useage
Inside main.js
```javascript
import VuetifyClipboard from 'vuetify-clipboard-input';

Vue.use(VuetifyClipboard);
```
Then in your HTML
```html
<!-- text field -->
<v-clipboard-text-field label='Clipboard Field'/>
<!-- text area -->
<v-clipboard-text-field label='Clipboard Area' textarea/>
```