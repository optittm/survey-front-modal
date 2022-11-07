# OTTM User feedback Library

Library used to get user feedback on a specific functionality for a company  monitoring his applications through OTTM.
The feedback is get by a modal where the user is invited to give a rating and a comment on the functionnality currently used.

# Install via npm

In order to install the library, you need to have npm install. Then, run the following command: 
```
npm install ottm-modal-feedback
```

# Usage 

Initialize the plugin by referencing the necessary files:
```
    <script id="ottmModal" data-api-url="http://localhost:8080" type="text/javascript" src="./dist/bundle.js" ></script>
    <script>
        window.ModalOttm.launch(projectId, urlFeature);
    </script>
```

where projectId is the dd given on the OTTM admin panel when you configured your rules for the modal, and urlFeature is the url of the functionnality (web page where the script will be inserted ) you want to monitore.

# Todos

- Give the possibility to the user to custom the modal with is own graphic chart. 

# Licence 

MIT 

