#!/usr/bin/env bash

# Clone Stella onto the server, naming the folder after the branch.
ssh aigachu@aigachu.com "cd apps; git clone git@github.com:Aigachu/Stella.git ${CI_BRANCH}";

# Reset repository.
ssh aigachu@aigachu.com "cd apps/${CI_BRANCH}; git reset --hard";

# Checkout appropriate branch.
ssh aigachu@aigachu.com "cd apps/${CI_BRANCH}; git checkout ${CI_BRANCH}";

# Pull latest changes.
ssh aigachu@aigachu.com "cd apps/${CI_BRANCH}; git pull";

# Install NPM Dependencies.
ssh aigachu@aigachu.com "cd apps/${CI_BRANCH}; npm install";

# Travel into this new folder and run the bot.
ssh aigachu@aigachu.com "cd apps/${CI_BRANCH}; pm2 start run.js --name=${CI_BRANCH}";