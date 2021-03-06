#!/usr/bin/env node

const logSuccess = () => console.log('done')
const logError = (error) => console.log('error', error)
const {
  SeagullPipeline
} = require('../dist/src/templates/seagull_pipeline')

require('dotenv').config()

const options = {
  appPath: process.cwd(),
  branch: process.env.BRANCH_NAME || 'master',
  mode: process.env.DEPLOY_MODE || 'prod',
  owner: process.env.GITHUB_OWNER,
  region: process.env.AWS_REGION || 'eu-central-1',
  repository: process.env.GITHUB_REPO,
  ssmParameter: process.env.GITHUB_SSM_PARAMETER,
  githubToken: process.env.GITHUB_OAUTH
}
const pipeline = new SeagullPipeline(options)
pipeline.deployPipeline().then(logSuccess()).catch(error => logError(error))