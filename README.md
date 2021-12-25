Source code for https://www.coolestguyinoregon.com.

Fun fact: I'm the first search result on Google for ["coolest guy in Oregon"](https://www.google.com/search?q=coolest+guy+in+oregon) 🙂.

# Running locally

This is a NodeJS project built with React, which uses [Parcel](https://parceljs.org/) for bundling.

To install and run it locally, run:

* `yarn install`
* `yarn start`

Then visit http://localhost:1234 in your browser.

# Infrastructure

This site has CloudFormation templates for deployment to AWS. Its infrastructure consists of:
* S3 bucket
* Route53 Domain
* CloudFront distribution for edge caching
* Lambda@Edge to redirect non-www requests to the www subdomain

To create the AWS resources from the template, do the following.

Package the templates:
`aws cloudformation package --template-file etc/root.yaml --output-template packaged.yaml --s3-bucket merrick-cf-templates-east`

Deploy the templates:
`aws cloudformation deploy --template-file packaged.yaml --stack-name coolestguyinamerica`

# Gotchas
- Lambda@Edge doesn't allow env vars, so gotta hardcode that domain name.
- Lambda@Edge has a 5-second limit on timeouts.
