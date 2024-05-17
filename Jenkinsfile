pipeline {
    agent any
    stages {
        stage ('Build stage'){
            steps {
                println "Building the application"
                sh 'npm i -f && npm run build'
                sh 'pwd | ls -lrthr'
            }
        }
         stage ('Deploy stage'){
          steps {
                println "Deploying the applicaiton"
                sh 'cd /var/lib/jenkins/workspace/RecPortal-FE-Dev'
                sh 'pwd'
                sh 'whoami'
                // sh 'sudo su -'
                sh 'sudo systemctl restart nginx'
                sh 'sudo systemctl status nginx'
                sh 'npm start &' 
                sh 'netstat -lntp'
                      }
  }

    }
}
