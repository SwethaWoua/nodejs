pipeline {
    agent any
     environment {
            CI = 'true'
            registry = "woualabs07/node-jenkins-sonar-docker"
            registryCredential = 'Swetha07!'
            dockerImage = ''
        }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
       
        stage('Building image') {
                 steps{
                   script {
                     dockerImage = docker.build registry + ":$BUILD_NUMBER"
                   }
                 }
               }
                stage('Deploy Image') {
                    steps{
                      script {
                        docker.withRegistry( '', registryCredential ) {
                          dockerImage.push()
                        }
                      }
                    }
                  }

    }
}
