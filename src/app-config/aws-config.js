// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
var aws_app_analytics = 'enable';
var aws_cognito_identity_pool_id = 'us-west-2:aebfddf1-be6c-4e9b-a5c7-40a63f155a9e';
var aws_cognito_region = 'us-west-2';
var aws_content_delivery = 'enable';
var aws_content_delivery_bucket = 'whatspass-hosting-mobilehub-57789846';
var aws_content_delivery_bucket_region = 'us-west-1';
var aws_content_delivery_cloudfront = 'enable';
var aws_content_delivery_cloudfront_domain = 'd2jkwe8e0z6cec.cloudfront.net';
var aws_mobile_analytics_app_id = '10a89d6e997e4119b0b5df3c90636d41';
var aws_mobile_analytics_app_region = 'us-east-1';
var aws_project_id = '22c3eb8a-a4c4-4846-9c70-794f2ebf92a2';
var aws_project_name = 'whatspass-2019-06-11-23-11-04';
var aws_project_region = 'us-west-1';
var aws_resource_name_prefix = 'whatspass-mobilehub-57789846';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
  });
AWS.config.update({customUserAgent: 'MobileHub v0.1'});
