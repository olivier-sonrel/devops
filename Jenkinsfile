pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
        stage('Deliver') {
            steps {
                sh 'node server.js'
            }
        }
    }
}
