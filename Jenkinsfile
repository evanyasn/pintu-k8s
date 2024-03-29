#!/usr/bin/env groovy
  
pipeline {
  agent any
  environment {
    dockerImage = ""
    tag_ver = sh (
      script: "date +%s",
      returnStdout: true
      ).trim()
    }
  stages {
    stage('Checkout Source') {
      steps {
        git 'https://github.com/evanyasn/pintu-k8s'
      }
    }
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build "makinglaugh/pintu"
        }
      }
    }
    stage('Pushing Image') {
      environment {
          registryCredential = 'dockerhub-credential'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("${tag_ver}")
          }
        }
      }
    }
    stage('Deploying Pintu-app to k8s') {
      steps {
        sh "sed -i \'s/latest/${tag_ver}/\' k8s.yaml"

        sh "kubectl apply -f k8s.yaml"
      }
    }
  }
}