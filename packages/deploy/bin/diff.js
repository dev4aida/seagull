#!/usr/bin/env node

const logSuccess = () => console.log('done')
const logError = (error) => console.log('error', error)
const {
  Diff
} = require('../dist/src')


require('dotenv').config()

const options = {
  branchName: process.env.BRANCH_NAME || 'master',
  mode: process.env.DEPLOY_MODE || 'prod',
  noProfileCheck: process.env.NO_PROFILE_CHECK || false,
  profile: process.env.AWS_PROFILE,
  region: process.env.AWS_REGION || 'eu-central-1',
}
const diff = new Diff(process.cwd(), options)
diff.execute()
  .then(logSuccess())
  .catch(error => logError(error))