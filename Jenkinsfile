pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Test') {
      steps {
        script {
          command 'npm install'
          command 'npm install cypress@$CYPRESS_INSTALL_BINARY'
          command 'npx cypress run --headless --browser chrome'
        }

        post {
          always {
            script {
              command 'npx cypress-multi-reporters generate --reporter mochawesome --reporterOptions reportDir=cypress/reports/mochawesome,overwrite=false'
            }

            archiveArtifacts artifacts: 'cypress/reports/mochawesome/*.html'
          }
        }
      }
    }
  }
}
