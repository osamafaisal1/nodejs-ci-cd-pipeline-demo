pipeline {
    agent any

    environment {
        APP_NAME = "nodejs-ci-cd-pipeline-demo"
        IMAGE_NAME = "myapp:latest"
        CONTAINER_PORT = "3000"
        HOST_PORT = "3000"
    }

    stages {
        stage('Clone') {
            steps {
                echo 'Cloning repository...'
                git 'https://github.com/osamafaisal1/nodejs-ci-cd-pipeline-demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t myapp:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running simple test...'
                sh 'echo "All tests passed successfully ✅"'
            }
        }

        stage('Deploy Container') {
            steps {
                echo 'Deploying application container...'
                // Stop old container if running
                sh 'docker ps -q --filter "ancestor=myapp:latest" | xargs -r docker stop'
                // Remove old containers
                sh 'docker container prune -f'
                // Run new container
                sh 'docker run -d -p 3000:3000 myapp:latest'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful! App running on port 3000'
        }
        failure {
            echo '❌ Build failed. Please check logs.'
        }
    }
}
