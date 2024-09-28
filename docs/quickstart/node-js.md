---
sidebar_position: 3
---

# Node.js

Learn how to use the API Hat Node.js SDK.

### Installation

To use this library, you need to install it via npm or yarn:

```bash
$ npm install apihat-node
```
```bash
$ yarn add apihat-node
```
### Use the middleware with your Express app
Please ensure you load the necessary JavaScript modules in your `app.js` or `index.js` file.

```js
const express = require("express");
const { useApiHat } = require("apihat-node");

const app = express();
const PORT = 3000;
app.use(express.json());

// Use the API Hat middleware
app.use(useApiHat({
  apiKey: "_YOUR_API_KEY_",       // Replace with your API Hat API key
  projectId: "_YOUR_PROJECT_ID_"  // Replace with your API Hat project ID
}));
```
