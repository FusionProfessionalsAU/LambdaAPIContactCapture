# Lambda Api Contact CSV Capture by Field

## Policies Required

	* S3
	
	* Lambda
	
	* API Gateway
	
	* Logs/CloudWatchLogs

## Create a Lambda function and add the code

	set the environment variable:

		`bucket = your_bucket_name`
	
## Setup AWS API Gateway and add this to refer to AWS Guides

## Required JSON fields name, email, timestamp, field1, field2, field3 and field4

eg.

	{
		"name": "String",
		"email": "String",
		"timestamp": "String",
		"field1": boolean,
		"field2": boolean,
		"field3": boolean,
		"field4": boolean
	}	