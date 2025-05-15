# Braj
A mobile apps project by Brennan Chiu and Taj Bhattacharjee.

## Run Instructions
Some dependencies have been added to ```.gitignore``` to save space in the repository and create cleaner pulls and pushes. To install the dependencies, run ```npm install``` and wait for ```node_modules``` to load. To start the app after installing dependencies, run ```npx expo start``` and scan the QR code. Avoid running the web version, as there are multiple dependencies that do not function out of mobile.

## Goals and Features
Braj is a mobile app that allows users to track runs and log them alongside relevant information like speed and duration. It also incorporates a social media aspect that allows users to connect with other runners, finding people who travel similar routes to allow for mutual benefit
- Track location
- Save previous runs
- Social media network
- Preset saved runs
- Stat tracking over time

## Architecture
### Overview Screen
- Account information
- Most recent run
- Average/overall stats

### Run Log
- Display list of all runs
- Allows access to detail view of each run
- Displays detailed statistics for runs

### Begin Run Screen
- Allows user to start run
- Button that starts run timer
- Select route from available

### Social Media Network
- Displays other users and their runs
- Allows users to find other runners with similar run information/statistics
- Stores user data in txt file to replicate database
- Database is updated based on current user actions