pipeline {
    agent any
    environment {
        CI = 'true'
    }
    
    stages {
      stage('Cloning Git') {
            steps {
                git 'https://github.com/olivier-sonrel/devops'
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
             steps {
                script{
                    if ("${stdout}" == "Server is listening on port 3000"){
                    currentBuild.result = 'SUCCESSE'
                    return
                    }
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
