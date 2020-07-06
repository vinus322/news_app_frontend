pipeline {
    agent {
        docker {
            image 'node:11-alpine'
            args '-p 3100:3100'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm install react-router-dom --save'
            }
        }
        // stage('Test') {
        //     steps {
        //         sh "chmod 775 ./jenkins/scripts/test.sh"
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
        stage('Deliver') { 
            steps {
                sh "chmod 775 ./jenkins/scripts/deliver.sh"
                sh './jenkins/scripts/deliver.sh' 
                //input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                //sh "chmod 775 ./jenkins/scripts/kill.sh"
                //sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}
