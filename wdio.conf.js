import fs from 'node:fs/promises'
import { generate } from 'multiple-cucumber-html-reporter'
export const config = {

    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
        './features/**/checkout.feature'
    ],    
    maxInstances: 10,  
    capabilities: [{
        browserName: 'chrome'
    }, {
        browserName: 'MicrosoftEdge'
    }],
   
    logLevel: 'info',    
    bail: 0,  
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,  
    connectionRetryCount: 3,   
    framework: 'cucumber',
     
    reporters: ['spec', ['cucumberjs-json', {
        jsonFolder: '.tmp/json/',
        language: 'en',},],
    ],
 
    cucumberOpts: {
       
        require: ['./features/step-definitions/register.steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tags: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    
    onPrepare: () => {       
        return fs.rm('.tmp/', { recursive: true });
      },
      
    onComplete: () => {      
        generate({     
          jsonDir: '.tmp/json/',
          reportPath: '.tmp/report/',         
        });
    }
}
