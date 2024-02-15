#!/usr/bin/env groovy
  
pipeline {
  agent { label 'master' }
  environment {
    tag_ver = sh (
      script: "date +%s",
      returnStdout: true
      ).trim()
    }
  stages {
    stage('Checkout Source') {
      steps {
        git 'https://github.com/YOURUSERNAME/jenkins-kubernetes-deployment.git'
      }
    }
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build .
        }
      }
    }
    stage('Pushing Image') {
      environment {
          registryCredential = 'dockerhub-credentials'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }
    stage('Deploying React.js container to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deployment.yaml", 
                                         "service.yaml")
        }
      }
    }
  }
}