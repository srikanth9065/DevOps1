# Betygsgrundande uppgift för DevOps kurs
This is a group project for the course DevOps 1. It is a project where our knowledge in CI/CD (continous integration/continous deployment). This webshop is specialized in selling computer games. You can choose any game you want and then place your order. The orders made when a user is logged in is saved in a database.

The first thing you need to do after cloning the repo is to remove the products.db file in the database folder and make a copy of products-template.db and rename it products.db. This is because we .gitignore the products.db file because we do not want to track it with git.

The branching strategy is as follows:
- The main branch is for code that is ready to go live and be deployed to customers
- The dev branch is for code that is being developed. Both the main and the dev branch are protected
- Feature branches that are made for developing different features. The strategy when merging these feature braches to main is to first merge from dev to a feature branch and if everything was ok you can merge from your feature branch to dev.

For testing we use Jest, Postman/Newman, and WebdriverIO. Jest for frontend, Postman/newman for API and WebdriverIO for GUI testing.

In conclusion this is a webshop where CI/CD is tested
-------------------------------------------------------------
