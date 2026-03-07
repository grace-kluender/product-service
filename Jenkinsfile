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
                    expression { env.GIT_BRANCH == 'origin/develop' }
                    expression { env.GIT_BRANCH == 'origin/main' }
                    expression { env.GIT_BRANCH.startsWith('origin/release') }
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
                expression { env.GIT_BRANCH == 'origin/develop' }
            }
            steps {
                echo "Deploying to Dev environment"
                sh 'echo Dev deployment triggered'
            }
        }

        stage('Deploy Staging') {
            when {
                expression { env.GIT_BRANCH.startsWith('origin/release') }
            }
            steps {
                echo "Deploying to Staging environment"
                sh 'echo Staging deployment triggered'
            }
        }

        stage('Deploy Production') {
            when {
                expression { env.GIT_BRANCH == 'origin/main' }
            }
            steps {
                input message: "Approve production deployment?"
                echo "Deploying to Production environment"
                sh 'echo Production deployment triggered'
            }
        }

    }
}