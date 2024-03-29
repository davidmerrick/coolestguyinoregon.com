Prank project I wrote in 2009 to see if I could get a website ranked for "coolest guy in Oregon."

Currently served from an S3 bucket.

# Process

How to stand up a static site with CloudFront, S3, and https.

Planning on fully automating this, if possible. For now, there are a couple
manual steps.

Transfer domain to Route53.
If you already have a bucket, back up all the files in it and delete it.
(CloudFormation can't import existing S3 buckets)
Create a certificate for your domain in the `us-east-1` region.
Deploy the `etc/website.yaml` CloudFormation template, with your 
desired bucket name and certificate ARN as input. 
Manually point your Route 53 hosted zone at the CloudFront distribution.

# Todo

- Add redirect from non-www to www url for website
- Add CloudFormation template for CodePipeline

# Cloudformation-ing

To create the AWS resources from the template, do the following.

Package the templates:
`aws cloudformation package --template-file etc/root.yaml --output-template packaged.yaml --s3-bucket merrick-cf-templates-east`

Deploy the templates:
`aws cloudformation deploy --template-file packaged.yaml --stack-name coolestguyinoregon`

# Gotchas
- Lambda@Edge doesn't allow env vars, so gotta hardcode that domain name.
- Lambda@Edge has a 5-second limit on timeouts.
