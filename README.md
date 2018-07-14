# Fresh Produce - CoderAcademy Project 
This is the README for the FreshProduce website built for the Food Forum, as part of the CoderAcademy group project. This is a live document. 

### Who is your client? 
Our client is “Food Forum”, a fresh produce wholesaler operating out of Canberra, ACT. They currently have a website, [The Food Forum - Home](http://www.thefoodforum.com.au/) which acts as a landing page for marketing purposes. 

### What is your client’s need (i.e. challenge) that you will be addressing in your project?
* Our client wants to sell their produce online.
* They want their users to be able to place orders online.
* Their users are typically restaurants, hospitals and other food related businesses. 
* Ideally the platform can take and store payment details. 
* Users can see live stock levels, specials and other deals.
* Users can view delivery times. 
* Users have profiles (e.g. last order, address, phone number). Current balance.
* Users need to place and update orders quickly as they are time poor. 
* Users need to setup returns/rejects or open a ticket to discrepancies. 

### Describe the client’s current setup and data.
*Shows a complete understanding of the current (pre project) state of the client’s set up and data as is relevant to the project*
* The client currently has a website that acts displays the produce and services they offer. It acts primarily as a marketing website for the business and generate leads. 
* There is no data captured as a part of this website, however the business does have other systems which take in data. 
* There is an internal database which tracks prices and products on offer. It does not track the exact quantity or volumes that are currently available, however it does track whether an item is currently in or out of stock. 
* There are many manual processes as part of the operation, such as paper sheets which show the delivery information for truck drivers and other order-related documents that are manually reconciled between different team members. 
* For the scope of this project, the key data that we will be requiring access to is the product information. This will be made available to us via the API, per the architecture diagram. 


### Describe the project will you be conducting and how your App will address the client’s needs.
*Complete discussion of the project including a demonstration of a full understanding of how it will meet the client’s needs*

Our goal for this project is to create a digital sales channel for Food Forum, similar to a Woolworths online or Harris Farms online. The key requirements for our client is for their customers to place orders online. The project has three main components which are required to meet these requirements. 
1. A client management system, which allows customer’s of Food Forum, such as restaurants and hospitals, to have their own profile where they can login, and manage their details (e.g. address).
2. A catalogue or product listing, which shows all the products on offer and any associated discounts. This is a requirement as customers need to view the items that want to add to their order. 
3. A shopping cart and order confirmation system. This is required as all the listed products need to be collected into a cart, so the order can be fulfilled by the Food Forum team. The other requirements in this component is the recording of shipping and billing details, so the payment can be processed online. 
These are the three high level components that are required for customers to find and transact on produce items in an online or digital environment. It covers the process from selecting items, to collecting items and finally shipping the item to the customer. 
<img width="602" alt="appcomponents" src="https://user-images.githubusercontent.com/35912668/42721427-26ee4b46-877e-11e8-8223-5042d1d63242.png">

### Identify and describe the software (including databases) to be used in your App.
*Complete and detailed description of the software and database used in the app*
* React components for the front end. [React - A JavaScript library for building user interfaces](https://reactjs.org/). This is a framework created by facebook that we will be using to design the UI for our client-side application. 
* We will be using NodeJS to build our server-side application, as it is fast, scalable and asynchronous it is beneficial for our platform. [Node.js](https://nodejs.org/en/)
* Express is used as our framework for NodeJS, it provides our application with quick and effective routing and endpoints for our purposes. [Express - Node.js web application framework](http://expressjs.com/)
* MongoDB for our NoSQL database.  We are using MongoDB, a NoSQL database or document-orientated database is effective for storing our user data. Some features include indexing which allows the documents to be indexed by primary and secondary indices. [MongoDB for GIANT Ideas | MongoDB](https://www.mongodb.com/)
* Mongoose provides ORM for our application with respect to MongoDB. It also allows us to have built-in automatic validation of data whenever we are updating the data. [Mongoose ODM v5.2.3](http://mongoosejs.com/)
* Stripe is our payments provider. This was selected mainly due to its fast ability to install into our application, and to perform two main actions for our application, taking payments and also refunds. Stripe does not charge for refunds which makes it appealing over other providers. [Stripe - Online payment processing for internet businesses | Australia](https://stripe.com/au)
* AWS via Mlab for hosting data. In order to host our mongoDB database online, we are using Mlab. A key advantage is the speed of which we can deploy and begin using Mlab in our application. Through Mlab we have selected AWS as the cloud storage provider over Google Cloud and Microsoft Azure. https://mlab.com/
* Zeit is our provider for deploying our website to a production URL. They have a product called ’now’ which builds our application so that it is production ready. They also have a service which allows us to automatically deploy from GitHub which greatly speeds up our production testing. [Now – Realtime Global Deployments](https://zeit.co/now)
* Sendgrid is a cloud email delivery service. It provides services such as newsletter deliveries, marketing campaigns and other transactional emails such as order confirmations (which will be the main service used in our application). https://sendgrid.com/
* Postman is service that allows our development team to make API calls to our server-side application, which provides a method for the team to test different RESTful endpoints. https://www.getpostman.com/
* JEST and enzyme is used to test our application. JEST the main testing tool for javascript and integrates well into the TDD process. Whilst, Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse a React component’s output. [Jest · 🃏 Delightful JavaScript Testing](https://jestjs.io/)[Jest · Enzyme](http://airbnb.io/enzyme/docs/guides/jest.html)
* 3T is a GUI tool for MongoDB, which our development team has been using as part of our development process. It allows us to write faster queries in an easy-to-read manner.[Studio3T](https://studio3t.com/)

### Identify and describe the network setup you will use in your development.
*Gives a complete description of the networks and methods used to make connections*
Our MERN app uses several technologies in its network setup in order for us to be on production. 

Locally, we have our React (client-side) application running on port 3000, whilst our Node(server-side) is running on port 5000. We are also using Postman locally to test our API routes in our development environment. 

In order for our application to be deployed we are using Mlab and Zeit. Mlab, provides Database-as-a-service for MongoDB. Within the Mlab configuration we have used the AWS as the storage provider. We have setup environment variables for production so that the Mlab database will store our MongoDB database. Our Mlab database is in the North Virginia AWS location. 

Zeit [ZEIT](https://zeit.co/) is our deployment service for both our client and server. 
* For the server side defining env variables.  Our current deployment process is as follows. 
	1. For the server side app, we connect Mlab into production via the address (MONGODB_URI) of the Mlab - mongoDB server.  
	2. Pass through environment variables to Zeit such as the MONGODB_URI and our JWT secret which is required for logins. 
	3. Using the Zeit Now shell this creates the deployment URL for our server side application. 
* For the client side, we run a similar process. 
	1. The action `npm run build` creates a build folder for Zeit to ingest. 
	2. Similarly to server, we have to pass through the environment variables via `dotenv` 
	3. Now Shell will create the production URL. 


### Identify and describe the infrastructure (i.e. hardware) that your App will run on.
*Shows a full understanding of the infrastructure that will be needed to run the app*
Whilst our application does not directly use any hardware, we are dependent on some hardware of our third party providers. As our mongoDB server is hosted on AWS via mLab, it does use Intel Xeon type processors. 

### Describe the architecture of your App.
*Shows almost flawless understanding of the high level structure of the app*
Overall we aim to have a microservices architecture, with each component that we build being modular. This means that we can swap out each piece and still have the application function. For example, if we switch out our CMS systems that we have built, to another system like Zendesk. By having the microservices architecture we are able to do this more easily and re-deploy faster. Similarly, by having our server-side application broken away, any changes or new technologies that we leverage in future on our server-side application won't require as many changes or configurations in the client-side. 

Our app architecture is broken into two main systems, server and client. Our server-side application has a MongoDB (NoSQL) database, with the Express package providing the server-side routing. The server side code is all written in nodeJS. Our MongoDB database leverages Mongoose as an ORM, which subsequently interfaces with our Models. In our application our models are quite thin, and only stores user and company profile information. Express provides RESTful routing for our server routes, and information such as user and profile data, is passed via these routes to our client side application. 

Our client-side application is built predominately with the react framework. 

Our application is also heavily reliant on a external API from Food Forum which provides our application with product information that is populated in our catalogue. This affects our architecture as our application is not responsible for storing the product information. If our application were to manage product information as well, then errors such as stock level mis-matches could occur as there are two different databases of the same information. By having product information coming from one database and accessing via an API removes this potential risk. 



### Explain the different high-level components (abstractions) in your App.
*Precisely explains and shows understanding of the different high-level components of the app*

<img width="602" alt="appcomponents" src="https://user-images.githubusercontent.com/35912668/42721427-26ee4b46-877e-11e8-8223-5042d1d63242.png">
Per the image above, our application has two high level components in our server-side application. It has an external API connection to access production information. It also has a connection to a MongoDB database. 
Whilst on our client-side application there are main components. The first, a client management system which provides functionality for our customers and administrative team to manage their own accounts and profiles. The second, a Product catalogue and landing page which displays all available products for our customers as well as a search/filtering functionality. The third and final component is our cart and ordering component. This component provides customers to store all their desired items in a shopping cart, then create and pay for their order. 

### Detail any third party services that your App will use.
*Includes a complete and detailed description of third party services used in the app*

** React components for the front end. [React - A JavaScript library for building user interfaces](https://reactjs.org/). This is a framework created by facebook that we will be using to design the UI for our client-side application. 
* We will be using NodeJS to build our server-side application, as it is fast, scalable and asynchronous it is beneficial for our platform. [Node.js](https://nodejs.org/en/)
* Express is used as our framework for NodeJS, it provides our application with quick and effective routing and endpoints for our purposes. [Express - Node.js web application framework](http://expressjs.com/)
* MongoDB for our NoSQL database.  We are using MongoDB, a NoSQL database or document-orientated database is effective for storing our user data. Some features include indexing which allows the documents to be indexed by primary and secondary indices. [MongoDB for GIANT Ideas | MongoDB](https://www.mongodb.com/)
* Mongoose provides ORM for our application with respect to MongoDB. It also allows us to have built-in automatic validation of data whenever we are updating the data. [Mongoose ODM v5.2.3](http://mongoosejs.com/)
* Stripe is our payments provider. This was selected mainly due to its fast ability to install into our application, and to perform two main actions for our application, taking payments and also refunds. Stripe does not charge for refunds which makes it appealing over other providers. [Stripe - Online payment processing for internet businesses | Australia](https://stripe.com/au)
* AWS via Mlab for hosting data. In order to host our mongoDB database online, we are using Mlab. A key advantage is the speed of which we can deploy and begin using Mlab in our application. Through Mlab we have selected AWS as the cloud storage provider over Google Cloud and Microsoft Azure. https://mlab.com/
* Zeit is our provider for deploying our website to a production URL. They have a product called ’now’ which builds our application so that it is production ready. They also have a service which allows us to automatically deploy from GitHub which greatly speeds up our production testing. [Now – Realtime Global Deployments](https://zeit.co/now)
* Sendgrid is a cloud email delivery service. It provides services such as newsletter deliveries, marketing campaigns and other transactional emails such as order confirmations (which will be the main service used in our application). https://sendgrid.com/
* Postman is service that allows our development team to make API calls to our server-side application, which provides a method for the team to test different RESTful endpoints. https://www.getpostman.com/
* JEST and enzyme is used to test our application. JEST the main testing tool for javascript and integrates well into the TDD process. Whilst, Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse a React component’s output. [Jest · 🃏 Delightful JavaScript Testing](https://jestjs.io/)[Jest · Enzyme](http://airbnb.io/enzyme/docs/guides/jest.html)
* 3T is a GUI tool for MongoDB, which our development team has been using as part of our development process. It allows us to write faster queries in an easy-to-read manner.[Studio3T](https://studio3t.com/)


### Provide User stories for your App.
*Over 15 well thought out and relevant user stories provided*
#### As a buyer, I want to create my account on the website to store my recurring information.	
A user can create their own account, with the following fields.
* Email
* Password
A user's account will be linked to their company profile, which has the following fields.
* email
* password
* company name
* address
* saved billing details
#### As a buyer, I want to update my account details on the website so I can adjust any details that I have 	
Buyer needs to update the following fields. 
A user needs to edit the same details that they can create as a general rule.
* Name
* email
* address
* phone number
* Delivery Notes
#### As an administrator, I want access to all user customer accounts and CRUD any details if necessary.	
Allow administrators to perform CRUD actions on all customer and other administrator accounts.
Administrators should have a complete view of all user accounts, with buttons next to each account that allow the actions to be performed.
Extra feature: Account suspension.
####  As a buyer, I would like to have contact options with the website/company so I can raise any disputes or questions I have with the orders.	
As an MVP, on the landing page we will display contact information.
* Company Email
* Company Address
* Company phone
#### As an administrator, I want to answer and/or receive tickets from customers so I can manage customer issues
A customer should be able to create a form where they can input a message heading and also a body for text. Ideally the form can take in reference numbers to assist the administration team’s management of this issue. This user story can also explore other customer management system tools like Zendesk. 	
#### As a buyer, I would like to find my historical invoices in one place, so I can easily manage my ongoing costs.	
A buyer on their account screen should be able to see a view of all of their invoices or orders made on that account. Each invoice should have the date of the order creation as it’s file title, e.g. Invoice’18122017’. Initially the invoices will continue to be displayed down the page with no limit. At a later date, pagination can be included. 
#### As a buyer, I want to pay online at the time of transaction, so I can complete the billing requirements of the order	
The buyer will have to enter the following fields to complete their transaction
* Name
* Billing Address
* Card Number
* Expiry
* Card Name
* CVV
Initially payment details will not be stored by the system and remembered for the user, this additional functionality will come in a future story. 
####  As a buyer, I want to view products in my shopping cart so I can review the items in my current order.	
The shopping cart should display a list of product items that have been ‘added’ by the customer. The list will show the following product details:
* product name
* quantity
* price per product
* subtotal 
* total 
* option to remove item. 
The cart will have an option for the customer to go back to the catalogue or next to the order and payment screen. 
#### As a buyer, I want to be able to checkout without having to sign in (aka Guest User), as I do not plan on transacting more than once. 
On the checkout screen, there will be an option for customers to finalise the order and payment details without having to sign up to the platform. The details that have to be captured are the following:
* name
* company name
* address (shipping and billing)
* payment details (per stripe)
* email
* contact phone number
#### As a buyer, I want view my previous orders/history so I can quickly purchase the same order if necessary.	
A button on the same page as a previous invoice or order should be available, titled “re-buy” or something similar, which will allow the user to purchase the same items in that cart. The previous order will ‘populate’ the current car with the same items. 
#### As a buyer, I want to view a detailed view of a particular product, so I can find out more information prior to making a purchase. 
A detailed product view should provide more information, such as ‘an apple’s place where it was grown’ or a larger image of the product. This detailed view will also require information to be pulled from the products API. 
#### As a buyer, I want an email confirmation of my order and relevant order details so that I have another document that I can refer to at a later date. 
Following every successful completion of an order, an email will be sent with the details of that order to the email address supplied by the customer. The details includes:
* All product information.
* An order ID.
* Shipping details. 
* Contact details. 
#### As an administrator, I want email notifications of newly created orders so the administration team can process the order in the workflow.
Similar to the customer email, an email must be sent to the administration team at a predetermined email address specified by the client. This email will be used by the customer fulfilment team to complete the order and shipping process, which is outside the scope of this project. 
#### As an administrator, order details should be sent through via API to the centralised administration system so the team can process and package the order. 
Similar to the administrator email, when the order is finalised by the customer the administrative system will need to receive a new order with all of its details in the administrative system which is outside of our environment. This will need to be delivered via the API which will create this order and its details inside its system. 
#### As a buyer, I want to filter and/or search for particular products by name, so I can quickly add products I want to my shopping cart.	
Products on the catalogue will be listed alphabetically by default. There will be an option for users to search from products by name or category. Currently the categories are:
* Specials
* Fish
* Vegetables
* Chicken
* Beef
* Lamb
#### As a buyer, I want to view specials or seasons products, so I can reduce my costs for certain products 	
The home page will also display a list of specials or seasonal products. This will highlight any promotions that are currently appearing for the customers. 

### Provide Wireframes for your App.
*More than five detailed and well designed wireframes provided, for several different screen sizes (as required for the app)*

## Desktop Home
<img width="1100" alt="desktop_homepage" src="https://user-images.githubusercontent.com/35912668/42721560-2327c404-8780-11e8-9cf2-dbda55a5c5a7.png">
## Desktop Specials
<img width="1101" alt="desktop_specials" src="https://user-images.githubusercontent.com/35912668/42721564-3430ac48-8780-11e8-9583-6459b7ba3369.png">
## Desktop Signin
<img width="1110" alt="desktop_signin" src="https://user-images.githubusercontent.com/35912668/42721569-48c5e402-8780-11e8-8605-7d6cd8921327.png">
## Desktop Detailed View
<img width="1082" alt="desktop_detailedview" src="https://user-images.githubusercontent.com/35912668/42721572-56fca358-8780-11e8-86dc-f97115cd8aba.png">
## Desktop Order Confirmation
<img width="1099" alt="desktop_orderconfirmation" src="https://user-images.githubusercontent.com/35912668/42721577-6820ef90-8780-11e8-996f-b7e14b54f4a5.png">
## Desktop Shipping Details
<img width="1101" alt="desktop_shipping" src="https://user-images.githubusercontent.com/35912668/42721579-77410e24-8780-11e8-8639-e2b04c257ae1.png">
## Desktop Cart
<img width="1107" alt="desktop_cart" src="https://user-images.githubusercontent.com/35912668/42721581-8846b778-8780-11e8-9e06-df5808efbe5d.png">
## Mobile Cart Confirm
<img width="198" alt="mobile_cartconfirm" src="https://user-images.githubusercontent.com/35912668/42721647-90505784-8781-11e8-9d29-aa48e9c91775.png">
## Mobile Catalogue
<img width="184" alt="mobile_catalogue" src="https://user-images.githubusercontent.com/35912668/42721650-9e85b42a-8781-11e8-8a2d-dc2babe72080.png">
## Mobile Detailed View
<img width="329" alt="mobile_detailedview" src="https://user-images.githubusercontent.com/35912668/42721656-c53998ca-8781-11e8-97fe-1b8242f0df26.png">
## Mobile Edit Cart
<img width="115" alt="mobile_editcart" src="https://user-images.githubusercontent.com/35912668/42721664-e10bab7e-8781-11e8-985b-542c9d4d484d.png">
## Mobile Edit Profile
<img width="113" alt="mobile_editprofile" src="https://user-images.githubusercontent.com/35912668/42721667-eb2ac716-8781-11e8-8693-69d49646e1e3.png">
## Mobile Landing Page Specials
<img width="246" alt="mobile_landingspecials" src="https://user-images.githubusercontent.com/35912668/42721670-f949200e-8781-11e8-91a0-2d7110c98e82.png">

### Describe the way Tasks are being allocated and tracked in your project. 
*Shows significant planning for how tasks are tracked and distributed amongst team members, including a full description of the process and of the tools used*
Tasks are being allocated based on the team’s interests, strengths and weaknesses. We will be balancing tasks so that we can leverage each other’s strengths across project management, front-end, back-end, architecture and design. However, we are also conscious that we need to improve our weaknesses so we are ensuring that tasks are also allocated so that each team member works on something where they are not strong, but ensure we are providing the appropriate level of support to each other. 

We are tracking our tasks in Jira and Confluence. We have attached screenshots of how we are using these products. 

### Confluence Goals
We have outlined project goals in our main confluence space, providing an overall high level picture for the team to work towards. 
<img width="1079" alt="confluence space goal" src="https://user-images.githubusercontent.com/35912668/42721763-98d62f26-8783-11e8-88a8-a583d590d8a5.png">

### Confluence and Jira
Within the same confluence page we have links to open user stories which need to be tasked to the team. Having one main page with all this information allows us to see how we are tracking towards the high level goals of the project for Food Forum. 
<img width="1086" alt="confluence space jira link" src="https://user-images.githubusercontent.com/35912668/42721766-a9cbc458-8783-11e8-889d-6a3d7de9fcb8.png">


### Subpages in Confluence
Within confluence we have setup sub pages for each of the three high level components so that we can dive down into another layer of detail. This includes workflow diagrams that affect the whole component and the user stories related to that component. Here we can also rank what are the 'must have' stories and what are the 'should have' stories for this project. This allows us to further time manage what features can be completed. 
<img width="1085" alt="page board" src="https://user-images.githubusercontent.com/35912668/42721769-ca016f34-8783-11e8-9487-43d29e2e7dc8.png">

### Jira Kanban Board
Finally, we have a kanban board which tracks the status of each story. Within each user story item we also detail any sub tasks or relevant details. 
<img width="1330" alt="kanban board" src="https://user-images.githubusercontent.com/35912668/42721774-d8bba760-8783-11e8-928e-2935da34c2ae.png">


### Discuss how Agile methodology is being implemented in your App.
*Meets D with at least 15 user stories and meetings from regular scrum and client meetings held to this point*
We are having regular meetings with our client, as evidenced by the three questionnaires. We are conscious that as we develop these products we may not have the full picture, therefore we develop and iterate over multiple MVPs. We leverage Confluence, a documenting collaboration tool, to plan out ‘must have’ and ‘should have’ features. This allows us to build upon our user stories in each release and continue improving our product. Whilst making it available to customers to test and allow us developers to receive feedback. 

We have planning our user stories with Jira, which integrates well with Confluence. It provides us the granularity in tracking the progress of our development on a Kanban board, whilst providing us with a higher level view of which abstracted component we are building (CMS, cart or orders). See the images in the previous question above for further details

### Provide an overview and description of your Source control process.
*Meets D criteria and demonstrates frequent commits, merges and pull requests from all team members up to the point of this submission*

Our daily git flow on Github is shown in our diagram attached
<img width="810" alt="git flow" src="https://user-images.githubusercontent.com/35912668/42721785-15d5470a-8784-11e8-8c13-200b0f8f7c07.png">

1. In the morning, we pull any updates from the CORP repo into our User Local Master. 
a. Then we switch to our development branch to begin the days work. At this point we also create a new branch for the feature we’re working on. 
b. Towards the end of the day, we move our feature work into our Dev branch in preparation of committing its changes back to the main corp repo. 
2. Assuming all of our new code has been committed in our local development branch. We perform a rebase from our corp account into our local master. This pulls any new code that other developers may have already committed into our User Local Master. The rebase also places our current development code on top of the new code we just pulled from CORP. If the rebase does not automatically sync, then we work through and approve any amendments necessary. Finally, after this process we push this new code onto our User’s GitHub account (a forked repo from CORP). 
3. The final step we create a pull request to pull the information in the forked repo into the corp repo. This request will be approved by another team member before finalising the pull. 

### Provide an overview and description of your Testing process.
*Meets D with tests documented or defined for all user stories, extensive use of unit testing on code completed thus far, and well organized test results*
For our testing we will be using JEST for tests on the front and back end. In addition to JEST we are also using enzyme to test our react components. In most cases we are following the ‘red, green, refactor’ approach to TDD with these testing frameworks. We are also using Postman to mimic API calls and test the server requests. We have attached screenshots of some of the tests we currently have in place and their outputs. 
<img width="880" alt="app_test_js" src="https://user-images.githubusercontent.com/35912668/42721806-a65d5f2e-8784-11e8-9572-ad3ac1acc5ec.png">
<img width="979" alt="product tests" src="https://user-images.githubusercontent.com/35912668/42721811-b7c08d90-8784-11e8-8a90-508cda8e8615.png">
<img width="899" alt="setuptests_js" src="https://user-images.githubusercontent.com/35912668/42721818-c5256f50-8784-11e8-95d7-202172fee06f.png">
<img width="421" alt="testsuiteoutput" src="https://user-images.githubusercontent.com/35912668/42721825-d1949c48-8784-11e8-88a7-9bf85fcbecb4.png">
![get_user](https://user-images.githubusercontent.com/35912668/42721833-dcef287e-8784-11e8-804c-9c56450d867d.png)
![post_register](https://user-images.githubusercontent.com/35912668/42721836-e9a04f9e-8784-11e8-8c4f-2cbf6f6b03fb.png)


### Discuss and analyse requirements related to information system security. 
*Meets D with evidence that options were discussed with the client and agreement was reached*

Overall our requirements for storing data are lower than the overage business due to the location of our services and also the data types we store. 

We are not affected by General Data Protection Regulation (GDPR) today as all of our customers and services provided are in southern regional NSW. As there is a low likelihood and an inability to service customers located in the EU,  we have not addressed GDPR today. 

 This application will not store any Personally Identifiable Information (PII). PII includes data fields such as, National ID number, Passport number, Visa permit number, Driver's license number, Bank and credit/debit card numbers, Disability status, Ethnicity,  and Gender.  The only data we take is name, email, password, company name, and company address, some of this will need to be protected. Payment information will also need to be secured. 


### Discuss methods you will use to protect information and data. 
*Meets D with clear documentation on the specific methods that will be used for this project to protect information and data and why these methods were chosen*

The first method of data security that we are using is data limitation. We limit the data we keep in the application and only ask for what we need. For example, we could store ABNs and other company data in this e-commerce website, however as it is not strictly required as it is stored elsewhere in Food Forum’s business and can be retrieved there when required. 

As mentioned previously, password security and encryption is critical for this application. We are using the Bcrpyt npm package [bcrypt  -  npm](https://www.npmjs.com/package/bcrypt)to hash the password. 

### Research what your legal obligations are in relation to handling user data.
*Meets D with evidence of discussion of findings with the client and agreement on approach to be used to meet legal obligations*

Per our first questionnaire with the client, we confirmed the client currently did not have any data policies in place. They are open to suggestion for any suggestions we have in place. 

The main legal obligation we need to be in compliance with is the privacy act. Due to the limited amount of personal information (just name), as Food Forum is a B2B company. The privacy act can be found here  https://www.oaic.gov.au/privacy-law/privacy-act/.

We are not affected by General Data Protection Regulation (GDPR) today as all of our customers and services provided are in southern regional NSW. As there is a low likelihood and an inability to service customers located in the EU,  we have not addressed GDPR today. 



### Identify the database to be used in your app and provide a justification for your choice
*Full discussion of the database used, including an excellent assessment of the pros and cons of this type of database*
We will be using the Mongo DB noSQL database as its schema allows it to store non-transactional information like user profiles in a more scalable manner. 

There was initial plans to put the shopping cart data into our MongoDB database, however we opted to put this information into local storage within the browser. As shopping carts are not objects that are required to persist for a long period of time, we opted to use a data storage option that reflected this nature of shopping carts.

###  Discuss the database relations to be implemented
*Provides a full discussion of the database relations, with reference to the ERD*

Per our ERD. We only have one document in our MongoDB database. This is the User document. The purpose of this user table is to capture all the details about the user or the company. This table reflects the MVP that we will currently build. We are confident that at a minimum a company, name, address and phone number are the mandatory fields that will be stored on our platform apart from email and password. We have a high confidence that delivery instructions will also be included based on our timelines and have included it in our schema design today. As mentioned previously, we are not storing product information within our platform and have not created a schema design for it. Nor are we storing shopping cart or order details in our MongoDB server, instead it is contained within local storage on the client side. 
### Provide your database schema design
*Flawless,complex, complete, and well thought through ERDs provided.*

<img width="274" alt="erd" src="https://user-images.githubusercontent.com/35912668/42721861-337be3b2-8785-11e8-8f2f-7172299384ff.png">

