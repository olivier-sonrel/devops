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
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
