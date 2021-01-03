---
slug: "/writing/programming/backend/AWS"
date: "2021-02-01"
---

### Resources
 * https://www.youtube.com/watch?v=Z3SYDTMP3ME&t=45s

### General Notes
- Lots of AWS regions where you deploy. You pick the data  centers that are closest to your customers.
    - Ever region has multiple availability zones
    - Edge locations (like caches for the data centers) spread across hundreds of cities/locations
- Over 130 services.
    - Each service has a different scope (account → region → availability zone)
- AWS Account is the top most level. IAM Users = multiple users for an account.
    - most famous are compute and analytics

### Translating tools into AWS functions 
* VPC: Private notwork for company.
* EC2: Just the web servers that actually server you content to the user or run you backend. An all purpose general computer used for running services and what not. These can also auto scale.
* EBS: The disk that is attached to these EC2 instances that houses their storage and memory and what not. 
* RDS: SQL database
* DynamoDB: a no SQL database
* ElastiCache: A cache for RDS with built in redis.
* ELB: Elastic load balancer. 
* Route 53: A DNS service
* S3: Simple storage service, an external storage for things like movies, pictures, etc. No size limitation for how much you can store in these. 
* Reckognition: a content filter that will filter out objectionable content before uploading to something like an S3. 
* Lambda: Is a server less piece of code that runs whenever some action happens, like someone uploading a video to your website. They scale automatically
* Kinesis: Captures click stream data. 
* EMR: A hadoop map/reduce like service that can run distributed jobs. 
* Glue: Is a ETL service to take data from your DB and process it in EMR.
* Redshift: a data warehouse service. Can scale on the petabyte level. 
* Athena: Allows you to do business insights from your data warehouse. 
* CloudFront + Edge locations: just a CDN.
* SNS: A simple push notification sms service.
* SES: A simple email service for sending bulk emails. 
* SQS: A simple messaging queue service for real time queing.
* CloudWatch: The service that monitors everything that is happening with your other services. Can set alarms for things that are happening. 
* API Gateway: Allows you to write your own public APIs for something like developer APIs.
* Cognito: Web and mobile user management. 
* IAM: For securing your services.
* KMS: For encrypting your data. Key management service. 
* ACM: For managing certificates for getting https.
* WAF: Application firewalls for preventing attacks like ddos, etc.
* Inspector: Scans your machines for vulnerabilities. 
* CloudFormation: Can take in a yaml file and create all of your infrastructure for you like setting up your EC2 instances, S3, etc, etc.
* CodeCommit: Think github but AWS
* CodeBuild: Builds tool for your application.
* CodeDeploy: Deploys your code. 
* CodePipeline: Turns all of the above 3 into a CI for continuation development.
* CodeStar: Project Management, Issue Tracking, etc like Jira
