# Two ways ENS Resolver

# Installation

`npm i -S ens-resolver`

**Resolver your ENS name or Ethereum Address** ✨

Give it a try!
[DEMO](https://codesandbox.io/s/twowaysensresolver-2usbm)

Happy hacking =)

# Usage
```
import React from "react";
import ReactDOM from "react-dom";
import EnsResolver from "ens-resolver";

// First one from ENS name to ETH address
// Second on from ETH address to ENS name
function App() {
  return (
    <div className="App">
      <h1>Two ways ENS Resolver</h1>
      <EnsResolver lookup="0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359" />
      {/*expected result: ethereumfoundation.eth */}
      <EnsResolver lookup="ethereumfoundation.eth" />
      {/*expected result: 0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359 */}
    </div>
  );
}
```

# Technologies

* **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
* **Test** - _Mocha_ with _Istanbul_ coverage
* **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
* **CI** - _TravisCI_ configuration setup
* **Minify** - Built code will be minified for performance

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.


# License

MIT © X5 Engine
