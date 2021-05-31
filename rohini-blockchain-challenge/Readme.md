###Project Setup Instructions 
####Git Setup
* Open a web browser and go to (https://git-scm.com/downloads)
* Install it on the system ( for windows Downloads > file) then click on install. 
####code setup
* Clone the repository/ or download as Zip file. 
* In the local system navigate to rohini-blockchain-challenge
* The This contains a HTML file and JavaScript libraries necessary to run the program.
* The code for the base 58 encoder/decoder along with the connection to the bot is given on the bottom on the html page( under *body > script* ). This can be replaced with credentials that is obtained from Kommunicate. 
#####AWS
* Sign up for an AWS Account. 
* From the AWS Management Console, select *Amazon Lex*. 
* Click on create button. 
* Select custom bot.
* Click on create. AWS Lex will begin to spin up a bot now. 
#####Kommunicate
* Open a browser and enter the website https://www.kommunicate.io/
* Login using credentials 
* If creating a new user ( Kommunicate will give instructions on how to add the connection details upon reaching the last step in sign up) 
###Deployment 
* Create a new AWS Account (https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
* Go to https://s3.console.aws.amazon.com/ and sign into your AWS Account
* Choose Create bucket and add a bucket name eg. ccic-blockchain
* Choose the Region to create the bucket.
* Accept defaults and after creating bucket, In the Buckets list, choose the name of the bucket that you want to enable static website hosting for.
* Click on properties, then under Static website hosting, choose Edit.
* Copy all the files in the build folder in the current project as indicated in the prerequisites and upload all the files inside to the newly created s3 bucket.
* Choose Enable from Static website hosting
* Enter index.html and save from the box to enter index document
* Go into Permissions, Clear Block all public access, and choose Save changes.
* Under bucket policy, click edit and in bucket policy editor paste the following code.
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
* Update Bucket-Name in the bucket policy above to the name of your bucket eg. hackBot and save changes.
* Click on properties and then static website hosting the bucket website endpoint will be displayed. Eg. https://hackchatbot.cacyber.net/
* refer *https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html* for more details 

