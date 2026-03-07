pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "gracekluender/product-service"
        DOCKER_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Build') {
            steps {
                sh '''
                npm install
                npm run lint
                '''
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Container Build') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'docker scout cves $DOCKER_IMAGE:$DOCKER_TAG || true'
            }
        }

        stage('Container Push') {
            when {
                anyOf {
                    branch 'develop'
                    branch 'main'
                    branch pattern: "release/.*", comparator: "REGEXP"
                }
            }
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {
                    sh """
                    echo $PASSWORD | docker login -u $USERNAME --password-stdin
                    docker push $DOCKER_IMAGE:$DOCKER_TAG
                    """
                }
            }
        }

        stage('Deploy Dev') {
            when {
                branch 'develop'
            }
            steps {
                echo "Deploying to Dev environment"
                sh 'echo Dev deployment triggered'
            }
        }

        stage('Deploy Staging') {
            when {
                branch pattern: "release/.*", comparator: "REGEXP"
            }
            steps {
                echo "Deploying to Staging environment"
                sh 'echo Staging deployment triggered'
            }
        }

        stage('Deploy Production') {
            when {
                branch 'main'
            }
            steps {
                input message: "Approve production deployment?"
                echo "Deploying to Production environment"
                sh 'echo Production deployment triggered'
            }
        }

    }
}