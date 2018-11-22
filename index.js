const path = require('path');
const dotenv = require('dotenv');
const dfUtils = require(path.join(__dirname, 'tools', 'dfutils'));

// load env
dotenv.load();
const projectId = process.env.DF_PROJECT_ID;
const sessionId = process.env.DF_SESSION_ID;

const dialogFlowUtil = new dfUtils({ projectId, sessionId });

console.log(dialogFlowUtil);
