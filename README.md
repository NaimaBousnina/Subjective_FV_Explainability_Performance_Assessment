<table><td align="center" width="9999">
  <h1 align="center"> Subjective Explainability Performance Assessment Protocol: Software Application </h1>
</td></table>

<table>

 ## 1- Introduction
This repository contains the software application built to validate the efficacy of a subjective explainability performance assessment protocol for visual explanations-based face verification explainability. The proposed protocol encompasses a set of key specifications designed to efficiently collect the subjects’ preferences and estimate explainability performance scores, facilitating the relative assessment of the explainability tools generating visual explanations. This protocol aims to address the current gap in evaluating the effectiveness of visual explanation-based FV explainability tools, providing a structured approach for assessing their performance and comparing with alternative tools. 

 ## 2- Requirements
 To run this software application, make sure you install:

 - Node.js JavaScript runtime environment: [Node.js Download](https://nodejs.org/en/)
 - MongoDB database management program: [MongoDB database Download](https://www.mongodb.com/docs/manual/administration/install-community/)
 - Apache2 web server [Optional] (if the software application will run online): [Apache2 Download](https://httpd.apache.org/)

    

## 3- Run the software application

   This repository includes the source code and data to run the software application for both acceptance i.e., True Acceptance and False acceptance and rejection i.e., True Rejection and False Rejection face veriofication decions, notably:
- [Acceptance Decisions Test Sub-Experiment](https://github.com/NaimaBousnina/Subjective_FV_Explainability_Performance_Assessment/tree/main/Acceptance_Decisions_Test_Sub-Experiment)
- [Rejection Decisions Test Sub-Experiment](https://github.com/NaimaBousnina/Subjective_FV_Explainability_Performance_Assessment/tree/main/Rejection_Decisions_Test_Sub-Experiment)

### 3.1 Run the Acceptance Decisions Test Sub-Experiment software with provided data:
  1. Clone the repository
  2. Install the requested requirements as detailed section ** Requirements **
  3. Upload the the provided data to the MongoDB database using the following commands:
     
     `mongoimport --type csv -d test_1 -c trains --headerline --columnsHaveTypes --file ./database/trains.csv`

     `mongoimport --type csv -d test_1 -c pairs --headerline --columnsHaveTypes --file ./database/random_pairs.csv`

  4. Launch the software application

      #### --- In localhost: ---
     
     - Start a mongosh session: `mongosh`
     -  initiate the web server: sudo node app.js

     #### --- In Apache2 web server: ---
   
     You can refer to [How to Host a Node.js Website With Apache on Ubuntu](https://linuxnightly.com/how-to-host-a-node-js-website-with-apache-on-ubuntu/?utm_content=cmp-true) to host the software application in 
   Apache2 web server and run it online.

   
   



