# Github URL of project
## Individual Github Repository
https://github.com/wmundev/calpoly-rmit-ccic-capstone/tree/main/Qi%20Wen-blockchain-challenge

## Group Github Repository
https://github.com/wmundev/calpoly-rmit-ccic-capstone

# URL of deployed project
https://rmiteduau.sharepoint.com/:w:/r/sites/AmazonCICCapstoneProject/Shared%20Documents/General/Blockchain%20challenges/Qi%20Wen/Qi-blockchain-challenge-idea.docx?d=w683d3d17f6294a7aa1e442009b9f9edb&csf=1&web=1&e=S9BDej.
http://qi-ccic.s3-website-us-east-1.amazonaws.com/

# Introduction 

Qi Wen’s blockchain challenge is based on answering questions that is targeted towards participants of the high school challenge created by CalPoly. 
This blockchain challenge builds two websites, which can show questions and distinguish the answer is right or wrong, respectively. 
To test if the input is abnormal text, blank text, or something strange to see if it will have error is necessary. 
This application will be hosted in an AWS S3 bucket as a static website, so testing is needed for the configuration of the S3 bucket in AWS. 

# Deployment
## AWS S3 Hosting
1. Sign in an AWS account 
2. Go to S3 service to develop website. 
3. Click button create bucket. 
4. Fill out bucket name, AWS region, with other default. And one thing important is do not block public access. 
5. Enter to the bucket just created. 
6. Go to permissions and the bucket policy is shown, fill the code into here. 
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::qi-ccic/*"
        }
    ]
}
7. Set up static website hosting. 
8. Go to objects and upload html file and JavaScript file.  
9. Then the website is shown here which is http://qi-ccic.s3-website-us-east-1.amazonaws.com 

# Getting Start
1. This blockchain challenge is based on questions, so the first stop is going to website which contains questions. 
https://rmiteduau.sharepoint.com/:w:/r/sites/AmazonCICCapstoneProject/Shared%20Documents/General/Blockchain%20challenges/Qi%20Wen/Qi-blockchain-challenge-idea.docx?d=w683d3d17f6294a7aa1e442009b9f9edb&csf=1&web=1&e=S9BDej 
2. Then the page is shown like below, starting on question1 and you will get a code based on your answer.  
3. The code is using Base64, so you need to decode it and what is next step will show. 
4. After finishing all questions, you will get a final code, put your code into website to check if it is right. 
http://qi-ccic.s3-website-us-east-1.amazonaws.com/
5. Input the answer here and you will find out it is right or wrong.
