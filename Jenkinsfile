pipeline {
    agent {
        docker {
            image 'node:11-alpine'
            args '-p 3000:3000'
        }
    }
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
                sh "chmod 775 ./jenkins/scripts/test.sh"
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') { 
            steps {
                sh "chmod 775 ./jenkins/scripts/deliver.sh"
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh "chmod 775 ./jenkins/scripts/kill.sh"
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}