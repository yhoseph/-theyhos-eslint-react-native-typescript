# theyhos-eslint-react-native-typescript

______

**How to use**

Create file or edit 
`eslint.config.mjs`

add the next code
```js
import theyhos from 'the-yhos-eslint-react-native-typescript';

export default [
  ...theyhos,
];
```
_____

**How to add more rules**

Edit file `eslint.config.mjs`

```js
import theyhos from 'the-yhos-eslint-react-native-typescript';

export default [
  ...theyhos,
  { 
    rules:{
        //new rule
    }
  }
];
```