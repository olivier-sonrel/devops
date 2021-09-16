pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'git pull'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                input message: 'Finished. Lance the website? (Click "Proceed" to continue)'
            }
        }
        stage('Deliver') {
            steps {
                sh 'node server.js'
            }
        }
    }
        post {
        always {
            echo 'One way or another, I have finished'
        }
        success {
            echo 'I succeeded!'
        }
        failure {
            echo 'I failed :('
        }
        unstable {
            echo 'I am so unstable :/'
        }
        changed {
            echo 'Things were different before...'
        }
    }
}
