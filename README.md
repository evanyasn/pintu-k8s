# Project Title

Pintu's Assessment Project

## Getting Started

This project is developed as part of Pintu's Assessment Process.
Contaning : 
* Node app files
* KIND - Local Kubernetes deployment 
* Jenkins manifest (incomplete) - I decided to run the jenkins outside kubernetes

### Prerequisites

```
npm - v8.5.1
KIND - v0.22.0
kubectl client library
Docker engine

```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
1. Install and configure KIND for kubernetes cluster. Manifest file are inside *kind-k8s* directory
2. Create namespaces for cicd and workload
3. Spin up jenkins and serviceaccounts to deploy node-app. Manifest file are inside *jenkins* directory
4. Develope node-app project using nodejs. Prepare jenkinsfile. Codebase are inside ROOT directory
5. Deploy node-app into kubernetes using Jenkins. node-app manifest file (k8s.yaml) and Jenkinsfile is inside ROOT directory.
```
