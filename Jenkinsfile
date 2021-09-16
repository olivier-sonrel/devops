pipeline {
    agent any
    environment {
        CI = 'true'
    }
    
    stages {
      stage('Cloning Git') {
            steps {
                git 'https://github.com/gustavoapolinario/node-todo-frontend'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
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
