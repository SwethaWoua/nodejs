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
       stage('SonarQube analysis') {
            steps {
                withSonarQubeEnv('sonarserver') {
                    sh "npm run sonar"
                }
            }
        }


    }
}
