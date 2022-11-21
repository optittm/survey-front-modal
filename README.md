# OTTM User feedback Library

Library used to get user feedback on a specific functionality for a company  monitoring his applications through OTTM.
The feedback is get by a modal where the user is invited to give a rating and a comment on the functionnality currently used.

# Install via npm

In order to install the library, you need to have npm install. Then, run the following command: 
```
npm install ottm-modal-feedback
```

# Usage 

You can initialize the dependancy through importing the bundle.js from the npm dependancy :
2. In Pure JS :

Modify your `index.html` to add at the end of `body` tag :
```
    <script id="ottmModal" data-api-url="http://localhost:8080" type="text/javascript"
        src="./node_modules/ottm-modal-feedback/dist/bundle.js"></script>
    <script>
        window.ModalOttm.launch(urlFeature);
    </script>
```

2. In Angular :

Add to your `src/index.html` :
```
    <script id="ottmModal" data-api-url="http://localhost:8080" type="text/javascript"
        src="ottm-modal-feedback.js"></script>
    <script>
        window.ModalOttm.launch(urlFeature);
    </script>
```
And add to the `angular.json` in the `scripts` element :
```
"scripts": [
    ...
    {
        "input": "node_modules/ottm-modal-feedback/dist/bundle.js",
        "inject": false,
        "bundleName": "ottm-modal-feedback"
    }
]
```

3. In other JS Framework like React :

Add to your `index.html` :
```
<script id="ottmModal" data-api-url="http://localhost:8080" type="text/javascript"></script>
```
Add to your `src/index.js` | `script.js` :
```
import 'ottm-modal-feedback';
...
window.ModalOttm.launch(urlFeature);
```

***

Where **urlFeature** is the url of the functionnality (web page where the script will be inserted ) you want to monitore.

# Todos

- Give the possibility to the user to custom the modal with is own graphic chart. 

# Licence 

MIT 

