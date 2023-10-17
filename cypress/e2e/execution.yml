pipeline:
  agent:
    label: 'Test' # Replace with your Jenkins agent label

  environment:
    CYPRESS_INSTALL_BINARY: 12.7.0 # Specify the Cypress version you want to use

  stages:
    - stage: Checkout
      steps:
        - checkout scm

    - stage: Build
      steps:
        - script:
            name: 'Install Dependencies'
            command: |
              npm install # Install project dependencies
              npm install cypress@$CYPRESS_INSTALL_BINARY # Install a specific Cypress version

    - stage: Test
      steps:
        - script:
            name: 'Run Cypress Tests'
            command: |
              npx cypress run --headless --browser chrome # Replace with your Cypress test run command
          post:
            always:
              - archiveArtifacts:
                  artifacts: '**/cypress/videos/**/*.mp4' # Archive Cypress test videos for later viewing
              - script:
                  name: 'Generate HTML Report'
                  command: |
                    npx cypress-multi-reporters generate --reporter mochawesome --reporterOptions reportDir=cypress/reports/mochawesome,overwrite=false
              - archiveArtifacts:
                  artifacts: 'cypress/reports/mochawesome/*.html' # Archive the generated HTML report

    - stage: Post-Build
      steps:
        - script:
            name: 'Post-Build Steps'
            command: |
              # Add any additional post-build steps here
