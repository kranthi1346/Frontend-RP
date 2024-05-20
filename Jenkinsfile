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
         stage ('Login to dev and deploy it'){
          steps {
                println "Deploying the applicaiton
                sh 'pwd'    
                sh 'sshpass -p 'kranthi' scp -P 22 -r -o StrictHostKeyChecking=no /var/lib/jenkins/workspace/RecPortal-FE-Dev/* kranthi@13.233.139.15:/home/kranthi/RecPortal' 
                sh 'npm start &' 
                // sh 'sudo su -'
                sh 'sudo systemctl restart nginx'
                sh 'sudo systemctl status nginx'
                sh 'netstat -lntp'
                      }
  }

    }
}
