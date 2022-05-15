###### Devops 1 group project

## About

Oskar, Srikanth, Tariq, Andreas and Jesper.

This webshop seemingly specializes in selling computer games. However, as a team of 100% DevOps, the main focus is of course CI/CD (continuous integration/continuous deployment). 


+ [About](#About)
+ [Branches](#Branching)
+ [CI/CD](#CI/CD)
+ [Contributing](#Contributing)

#### Branching 

There are edgecases and this document does not intent to turn a blind eye to that, rather see this strategy as a goal. 
<div>
<img src="https://i.imgur.com/oKJw7qg.png" style=" width:800px"  >
</div>

The branching strategy is as follows:
  📣 The main branch is for code that is ready to go live and be deployed
  📣 The dev branch is for code that is being currently being developed. 

Feature branches that are made for developing major and minor features. 

- Naming convention as follows, more specific rather than shorter.
feature-[*name_of_feature*]-[*creator*]

 Bugfix branches that are made for fixing bugs.
- Naming convention as follows, more specific rather than shorter.
hotfix/bugfix-[*bug*]-[*feature_related*]-[*creator*]

Pull request to merge!

### CI/CD

test-deploy-dev.yml respectively test-deploy-main.yml contains GitHub Actions to run all tests and deploys to dev/prod server if passed. Write tests for your features please! (see [Contributing](#Contributing) for *slightly* more information)

development deployment online @ [https://dev.stackyield.net/](https://dev.stackyield.net/)
production deployment online @ [https://prod.stackyield.net/](https://prod.stackyield.net/)

For testing we use Jest, Postman/Newman, and WebdriverIO. Jest for frontend, Postman/newman for API and WebdriverIO for GUI testing. See their respective folders for whats going on.

### Contributing 

-   Clone the repo
-   Copy and rename products-template.db to products.db
- Get installed with ```npm install``` (assuming you have node/npm set up)

 ```npm start``` to run locally, ```--port=4444``` to specify a port (defaults to 3000)
```npm test```: runs jest tests locally,
```npm wdio```: runs wdio tests locally
```npm api-test```: runs postman tests locally
Check package.json for these *+more!*

Request access to the discord to communicate!

