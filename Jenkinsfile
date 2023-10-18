pipeline {
  agent any

  environment {
    CYPRESS_INSTALL_BINARY = '12.7' // Removed trailing .0 from version
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build') {
      steps {
        script {
          sh 'npm install'
          sh "npm install cypress@${CYPRESS_INSTALL_BINARY}"
        }
      }
    }

    stage('Test') {
      steps {
        script {
          sh 'npx cypress run --headless --browser chrome'
        }

        post {
          always {
            sh 'npx cypress-multi-reporters generate --reporter mochawesome --reporterOptions reportDir=cypress/reports/mochawesome,overwrite=false'
            archiveArtifacts artifacts: 'cypress/reports/mochawesome/*.html'
          }
        }
      }
    }
  }
}
