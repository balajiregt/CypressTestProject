pipeline:
  agent:
    label: 'Test'

  environment:
    CYPRESS_INSTALL_BINARY: 12.7

  stages:
    - stage: 'Checkout'
      steps:
        - checkout scm

    - stage: 'Build'
      steps:
        - script:
            name: 'Install Dependencies'
            command: |
              npm install
              npm install cypress@$CYPRESS_INSTALL_BINARY

    - stage: 'Test'
      steps:
        - script:
            name: 'Run Cypress Tests'
            command: |
              npx cypress run --headless --browser chrome 
          post:
            always:
              - script:
                  name: 'Generate HTML Report'
                  command: |
                    npx cypress-multi-reporters generate --reporter mochawesome --reporterOptions reportDir=cypress/reports/mochawesome,overwrite=false
              - archiveArtifacts:
                  artifacts: 'cypress/reports/mochawesome/*.html' 
          
