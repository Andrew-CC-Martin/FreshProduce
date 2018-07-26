# Fresh Produce - CoderAcademy Project 
This is the README for the FreshProduce website built for the Food Forum, as part of the CoderAcademy group project. This is a document is subject to revisions as the project progresses. 
## Link to Production
[Food Forum](https://foodforumco.netlify.com/)

## Table of Contents Part A
### [1. Who is your Client](#q1)
### [2. What is your client’s need (i.e. challenge) that you will be addressing in your project?](#q2)
### [3. Describe the client’s current setup and data.](#q3)
### [4. Describe the project will you be conducting and how your App will address the client’s needs.](#q4)
### [5. Identify and describe the software (including databases) to be used in your App.](#q5)
### [6. Identify and describe the network setup you will use in your development.](#q6)
### [7. Identify and describe the infrastructure (i.e. hardware) that your App will run on.](#q7)
### [8. Describe the architecture of your App.](#q8)
### [9. Explain the different high-level components (abstractions) in your App.](#q9)
### [10. Detail any third party services that your App will use.](#q10)
### [11. Identify the database to be used in your app and provide a justification for your choice.](#q11)
### [12. Discuss the database relations to be implemented.](#q12)
### [13. Provide your database schema design.](#q13)
### [14. Provide User stories for your App.](#q14)
### [15. Provide Wireframes for your App.](#q15)
### [16. Describe the way Tasks are being allocated and tracked in your project.](#q16)
### [17. Discuss how Agile methodology is being implemented in your App.](#q17)
### [18. Provide an overview and description of your Source control process.](#q18)
### [19. Provide an overview and description of your Testing process.](#q19)
### [20. Discuss and analyse requirements related to information system security.](#q20)
### [21. Discuss methods you will use to protect information and data.](#q21)
### [22. Research what your legal obligations are in relation to handling user data.](#q22) 

## Part B - Project Management
### [1. Record interactions with your client in a diary format](#bq1)
### [2. Plan information gathering activities to determine project requirements, constraints and risks](#bq2)
### [3. Develop project charter, including preliminary statement of project scope and obtain sign-off](#bq3)
### [4. Prepare project work breakdown and schedule](#bq4)
### [5. Allocate roles and responsibilities to team members, based on project solution requirements](#bq5)
### [6. Monitor each other’s assigned work](#bq6)
### [7. Reassess ongoing project scope changes, risks and issues](#bq7)
### [8. Manage system testing and hand over activities. Prepare maintenance or support plans for client](#bq8)
### [9. Obtain final project sign-off](#bq9)
### [10. As a team, conduct post project review](#bq10)
### [11. Create a questionnaire for the client to ascertain the satisfaction with your products and services](#bq11)

## Part B - Application Design 

### [1. A 350 word summary of your application including problem definition and solution](#cq1)
### [2. Review the conceptual design with the client and edit based on their feedback](#cq2)
### [3. User stories for the whole application](#cq3)
### [4. A workflow diagram of the user journey/s](#cq4)
### [5. Wireframes for all main pages of your app](#cq5)
### [6. Entity Relationship Diagram (ERD)](#cq6)
### [7. Project plan and effort estimation](#cq7)
***


### <a id="q1"></a>1. Who is your client? 
Our client is “Food Forum”, a fresh produce wholesaler operating out of Canberra, ACT. They currently have a website, [The Food Forum - Home](http://www.thefoodforum.com.au/) which acts as a landing page for marketing purposes. 

### <a id="q2"></a>2. What is your client’s need (i.e. challenge) that you will be addressing in your project?
* Our client wants to sell their produce online.
* They want their users to be able to place orders online.
* Their users are typically restaurants, hospitals and other food related businesses. 
* Ideally the platform can take and store payment details. 
* Users can see live stock levels, specials and other deals.
* Users can view delivery times. 
* Users have profiles (e.g. last order, address, phone number). Current balance.
* Users need to place and update orders quickly as they are time poor. 
* Users need to setup returns/rejects or open a ticket to discrepancies. 

###  <a id="q3"></a>3. Describe the client’s current setup and data.

* The client currently has a website that displays the produce and services they offer. It acts primarily as a marketing website for the business and generates leads. 
* There is no data captured as a part of this website, however the business does have other systems which take in data. 
* There is an internal database which tracks prices and products on offer. It does not track the exact quantity or volumes that are currently available, however it does track whether an item is currently in or out of stock. 
* There are many manual processes as part of the operation, such as paper sheets which show the delivery information for truck drivers and other order-related documents that are manually reconciled between different team members. 
* For the scope of this project, the key data that we will be requiring access to is the product information. This will be made available to us via the API, per the architecture diagram. 


### <a id="q4"></a>4. Describe the project will you be conducting and how your App will address the client’s needs.

Our goal for this project is to create a digital sales channel for Food Forum, similar to a Woolworths online or Harris Farms online. The key requirements for our client is for their customers to place orders online. The project has three main components which are required to meet these requirements. 
1. A client management system, which allows customer’s of Food Forum, such as restaurants and hospitals, to have their own profile where they can login, and manage their details (e.g. address).
2. A catalogue or product listing, which shows all the products on offer and any associated discounts. This is a requirement as customers need to view the items that want to add to their order. 
3. A shopping cart and order confirmation system. This is required as all the listed products need to be collected into a cart, so the order can be fulfilled by the Food Forum team. The other requirements in this component is the recording of shipping and billing details, so the payment can be processed online. 
These are the three high level components that are required for customers to find and transact on produce items in an online or digital environment. It covers the process from selecting items, to collecting items and finally shipping the item to the customer. 
<img width="602" alt="appcomponents" src="https://user-images.githubusercontent.com/35912668/42721427-26ee4b46-877e-11e8-8223-5042d1d63242.png">

### <a id="q5"></a>5. Identify and describe the software (including databases) to be used in your App.

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
* JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. [JWT](https://jwt.io/)
* dotenv is our npm packages that allows us to store and retrieve environment variables such as the mongoURI, JWT tokens and ports. [dotenv](https://www.npmjs.com/package/dotenv)

### <a id="q6"></a>6. Identify and describe the network setup you will use in your development.

Our MERN app uses several technologies in its network setup in order for us to be on production. 
Locally, we have our React (client-side) application running on port 3000, whilst our Node(server-side) is running on port 5000. We are also using Postman locally to test our API routes in our development environment. In order for these networks to work, we leverage the routing framework provided by Express.  

In order for our application to be deployed we are using Mlab and Zeit. Mlab, provides Database-as-a-service for MongoDB. Within the Mlab configuration we have used the AWS as the storage provider. We have setup environment variables for production so that the Mlab database will store our MongoDB database. Our Mlab database is in the North Virginia AWS location. 

Zeit [ZEIT](https://zeit.co/) is our deployment service for both our client and server. 
* For the server side,our current deployment process is as follows. 
	1. For the server side app, we connect Mlab into production via the address (MONGODB_URI) of the Mlab - mongoDB server.  
	2. Pass through environment variables to Zeit such as the MONGODB_URI and our JWT secret which is required for logins. 
	3. Using the Zeit Now shell this creates the deployment URL for our server side application. 
* For the client side, we run a similar process. 
	1. The action `npm run build` creates a build folder for Zeit to ingest. 
	2. Similarly to server, we have to pass through the environment variables via `dotenv` 
	3. Now Shell will create the production URL. 


### <a id="q7"></a>7. Identify and describe the infrastructure (i.e. hardware) that your App will run on.

Whilst our application does not directly use any hardware, we are dependent on some hardware of our third party providers. As our mongoDB server is hosted on AWS via mLab, our dependant hardware can be assumed as AWS hardware. Therefore, our hardware includes the use of Intel Xeon type processors, which power AWS. Furthermore, AWS uses a customized Broadcom Tomahawk ASIC for their routers which allow for a total flow-through of 3.2 terabits.

### <a id="q8"></a>8. Describe the architecture of your App.

Overall we aim to have a microservices architecture, with each component that we build being modular. This means that we can swap out each piece and still have the application function. For example, we are able to switch out our CMS to another service like Zendesk, with minimal downtime if we maintain the microservices architecture. Similarly, by having our server-side application broken away, any changes or new technologies that we leverage in future on our server-side application won't require as many changes or configurations in the client-side. 

<img width="811" alt="app architecture" src="https://user-images.githubusercontent.com/35912668/42731626-618066d2-8854-11e8-82ed-02fd1ed189d0.png">

Our app architecture is broken into two main systems, server and client. Our server-side application has a MongoDB (NoSQL) database, with the Express package providing the server-side routing. The server side code is all written in nodeJS. Our MongoDB database leverages Mongoose as an ORM, which subsequently interfaces with our models. In our application our models are quite thin, and only stores user and company profile information. Express provides RESTful routing for our server routes, and information such as user and profile data, is passed via these routes to our client side application. 

Our client-side application is built predominately with the react framework. Our application is also heavily reliant on a external API from Food Forum which provides our application with product information that is populated in our catalogue. This affects our architecture as our application is not responsible for storing the product information. If our application were to manage product information as well, then errors such as stock level mis-matches could occur as there are two different databases of the same information. By having product information coming from one database and accessing via an API removes this potential risk. 



### <a id="q9"></a>9. Explain the different high-level components (abstractions) in your App.

<img width="602" alt="appcomponents" src="https://user-images.githubusercontent.com/35912668/42721427-26ee4b46-877e-11e8-8223-5042d1d63242.png">
Per the image above, our application has two high level components in our server-side application. It has an external API connection to access production information. It also has a connection to a MongoDB database. 
Whilst on our client-side application there are main components. The first, a client management system which provides functionality for our customers and administrative team to manage their own accounts and profiles. The second, a Product catalogue and landing page which displays all available products for our customers as well as a search/filtering functionality. The third and final component is our cart and ordering component. This component provides customers to store all their desired items in a shopping cart, then create and pay for their order. 

### <a id="q10"></a>10. Detail any third party services that your App will use.

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
* JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. [JWT](https://jwt.io/)
* dotenv is our npm packages that allows us to store and retrieve environment variables such as the mongoURI, JWT tokens and ports. [dotenv](https://www.npmjs.com/package/dotenv)

### <a id="q11"></a>11. Identify the database to be used in your app and provide a justification for your choice

We will be using the MongoDB noSQL database as its structure allows it to store non-transactional information like user profiles in a more scalable manner. MongoDB is also schema less which a collection can hold various documents. This provides us with a better structure of a single object and also no complex joins. Furthermore the conversion of application objects to database objects are not needed. If we had transactional or 'ledger-like' information such as financial data, we would have opted for other databases such as Postgresql, which handle this data better. However as we are only storing user-related or user management type data, a MongoDB database is the better choice.

There were initial plans to put the shopping cart data into our MongoDB database, however we opted to put this information into local storage within the browser. As shopping carts are not objects that are required to persist for a long period of time, we opted to use a data storage option that reflected this nature of shopping carts.

### <a id="q12"></a>12. Discuss the database relations to be implemented

Per our ERD (see question 13), we only have one document in our MongoDB database. This is the User document. The purpose of this user table is to capture all the details about the user or the company. This table reflects the MVP that we will currently build. We are confident that at a minimum, a company, name, address and phone number are the mandatory fields that will be stored on our platform apart from email and password. We have a high confidence that delivery instructions will also be included based on our timelines and have included it in our design today. As mentioned previously, we are not storing product information within our platform and have not created a design for it. Nor are we storing shopping cart or order details in our MongoDB server, instead it is contained within local storage on the client side. 

### <a id="q13"></a>13. Provide your database schema design

See question 12 for the explanation of the ERD.
<img width="274" alt="erd" src="https://user-images.githubusercontent.com/35912668/42721861-337be3b2-8785-11e8-8f2f-7172299384ff.png">

### <a id="q14"></a>14. Provide User stories for your App.

#### As a buyer, I want to create my account on the website to store my recurring information.	
A user can create their own account, with the following fields.
* Email
* Password
A user's account will be linked to their company profile, which has the following fields.
* email
* password
* company name
* address
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

### <a id="q15"></a>15. Provide Wireframes for your App.


#### Desktop Home
<img width="1100" alt="desktop_homepage" src="https://user-images.githubusercontent.com/35912668/42721560-2327c404-8780-11e8-9cf2-dbda55a5c5a7.png">

#### Desktop Specials
<img width="1101" alt="desktop_specials" src="https://user-images.githubusercontent.com/35912668/42721564-3430ac48-8780-11e8-9583-6459b7ba3369.png">

#### Desktop Signin
<img width="1110" alt="desktop_signin" src="https://user-images.githubusercontent.com/35912668/42721569-48c5e402-8780-11e8-8605-7d6cd8921327.png">

#### Desktop Detailed View
<img width="1082" alt="desktop_detailedview" src="https://user-images.githubusercontent.com/35912668/42721572-56fca358-8780-11e8-86dc-f97115cd8aba.png">

#### Desktop Order Confirmation
<img width="1099" alt="desktop_orderconfirmation" src="https://user-images.githubusercontent.com/35912668/42721577-6820ef90-8780-11e8-996f-b7e14b54f4a5.png">

#### Desktop Shipping Details
<img width="1101" alt="desktop_shipping" src="https://user-images.githubusercontent.com/35912668/42721579-77410e24-8780-11e8-8639-e2b04c257ae1.png">

#### Desktop Cart
<img width="1107" alt="desktop_cart" src="https://user-images.githubusercontent.com/35912668/42721581-8846b778-8780-11e8-9e06-df5808efbe5d.png">

#### Mobile Cart Confirm
<img width="198" alt="mobile_cartconfirm" src="https://user-images.githubusercontent.com/35912668/42721647-90505784-8781-11e8-9d29-aa48e9c91775.png">

#### Mobile Catalogue
<img width="184" alt="mobile_catalogue" src="https://user-images.githubusercontent.com/35912668/42721650-9e85b42a-8781-11e8-8a2d-dc2babe72080.png">

#### Mobile Detailed View
<img width="329" alt="mobile_detailedview" src="https://user-images.githubusercontent.com/35912668/42721656-c53998ca-8781-11e8-97fe-1b8242f0df26.png">

#### Mobile Edit Cart
<img width="115" alt="mobile_editcart" src="https://user-images.githubusercontent.com/35912668/42721664-e10bab7e-8781-11e8-985b-542c9d4d484d.png">

#### Mobile Edit Profile
<img width="113" alt="mobile_editprofile" src="https://user-images.githubusercontent.com/35912668/42721667-eb2ac716-8781-11e8-8693-69d49646e1e3.png">

#### Mobile Landing Page Specials
<img width="246" alt="mobile_landingspecials" src="https://user-images.githubusercontent.com/35912668/42721670-f949200e-8781-11e8-91a0-2d7110c98e82.png">

### <a id="q16"></a>16. Describe the way Tasks are being allocated and tracked in your project. 

Tasks are being allocated based on the team’s interests, strengths and weaknesses. We will be balancing tasks so that we can leverage each other’s strengths across project management, front-end, back-end, architecture and design. However, we are also conscious that we need to improve our weaknesses so we are ensuring that tasks are also allocated so that each team member works on something where they are not strong, but ensure we are providing the appropriate level of support to each other. 

We are tracking our tasks in Jira and Confluence. We have attached screenshots of how we are using these products. 

#### Confluence Goals

We have outlined project goals in our main confluence space, providing an overall high level picture for the team to work towards. 

<img width="1079" alt="confluence space goal" src="https://user-images.githubusercontent.com/35912668/42721763-98d62f26-8783-11e8-88a8-a583d590d8a5.png">

#### Confluence and Jira

Within the same confluence page we have links to open user stories which need to be tasked to the team. Having one main page with all this information allows us to see how we are tracking towards the high level goals of the project for Food Forum. 

<img width="1086" alt="confluence space jira link" src="https://user-images.githubusercontent.com/35912668/42721766-a9cbc458-8783-11e8-889d-6a3d7de9fcb8.png">

#### Subpages in Confluence

Within confluence we have setup sub pages for each of the three high level components so that we can dive down into another layer of detail. This includes workflow diagrams that affect the whole component and the user stories related to that component. Here we can also rank what are the 'must have' stories and what are the 'should have' stories for this project. This allows us to further time manage what features can be completed.
 
<img width="1085" alt="page board" src="https://user-images.githubusercontent.com/35912668/42721769-ca016f34-8783-11e8-9487-43d29e2e7dc8.png">

#### Jira Kanban Board

Finally, we have a kanban board which tracks the status of each story. Within each user story item we also detail any sub tasks or relevant details.

<img width="1330" alt="kanban board" src="https://user-images.githubusercontent.com/35912668/42721774-d8bba760-8783-11e8-928e-2935da34c2ae.png">


### <a id="q17"></a>17. Discuss how Agile methodology is being implemented in your App.

We have three questionnaires with our client in order to fact find and constantly iterate as problems arise.
<img width="759" alt="cq1top" src="https://user-images.githubusercontent.com/35912668/42730969-bcb89208-8846-11e8-82eb-65dc37c08e31.png">

<img width="745" alt="cq1bottom" src="https://user-images.githubusercontent.com/35912668/42730975-cebb0b8e-8846-11e8-94f4-a0e00ab18186.png">

<img width="709" alt="cq2" src="https://user-images.githubusercontent.com/35912668/42730978-db0e8f46-8846-11e8-84c4-9f8dea37d4e7.png">

<img width="704" alt="cq3" src="https://user-images.githubusercontent.com/35912668/42730981-ea98f776-8846-11e8-8113-12318c32f7f5.png">

 We are conscious that as we develop these products we may not have the full picture, therefore we develop and iterate over multiple MVPs. We leverage Confluence, a documenting collaboration tool, to plan out ‘must have’ and ‘should have’ features. This allows us to build upon our user stories in each release and continue improving our product. Whilst making it available to customers to test and allow us developers to receive feedback. 

We have planning our user stories with Jira, which integrates well with Confluence. It provides us the granularity in tracking the progress of our development on a Kanban board, whilst providing us with a higher level view of which abstracted component we are building (CMS, cart or orders). See the images in the previous question above for further details

### <a id="q18"></a>18. Provide an overview and description of your Source control process.

Our daily git flow on Github is shown in our diagram attached
<img width="810" alt="git flow" src="https://user-images.githubusercontent.com/35912668/42721785-15d5470a-8784-11e8-8c13-200b0f8f7c07.png">

1. In the morning, we pull any updates from the CORP repo into our User Local Master. 
a. Then we switch to our development branch to begin the days work. At this point we also create a new branch for the feature we’re working on. 
b. Towards the end of the day, we move our feature work into our Dev branch in preparation of committing its changes back to the main corp repo. 
2. Assuming all of our new code has been committed in our local development branch. We perform a rebase from our corp account into our local master. This pulls any new code that other developers may have already committed into our User Local Master. The rebase also places our current development code on top of the new code we just pulled from CORP. If the rebase does not automatically sync, then we work through and approve any amendments necessary. Finally, after this process we push this new code onto our User’s GitHub account (a forked repo from CORP). 
3. The final step we create a pull request to pull the information in the forked repo into the corp repo. This request will be approved by another team member before finalising the pull. 

An example of our team's frequent merges and pulls can be seen in the below screenshot of our repo. 
<img width="1089" alt="git example" src="https://user-images.githubusercontent.com/35912668/42730580-3e8a274e-883b-11e8-842e-f476554c265e.png">

### <a id="q19"></a>19. Provide an overview and description of your Testing process.

For our testing we will be using JEST for tests on the front and back end. In addition to JEST we are also using enzyme to test our react components. In most cases we are following the ‘red, green, refactor’ approach to TDD with these testing frameworks. We are also using Postman to mimic API calls and test the server requests. We have attached screenshots of some of the tests we currently have in place and their outputs. 
<img width="880" alt="app_test_js" src="https://user-images.githubusercontent.com/35912668/42721806-a65d5f2e-8784-11e8-9572-ad3ac1acc5ec.png">
<img width="979" alt="product tests" src="https://user-images.githubusercontent.com/35912668/42721811-b7c08d90-8784-11e8-8a90-508cda8e8615.png">
<img width="899" alt="setuptests_js" src="https://user-images.githubusercontent.com/35912668/42721818-c5256f50-8784-11e8-95d7-202172fee06f.png">
<img width="421" alt="testsuiteoutput" src="https://user-images.githubusercontent.com/35912668/42721825-d1949c48-8784-11e8-88a7-9bf85fcbecb4.png">
![get_user](https://user-images.githubusercontent.com/35912668/42721833-dcef287e-8784-11e8-804c-9c56450d867d.png)
![post_register](https://user-images.githubusercontent.com/35912668/42721836-e9a04f9e-8784-11e8-8c4f-2cbf6f6b03fb.png)


### <a id="q20"></a>20. Discuss and analyse requirements related to information system security. 

We had discussions with the client as seen in question 17(9th point in Questionnaire 1), around current data and information security policies. Currently, they do not have policies in place as they do not have much of their business online. The findings of our infosec standing are below following these discussions.
Overall our requirements for storing data are lower than the overage business due to the location of our services and also the data types we store. 

We are not affected by General Data Protection Regulation (GDPR) today as all of our customers and services provided are in southern regional NSW. As there is a low likelihood and an inability to service customers located in the EU,  we have not addressed GDPR today. 

This application will not store any Personally Identifiable Information (PII). PII includes data fields such as, National ID number, Passport number, Visa permit number, Driver's license number, Bank and credit/debit card numbers, Disability status, Ethnicity,  and Gender.  The only data we take is name, email, password, company name, and company address, some of this will need to be protected. Payment information will also need to be secured. 


### <a id="q21"></a>21. Discuss methods you will use to protect information and data. 

The first method of data security that we are using is data limitation. We limit the data we keep in the application and only ask for what we need. For example, we could store ABNs and other company data in this e-commerce website, however as it is not strictly required as it is stored elsewhere in Food Forum’s business and can be retrieved there when required. 

As mentioned previously, password security and encryption is critical for this application. We are using the Bcrpyt npm package [bcrypt  -  npm](https://www.npmjs.com/package/bcrypt)to hash the password. 

We are also using JSON Web Tokens (JWT) when we are transmitting information. JWTs were used for authentication as it can securely identify each user as they login to our system. By using JWTs we will ensure that users cannot access data that is not their own, for example userA cannot see userB's data. 

### <a id="q22"></a>22. Research what your legal obligations are in relation to handling user data.

Per our first questionnaire with the client, we confirmed the client currently did not have any data policies in place. They are open to suggestion for any suggestions we have in place. 

The main legal obligation we need to be in compliance with is the privacy act. Due to the limited amount of personal information (just name), as Food Forum is a B2B company. The privacy act can be found here  https://www.oaic.gov.au/privacy-law/privacy-act/.

We are not affected by General Data Protection Regulation (GDPR) today as all of our customers and services provided are in southern regional NSW. As there is a low likelihood and an inability to service customers located in the EU,  we have not addressed GDPR today. 

### <a id ="bq1"></a> 1.Record interactions with your client in a diary format
See diary. 
[Client Interaction Diary - Google Docs](https://docs.google.com/document/d/1Tg2m_KE3JQ6sk4KiW-TVW7Bl2Cs48wjXYDpj0bIB4P8/edit?usp=sharing)

Logo about email 
<img width="1058" alt="email logo" src="https://user-images.githubusercontent.com/35912668/43197350-43128e94-904e-11e8-8fe8-ba04bba7272d.png">

Survey Response 
[Straight A's Project Review by Food Forum - Google Forms.pdf](https://github.com/JamesApple/FreshProduce/files/2227546/Straight.A.s.Project.Review.by.Food.Forum.-.Google.Forms.pdf)

### <a id ="bq2"></a> 2. Plan information gathering activities to determine project requirements, constraints and risks
Our information gathering acitivities mainly consisted of questionnaires. Screenshots can be seen here. 

<img width="759" alt="cq1top" src="https://user-images.githubusercontent.com/35912668/42730969-bcb89208-8846-11e8-82eb-65dc37c08e31.png">

<img width="745" alt="cq1bottom" src="https://user-images.githubusercontent.com/35912668/42730975-cebb0b8e-8846-11e8-94f4-a0e00ab18186.png">

<img width="709" alt="cq2" src="https://user-images.githubusercontent.com/35912668/42730978-db0e8f46-8846-11e8-84c4-9f8dea37d4e7.png">

<img width="704" alt="cq3" src="https://user-images.githubusercontent.com/35912668/42730981-ea98f776-8846-11e8-8113-12318c32f7f5.png">

### <a id ="bq3"></a> 3. Develop project charter, including preliminary statement of project scope and obtain sign-off
Please see at
[Straight A’s Project Charter - Google Docs](https://docs.google.com/document/d/19sDFtbz8ihcnDQnv93GQbKffrgJoPQUgUjIQ6E8xZV0/edit?usp=sharing)

### <a id="bq4"></a> 4. Prepare project work breakdown and schedule
Work was broken down into user stories and in some instances sub tasks within a story. We aimed to develop the Client Management System and the product first in parallel, followed by the order and payments in the latter part of the assignment. 

You can see evidence of this in our Git commit history attached below, 
Screenshot of GitHub commit history and overall process
<img width="993" alt="git commits workflow" src="https://user-images.githubusercontent.com/35912668/43052494-9bfac13e-8e69-11e8-956d-a3b92483eb2a.png">

You can see evidence of how we use sub tasks within user stories to break down work below. 
<img width="1014" alt="jira sub tasks" src="https://user-images.githubusercontent.com/35912668/43052545-2e9c8162-8e6a-11e8-847d-506ebce433d5.png">
### <a id="bq5"></a> 5. Allocate roles and responsibilities to team members, based on project solution requirements
Tasks are being allocated based on the team’s interests, strengths and weaknesses. We will be balancing tasks so that we can leverage each other’s strengths across project management, front-end, back-end, architecture and design. However, we are also conscious that we need to improve our weaknesses so we are ensuring that tasks are also allocated so that each team member works on something where they are not strong, but ensure we are providing the appropriate level of support to each other.
An example of how we are allocating and assigning roles can be seen below. 
<img width="1056" alt="jira assignments" src="https://user-images.githubusercontent.com/35912668/43043186-d0afbafe-8dd0-11e8-8de0-52fbdc23e0df.png">

### <a id="bq6"></a> 6. Monitor each other’s assigned work
Discussion on collaboration and assistance during the dev process
We monitor each others assigned work by having daily standups and retros. We also leverage collaboration tools like Slack, Jira and Confluence. These tools help the team to discuss issues when we are not located together, and also be specific if we have an issue with a story we have to discuss. 
We have attached an example of where we use Jira comments to notify each other of issues. 
<img width="667" alt="jira comment example" src="https://user-images.githubusercontent.com/35912668/43052680-41263962-8e6b-11e8-9de3-e7565bfa86ab.png">

### <a id="bq7"></a> 7. Reassess ongoing project scope changes, risks and issues
We have also addressed scope change issues in our project charter with the Client, so they know it is a possibility that some changes in scope can happen. This helps manage the risk of the client in receiving work that is different to their expectations. Furthermore, as issues arise we also make a note of them and notify each team member in writing (typically through Jira or confluence), so the affected user story reflects scope changes. We had an instance where we changes the payments scope with the customer, as it became clear that refunds were necessary. Originally we had only scoped for a one-off payments but due to refunds were required by the Client to manage weight variances in the fresh produce, we have since scoped it out. 


### <a id="bq8"></a> 8. Manage system testing and hand over activities. Prepare maintenance or support plans for client
We have used JEST for a lot of our testing and have saved a lot of our API routing tests in postman for our client to re-use. Screenshots have been included below. We have a clause in our project charter outlining our support plan. In essence, it mentions the transfer of repositories (the code base) and also all relevant documentation in Jira and Confluence. Confluence was chosen at the beginning of the project as it neatly presents the reasons why certain development and design were chosen and can be used by the client as wiki for ongoing support. 
<img width="880" alt="app_test_js" src="https://user-images.githubusercontent.com/35912668/42721806-a65d5f2e-8784-11e8-9572-ad3ac1acc5ec.png">
<img width="979" alt="product tests" src="https://user-images.githubusercontent.com/35912668/42721811-b7c08d90-8784-11e8-8a90-508cda8e8615.png">
<img width="899" alt="setuptests_js" src="https://user-images.githubusercontent.com/35912668/42721818-c5256f50-8784-11e8-95d7-202172fee06f.png">
<img width="421" alt="testsuiteoutput" src="https://user-images.githubusercontent.com/35912668/42721825-d1949c48-8784-11e8-88a7-9bf85fcbecb4.png">
![get_user](https://user-images.githubusercontent.com/35912668/42721833-dcef287e-8784-11e8-804c-9c56450d867d.png)
![post_register](https://user-images.githubusercontent.com/35912668/42721836-e9a04f9e-8784-11e8-8c4f-2cbf6f6b03fb.png)
### <a id="bq9"></a>9. Obtain final project sign-off
 See Survey results 
 [Straight A's Project Review by Food Forum - Google Forms.pdf](https://github.com/JamesApple/FreshProduce/files/2227546/Straight.A.s.Project.Review.by.Food.Forum.-.Google.Forms.pdf)

### <a id="bq10"></a> 10. As a team, conduct post project review
The team conducted a post project review and came out with the following high level review points. 
* Upfront planning was done well, we had much of our wire framing, workflows and designs done. It allowed us to begin coding with confidence from an early point. 
* The team worked well with being flexible to the schedules of each team member, whilst maintaining a high work output. 
* The team can improve the communication when there are new details or insights from the development process. For example when, we are discussing roadblocks in a user story, we were slower to react to these technical challenges as we didn’t share or write it down in jira/confluence
### <a id="bq11"></a> 11. Create a questionnaire for the client to ascertain the satisfaction with your products and services.
See Survey Response
[Straight A's Project Review by Food Forum - Google Forms.pdf](https://github.com/JamesApple/FreshProduce/files/2227546/Straight.A.s.Project.Review.by.Food.Forum.-.Google.Forms.pdf)

## Application Design 

### <a id="cq1"></a> 1. A 350 word summary of your application including problem definition and solution

#### Our client needs the following problems addressed. 
* Our client wants to sell their produce online.
* They want their users to be able to place orders online.
* Their users are typically restaurants, hospitals and other food related businesses. 
* Ideally the platform can take and store payment details. 
* Users can see live stock levels, specials and other deals.
* Users can view delivery times. 
* Users have profiles (e.g. last order, address, phone number). Current balance.
* Users need to place and update orders quickly as they are time poor. 
* Users need to setup returns/rejects or open a ticket to discrepancies. 
#### Our Proposed Solution 
<img width="602" alt="appcomponents" src="https://user-images.githubusercontent.com/35912668/42721427-26ee4b46-877e-11e8-8223-5042d1d63242.png">
Our goal for this project is to create a digital sales channel for Food Forum, similar to a Woolworths online or Harris Farms online. The key requirements for our client is for their customers to place orders online. The project has three main components which are required to meet these requirements. 
1. A client management system, which allows customer’s of Food Forum, such as restaurants and hospitals, to have their own profile where they can login, and manage their details (e.g. address).
2. A catalogue or product listing, which shows all the products on offer and any associated discounts. This is a requirement as customers need to view the items that want to add to their order. 
3. A shopping cart and order confirmation system. This is required as all the listed products need to be collected into a cart, so the order can be fulfilled by the Food Forum team. The other requirements in this component is the recording of shipping and billing details, so the payment can be processed online. 
These are the three high level components that are required for customers to find and transact on produce items in an online or digital environment. It covers the process from selecting items, to collecting items and finally shipping the item to the customer. 


### <a id="cq2"></a> 2. Review the conceptual design with the client and edit based on their feedback
Conceptial design and feedback was reviewed with client. For example, in our second questionnaire, there was a lot of feedback surrounding product information and logic in the design. 
[Client Questionnaire #2 - Google Docs](https://docs.google.com/document/d/18nkt5L13xmfGJVMQKPDTxbsjLJ6Ag-bWYFu7LeMhxLQ/edit)

### <a id="cq3"></a> 3. User stories for the whole application

#### As a buyer, I want to create my account on the website to store my recurring information.	
A user can create their own account, with the following fields.
* Email
* Password
A user's account will be linked to their company profile, which has the following fields.
* email
* password
* company name
* address
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


###<a id="cq4"></a> 4. A workflow diagram of the user journey/s
#### App Home Workflow
![food forum-home-page flow](https://user-images.githubusercontent.com/35912668/43043008-fdb9ab12-8dcc-11e8-9c17-d5fda3c2f002.png)
#### User Sign Up Workflow
![food forum-user login_signup path](https://user-images.githubusercontent.com/35912668/43043004-e8f8c154-8dcc-11e8-87da-de08ca085ddf.png)
#### Catalogue Workflow
![food forum-catalogue](https://user-images.githubusercontent.com/35912668/43042997-d96f3fba-8dcc-11e8-871f-0246b72cfe1b.png)
#### Cart Workflow
![food forum-cart](https://user-images.githubusercontent.com/35912668/43042980-8f678b3e-8dcc-11e8-99bd-d23442f3ba34.png)
#### Payment Workflow
![food forum-payment](https://user-images.githubusercontent.com/35912668/43042976-7ed19cba-8dcc-11e8-971d-bc01c5d6ba37.png)

### <a id="cq5"></a> 5. Wireframes for all main pages of your app
Desktop Home
<img width="1100" alt="desktop_homepage" src="https://user-images.githubusercontent.com/35912668/42721560-2327c404-8780-11e8-9cf2-dbda55a5c5a7.png">

#### Desktop Specials
<img width="1101" alt="desktop_specials" src="https://user-images.githubusercontent.com/35912668/42721564-3430ac48-8780-11e8-9583-6459b7ba3369.png">

#### Desktop Signin
<img width="1110" alt="desktop_signin" src="https://user-images.githubusercontent.com/35912668/42721569-48c5e402-8780-11e8-8605-7d6cd8921327.png">

#### Desktop Detailed View
<img width="1082" alt="desktop_detailedview" src="https://user-images.githubusercontent.com/35912668/42721572-56fca358-8780-11e8-86dc-f97115cd8aba.png">

#### Desktop Order Confirmation
<img width="1099" alt="desktop_orderconfirmation" src="https://user-images.githubusercontent.com/35912668/42721577-6820ef90-8780-11e8-996f-b7e14b54f4a5.png">

#### Desktop Shipping Details
<img width="1101" alt="desktop_shipping" src="https://user-images.githubusercontent.com/35912668/42721579-77410e24-8780-11e8-8639-e2b04c257ae1.png">

#### Desktop Cart
<img width="1107" alt="desktop_cart" src="https://user-images.githubusercontent.com/35912668/42721581-8846b778-8780-11e8-9e06-df5808efbe5d.png">

#### Mobile Landing page
<img src="https://user-images.githubusercontent.com/35912668/43042907-4d048234-8dcb-11e8-98e7-ed85e6a01c9f.jpg">

#### Mobile Sign in
<img src="https://user-images.githubusercontent.com/35912668/43042913-6548c31e-8dcb-11e8-9221-24af119f9cbc.jpg">

#### Mobile Profile view
<img src="https://user-images.githubusercontent.com/35912668/43042920-7ce45ec0-8dcb-11e8-86fc-72896d932210.jpg">

#### Mobile Contact Form
<img src="https://user-images.githubusercontent.com/35912668/43042931-aa3c5706-8dcb-11e8-90b4-e4482d049218.jpg">

#### Mobile Catalogue view
<img src="https://user-images.githubusercontent.com/35912668/43042935-be468c62-8dcb-11e8-84c7-b61e2536ef50.jpg">

#### Mobile Order Confirmation
<img src="https://user-images.githubusercontent.com/35912668/43042941-d7c9ed5a-8dcb-11e8-99a6-a2a008da4015.jpg">

#### Mobile Cart Edit
<img src="https://user-images.githubusercontent.com/35912668/43042948-f63e9c4a-8dcb-11e8-90d0-9b2b0b7d283d.jpg">


### <a id="cq6"></a>6. Entity Relationship Diagram (ERD)
Please see our ERD
https://user-images.githubusercontent.com/35912668/42721861-337be3b2-8785-11e8-8f2f-7172299384ff.png

### <a id="cq7"></a> 7. Project plan and effort estimation

Our project plan was document and effort estimation was done in our Jira. We stepped through the stories and estimated the effort, then ranked stories and if there were stories that were too far from the core problem, we put it in the "should have" category. Please see our example in Jira. 
<img width="1085" alt="page board" src="https://user-images.githubusercontent.com/35912668/43196606-e2b1e8f8-904b-11e8-9386-9c4cb2a7fd28.png">

We also did planning and created user stories before we started work. As you can see in our chart we created and designed the issues or stories first before we started resolving the stories. 
<img width="804" alt="planning and resolution" src="https://user-images.githubusercontent.com/35912668/43196780-6ca042b2-904c-11e8-9d87-257965e7dbad.png">

