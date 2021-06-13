# Github URL of project
## Individual Github Repository
https://github.com/KevinRMIT/kevin-blockchain-challenge

## Group Github Repository
https://github.com/wmundev/calpoly-rmit-ccic-capstone

# URL of deployed project
https://blockchain-audio.cacyber.net

Credentials not needed

# Project setup instructions
Require: Nodejs

To install NodeJs:
Go to https://nodejs.org/en/download/, download the file that suit your operation system and install.

Once installed, the following steps for setup are as follows:
1. Download any code editor on your preference, open terminal in code editor and type in “npm install” and run.
2. To create a folder with React environment, type in “npx create-react-app <your_file_name>” and run. Eg: npx create-react-app blockchain-challenge.
3. To run the app, type in “npm start”.

You now have the folder with React environments and ready to develop your React App, you can add or edit the files inside the folder, to see the result, open browser and type in “localhost:3000”.

# Deployment
## AWS S3 Hosting
Prerequisites: You should now finish creating your React App and ready to upload onto your AWS 
1. Create a new AWS Account (https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) 

2. Sign in AWS 

3. In the search bar type “s3” for Amazon S3 service, you then will head to this page https://s3.console.aws.amazon.com/ 

4. Click “Create bucket” on top right corner, type in your bucket name (e.g.: blockchain-challenge), select a region, deselect “Block all public access”, scroll down and click “Create bucket”. 

5. After you create a bucket, a bucket with your bucket name will be shown on the bucket list, click on the bucket name and click “upload”. Now, go back to your code editor, open terminal in code editor, type in “npm run build”, this will create a file call “build” with all the files to run your React App. Go back to your bucket upload page and upload all the files that is inside the “build” file and click “upload”. 

6. Click “Permissions” on the navigation menu, go to “Bucket policy” and click “edit”, insert the following code in the policy, change “Bucket-Name” to your own bucket name and click “Save Changings”. 

{ 

    "Version": "2012-10-17", 

    "Statement": [ 

        { 

            "Sid": "AllowPublicReadAccess", 

            "Effect": "Allow", 

            "Principal": "*", 

            "Action": "s3:GetObject", 

            "Resource": "arn:aws:s3::: Bucket-Name /*" 

        } 

    ] 

} 

7. Go back to the navigation menu and click “Property”, scroll down to “Static website hosting” section and click “edit”, make sure the setting is same as below, for Index document, find the home or default page file in your React App folder and type in the name of the file follow by file type (Usually its index.html). Same for the error document (optional, but recommend same as index document if no error document), click “save changes” once it is done. 

8. Once you are done you will see a link under the “Static website hosting” section, that will be your URL for your React App, it will look something like http://[bucket-name].s3-website.[region].amazonaws.com 

# Running test
1. After you type "npm start" in terminal, go to any browser
2. type localhost:3000
