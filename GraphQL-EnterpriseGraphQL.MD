# Adopting GraphQL in an enterprise

TODO
- [X] thanks
- [] more articles
- [] interviews


## State of GraphQL today 

We started our GraphQL adoption journey by building our checkout experience. We have seen tremendous benefits in adopting GraphQL. [Our checkout app became our guiding light](https://medium.com/paypal-tech/graphql-a-success-story-for-paypal-checkout-3482f724fb53) in the adoption of GraphQL. We built more apps, provided infra support, launched public graphql api, provided trainings and learning materials across the company, setup standards body and provided graphql tools fanny pack to help the adoption of GraphQL and built sample apps to help teams get started. 

Today, GraphQL is being used by 40 production apps in PayPal. It is now a default pattern to use GraphQL for building new UI apps. Many existing apps are in the process of migrating to GraphQL. GraphQL is being used by common platforms such as Identity, Payments, Compliance, to provide a consistent experience across all PayPal Inc. subsidiaries. Our API developers have started using GraphQL to build public and limited-release GraphQL APIs. Braintree released its public GraphQL API. With GraphQL, the gap between BFF apps and backend API capabilities has narrowed since GraphQL can work as an orchestration layer for downstream apis, perform functions of the backend API and act as the API interface for UI apps. We have built a unified GraphQL Gateway to support one graph through the company. 


## Why did PayPal need GraphQL?

When we chose GraphQL, we were looking for a technology to help us solve the following problems -

1. Overfetched data: Our REST APIs sent a part of the response a client needs and some extraneous data. Since the server in a REST API dictates the shape of data, our UI teams spent a lot of time filtering and parsing data on client side, often using libraries such as Redux to format and store data. With GraphQL, clients are able to ask for a set of fields, and get exactly those fields back, thereby removing the need to do data formatting on client side. This greatly increased the time it took to ship UI features and making our apps lightweight.

2. Avoid multiple round trips: Often, in order to call one endpoint that required a certain parameter, such as `/getProfileById{id}`, we would have to call additional endpoints as a pre-req, such as `getUser{username}` that would return the parameters such as `id`. This was a problem because we were making multiple round trips to fetch one piece of information. GraphQL helped solve this problem because it allows us to fetch everything we need in one round trip. We can fetch as many fields as we want at the same time and GraphQL does the job of fetching them all at once.

3. Keeping clients up to date: REST allows versioning and we heavily leveraged API versions. Anytime we had a breaking change, we would publish it as a new version. But the problem was that when we did make a new version, clients integrated with older versions wouldn't receive these updates without reintegrating with the new version. Sometimes the documentation would have changed in the new version, and this led to frustration and wasted time. With GraphQL, we are able to send out updates and clients no longer have to worry about keeping up to date with versions. Since all updates are published to one endpoint graphql, clients can fetch updated resources when they need it without having to reintegrate with a new version.

4. Freedom to use any programming language when integrating: Historically, Braintree did not have a public API. We supported server SDKs and client SDKs. The challenge was that we did not have server SDKs in all languages. A lot of merchants did not want to use SDK for whatever reason. We decided that we needed a better API for merchants on the server. [This new GraphQL API](https://medium.com/braintree-product-technology/announcing-general-availability-of-our-graphql-api-ff3478d21575) offers great control, flexibility, portabillity, maintainability and freedom to choose any language when integrating and provides extensibility of our global payments platform. You also get updates from the API as soon as they are released without having to update an SDK. 

4. API Exploration: We spent a lot of time going through API documentations and figuring out which endpoint to use for a particular field. Once we had an endpoint, we would copy the urls and try them out in Postman. If we missed a parameter, we would go back to documentation and search for the parameter again. It made playig around with APIs a lot harder and time consuming. With GraphQL, we got tools like Playground and GraphiQL that can be used to not only explore APIs, navigate through the documentation but also fire away requests right in the tool which makes it a lot easier to explore APIs, copy sample data and figure out exact query and syntax that is needed. 

6. Field and method level instrumentation: We have internal instrumentation tools that show metrics of how long an endpoint took and what params were used, but it was really hard to find which fields are being used by the clients. Without knowing this information, we could not know if a field was safe to delete or was useful. With GraphQL, we get field level instrumentation and a clear picture of which resolver took how long, common errors and which fields were called. This field level instrumentation helps to intelligently deprecate fields that are no longer being used.

7. Inconsistent developer experience when integrating with APIs: In REST APIs, different teams would have different conventions for the same variable, such as user,`username` making it harder to understand APIs. With federated GraphQL and one graph, since all teams share the same schema, it makes it a lot easier to identify duplicates and make naming variables consistent.

4. Easier testing: GraphQL tools such as Apollo client make it easier to add graphql queries within UI such as with React. It helps to keep code colocated and helps in debugging and separation of concerns. It makes for a clean developer experience.


## How did we begin adopting GraphQL? 

Checkout team was the first to pioneer the adoption of GraphQL. We share our journey adopting GraphQL in [Checkout app in this blog post in detail.](https://medium.com/paypal-tech/graphql-a-success-story-for-paypal-checkout-3482f724fb53) The Checkout team showcased their app and the emphasis of orchestration and developer productivity really clicked with our engineering teams. This sparked interest in the entire company, and teams started developing demo apps to utilize GraphQL for their apps. It was the new shiny thing and everybody got excited about the hype, but what stuck out most for the teams was how easy it was to orchestrate downstream APIs and create a unified experience for clients. Without GraphQL, adjacencies will have to know so much of PayPal's internal stuff to pull off an operation. With GraphQL, all of the complexity could be hidden and clients wouldn't have to worry about figuring out which piece connects where. 

Teams started building products, presented them in tech showcase, and got other people excited too. Soon, everybody was curious. Once we got the leadership onboard, we were really able to take it off. 

PayPal has an extensive suite of REST APIs that power the core functionality of apps and sits very close to database. GraphQL is used as an orchestration layer in our apps. It sits between the frontend UI app and backend API layer acting as a backend for frontend (BFF). New features can be built directly within the GraphQL layer. Some teams may choose to use GraphQL as a pure orchestration layer, while some teams use GraphQL layer as a business logic layer. 

## How did we scale adoption of GraphQL? 

Since the adoption of GraphQL in Checkout, most teams started building GraphQL layers independently on smaller apps. This led to multiple graphs within the company. Having multiple graphs makes schema sharing harder. We tried to do schema stitching to make a single graph. We are now adopting a one graph approach using Apollo Federation where we build a graphql gateway thereby unifying all our graphs into one single endpoint.

As we started scaling our GraphQL adoption up, we realized  that every app was trying to solve its own GraphQL problems - often everyone was solving the same problem independently leading to a lot of reinventing the wheel. We realized there was a need to unify these efforts under one umbrella and hence, we established a standards body. We provided support for standard tooling, front tier and mid tier sample apps, error handling techniques, learning resources. Having a standards set was great, but we noticed that the individual graphs were deviating from the correct way of authenticating. We lost a little control of auth rails in individual graphs. We wanted to provide a centralized point of entry, govern schemas teogether, model the data in a global way and provide a way to resuse types. This is where the motivation to build a one graphql gateway. <TODO> 


We built tooling to help support GraphQL adoption - 
 
1. Set of standards.: naming conventions. error handling
2. Common libraries
    1. plugins for logging
    2. directives for data-classification
    3. middleware for Apollo and playground
    4. cli
    5. error classes
    6. apollo graph variants
3. Template boilerplate applications
    1. front end
    2. back end
1. Error conventions: GraphQL specification doesn’t restrict or specify using appropriate HTTP status codes to express the outcome of an operation. PayPal GraphQL servers return everything as a 200 unless something went terribly wrong. The information on the error itself is added to custom properties within the default errors object. 
2. Since GraphQL layers are used as orchestration layers, all requests must have a special directive to describe all authorization requirements for queries, mutations and fields. 
3. We have established GraphQL standards for defining GraphQL APIs internally.
4. Learning resources to help onboard teams onto GraphQL.

## What advantages are we seeing with GraphQL adoption?

1. **Developer productivity**
    1. GraphQL Playground to play around with the API and explore documentation at the same time without having to check out any additional tools such as Postman.
    2. Since all operations (queries and mutations) are at the same endpoint, it makes it much easier to explore all operations that are supported by the API
    3. Building UIs in parallel with GraphQL API helps increase team collaboration. Since GraphQL schema needs to be built upfront, backend and frontend engineers work thereby reducing silos.
4. **Paradigm shift:** Since GraphQL mandates a design first approach, our thinking changed and we started putting the needs of the clients first. We thought about GraphQL in context of enabling business use-cases and built out API with the customer in mind in contrast to other API Design paradigms that allows code first.
5. **Ship faster**: We are able to get features shipped faster. We were able to get rid of a lot of plumbing that made it harder to provide feature updates and keep feature parity. Before, we had to ship out an SDK in every language that our merchant worked in. Now, we can provide one single GraphQL endpoint that merchants can integrate with without having to worry about the language they are using.
6. **Simply unification**: Internal clients and adjancies no longer had to worry about the complexity of the internal systems and figure out which API to call. The GraphQL layer hid the complexity behind the scenes.
2. **Analytics**: instrumentation on how long a single request for a particular field took
3. **Exposure and hiring**: everybody in the community is really excited about GraphQL and it has helped us attract talent to PayPal. Our teammates are excited to share their learnings in the community and have been speaking at conferences, writing blog posts and making instructional resources. <TODO> Link 
    
    
## What challenges are we facing?
<TODO>

1. We are still working to create a standardized approach to challenges in the GraphQL specification technology such as error handling, authentication, file handling, batch processing.
2. Since we are not completely at one graph yet, teams are independently building their own graphs which leads to problems of duplicating efforts. 
3. Incorporating existing tools in paypal domain: sherlock, cal logs, security context. How do these fit into GraphQL and where?

## How we convinced our engineering teams and leadership?
Our frontend developers saw the benefits of using GraphQL immediately. It was relatively easier to convince backend developers who were working on UI teams. They understood the power of orchestrating with GraphQL. For core platform APIs teams, we haven't fully convinced them yet. When we introduced GraphQL concepts, sometimes we were told that REST can do that too. Yes it can, we can replicate what GraphQL does with REST as well, but then at the end, we are just recreating GraphQL. We haven't gotten a full buy-in from all our developers across the stack, but its okay.  Our REST APIs and GraphQL APIs can live together. We learnt to not boil the ocean. 


To convince our leadership, we knew that it wasn't enough to focus on performance of GraphQL API. The reason being, the performance of an orchestrated GraphQL API depends on the APIs it consumes. A GraphQL API is only as fast as its slowest downstream API. Instead, we focused on developer productivity and time to ship a product. We demonstrated that using GraphQL can help build products faster, helps improve team collaboration and make it easier to explore documentation. When we introduced GraphiQL and Playground tools to our teams, they immediately saw the benefit in having a GraphQL endpoint and playground tool to fire off requests while exploring the documentation. 

We demonstrated our GraphQL helps improve the productivity of internal and external developers, how GraphQL helped reduce the time to ship features in an api. With GraphQL, we didn't have to work on multiple SDKs for each platform. We built the API once, and we were done. Without GraphQL, we had no idea which fields were being used by the merchants and which endpoints were called. We did not have instrumentation on KPIs such as first integration to production. With GraphQL, we were able to demonstrate our learnings, instrumentations and field level insights. 


## How can you start adoption?
1. In the beginning when speculating whether GraphQL is the right technology, it is helpful to build a demo app that can demonstrate our GraphQL can fit in your enterprise architecture. 
2. Bring the team with you - demo your app and showcase the benefits of using GraphQL, your experience of adopting GraphQL, the advantages you have seen and the struggles you are facing to help others in the company.
3. Setup enterprise for success - setup a working group that will help to establish standards, setup learning resources, provide guidance, build tooling and support for GraphQL 
4. Get teams onboard - showcase the advantages of using GraphQL from a productivity standpoint. Everyone wants to ship products faster, and make it easier to integrate with APIs and GraphQL gives exactly that. Demonstrate to the leadership how easy it was to build a new feature with GraphQL and how easy it was to send updates to existing clients without having to publish a new version, while still intelligently being backwards compatible by looking at instrumentation of fields and schema. 

## Big Thank You
This article has been made possible by the contributions of our valuable team members. Thank you to Mark Stuart, Joey Nenni, Walmik Deshpande and Miriam Goldberg for agreeing to be interviewed and sharing your experiences. I will be publishing their individual interviews for this article soon. Finally, a big thank you to Mark Stuart for leading the adoption of GraphQL in PayPal, motivating me to share my GraphQL experience and always being an inspiration to our developer community.
