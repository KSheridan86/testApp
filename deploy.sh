#!/usr/bin/env bash
sudo apt update && sudo apt install nodejs npm
# Install pm2 which is a production process manager for Node.js with a built in load balancer.
sudo npm install -g pm2
# Stop any instance of the application already running
pm2 stop all
# Change directory into the application folder
cd ExampleApp
# Install dependencies
npm install
# Start the application with the processs name example_app using pm2
pm2 start app.js
