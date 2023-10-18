pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        script {
          command 'npm install'
          command 'npm install cypress@$CYPRESS_INSTALL_BINARY'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          command 'npx cypress run --headless --browser chrome'
        }

        post {
          always {
            command(script: 'npx cypress-multi-reporters generate', args: '--reporter mochawesome --reporterOptions reportDir=cypress/reports/mochawesome,overwrite=false')

            archiveArtifacts artifacts: 'cypress/reports/mochawesome/*.html'
          }
        }
      }
    }
  }
}
