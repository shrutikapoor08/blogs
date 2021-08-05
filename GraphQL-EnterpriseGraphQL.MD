# Adopting GraphQL in an enterprise

## Outline 

- What made people - ( developers ) say yes to graphql.
- Why did PayPal adopt GraphQL?
- Where graphql fits in the stack
- How to convince leadership
- How to start adoption
- When would GraphQL not be the right fit for you? (personal blog?)

## State of GraphQL today 
Today, GraphQL is being used by 40 production apps in PayPal. Braintree released its public GraphQL API. It is now a default pattern to use GraphQL for building UI apps and many apps are in the process of migrating to GraphQL. GraphQL is being used by common platforms such as Identity to provide a consistent experience across all subsidiaries. <TODO>

We started our GraphQL adoption journey by building our checkout experience. We have seen tremendous benefits in adopting GraphQL. Our checkout app became our guiding light in the adoption of GraphQL. We built more apps, provided infra support, launched public graphql api, provided trainings and learning materials across the company, setup standards body and provided fanny pack to help the adoption of GraphQL and provide sample apps to get started. With GraphQL, the gap between BFF apps and backend API capabilities has narrowed since GraphQL can work as an orchestration layer for downstream apis, perform functions of the backend API and act as the API interface for UI apps. 



## Why did PayPal need GraphQL?

When we chose GraphQL, we were looking for a technology to help us solve the following problems -

1. Overfetched data: At PayPal, our APIs send a part of the response a client may need and some extraneous data. The server in a REST API dictates what shape of data is sent to the client. As UI developers, we spend a lot of time filtering and parsing data on clients, often using libraries such as Redux to clean up and store data. With GraphQL, clients are able to ask for a set of fields, and get exactly those fields back, thereby removing the need to clean up data on client side.
2. Avoid multiple roundtrips: GraphQL allows us to fetch everything we need in one round trip. This helped us because we no longer had to retrieve an id from one endpoint and send it to another endpoint `/getUsers{id}`. We can fetch as many fields as we want at the same time and GraphQL does the job of fetching them all at once.
3. Keeping clients up to date: We were struggling to keep our versions up to date and ensuring that we did not introduce breaking changes. When we did make a new version, clients integrated with older versions wouldn't receive these updates without reintegrating with the new version. Sometimes the documentation would have changed in the new version, and this led to frustration and wasted time. With GraphQL, we are able to send out updates and clients no longer have to worry about keeping up to date with versions. Since all updates are published to one endpoint graphql, clients can fetch updated resources when they need it without having to reintegrate with a new version.
4. GraphQL tools such as Apollo client make it easier to add graphql queries within UI such as with React. It helps to keep code colocated and helps in debugging and separation of concerns. It makes for a clean developer experience.
5. We spent a lot of time going through api documentations in PPASS and figuring out which endpoint to use for a particular field. With GraphQL, we get tools like Playground and GraphiQL that can be used to not only explore APIs, navigate through the documentation but also fire away requests right in the tool which makes it a lot easier to play around with APIs.
6. Field and method level instrumentation: API developers: internal tools are great, but it is really hard to find how long a specific method takes and which fields are being used. With GraphQL, we get field level instrumentation and a clear picture of which resolver took how long, common errors. Field level instrumentation also helps to intelligently deprecate fields that are no longer being used.
7. Inconsistent developer experience when integrating with APIs: In REST APIs, different teams would have different conventions for the same variable, such as user,`username` making it harder to understand APIs. With federated GraphQL and one graph, since all teams share the same schema, it makes it a lot easier to identify duplicates and make naming variables consistent.
8. Need for an orchestration layer closer to merchants: We wanted to have our services close to the merchants. GraphQL allowed merchants to use any programming language they wanted and they weren't tied down to the language of the SDK.

## Where does graphql fit in the stack and how did we provide support for adding graphql? 
GraphQL is used as an orchestration layer in our apps. It sits between the front end UI app and backend API layer acting as a back end for front end orchestration (BFF). New features can be built directly within the GraphQL layer with the help of resolvers. A resolver can decide which downstream API or database needs to be called, or perform operations and give back data. 

We are currently using GraphQL on web and mobile apps. Some common apps that use graphql are the apps that power the checkout experience, consumer and merchant apps, partner onboarding, identity. 

Most teams started building graphs independently on small apps. We are now moving to a one graph approach using Apollo Federation where we build a graphql gateway thereby unifying all our graphs into one single endpoint.

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
3. PPASS GraphQL standards for defining GraphQL APIs: [https://ppaas/docs/standards/graphql_api_design_standards](https://ppaas/docs/standards/graphql_api_design_standards)
4. Learning resources to help onboard teams onto GraphQL.
5. Moving to one graph using Apollo Federation

## How we convinced our engineering teams and leadership?
Our frontend developers saw the benefits of using GraphQL immediately. It was relatively easier to convince backend developers who were working on UI teams. They understood the power of orchestrating with GraphQL. For core platform APIs teams, we haven't fully convinced them yet. When we introduced GraphQL concepts, sometimes we were told that REST can do that too. Yes it can, we can replicate what GraphQL does with REST as well, but then at the end, we are just recreating GraphQL. We haven't gotten a full buy-in from all our developers across the stack, but its okay.  Our REST APIs and GraphQL APIs can live together. 


To convince our leadership, we knew that it wasn't enough to focus on performance of GraphQL API. The reason being, the performance of an orchestrated GraphQL API depends on the APIs it consumes. A GraphQL API is only as fast as its slowest downstream API. Instead, we focused on developer productivity and time to ship a product. We demonstrated that using GraphQL can help build products faster, helps improve team collaboration and make it easier to explore documentation. When we introduced GraphiQL and Playground tools to our teams, they immediately saw the benefit in having a GraphQL endpoint and playground tool to fire off requests while exploring the documentation. 

We demonstrated our GraphQL helps improve the productivity of internal and external developers, how GraphQL helped reduce the time to ship features in an api. With GraphQL, we didn't have to work on multiple SDKs for each platform. We built the API once, and we were done. Without GraphQL, we had no idea which fields were being used by the merchants and which endpoints were called. We did not have instrumentation on KPIs such as first integration to production. With GraphQL, we were able to demonstrate our learnings, instrumentations and field level insights. 

## What advantages are we seeing with GraphQL adoption?
1. **Developer productivity**
    1. GraphQL Playground to play around with the API and explore documentation at the same time without having to check out any additional tools such as Postman.
    2. Since all operations (queries and mutations) are at the same endpoint, it makes it much easier to explore all operations that are supported by the API
    3. Building UIs in parallel with GraphQL API helps increase team collaboration. Since GraphQL schema needs to be built upfront, backend and frontend engineers work thereby reducing silos.
2. **Analytics**: instrumentation on how long a single request for a particular field took
3. **Hiring**: everybody is really excited about GraphQL and it has been easier to attract people. get people excited about PayPal and put us back on the map. 
4. **Paradigm shift:** Since GraphQL mandates a design first approach, our thinking changed and we started putting the needs of the clients first. We thought about GraphQL in context of enabling business use-cases and built out API with the customer in mind in contrast to other API Design paradigms that allows code first.
5. We are able to get features shipped faster. We were able to get rid of a lot of plumbing that made it harder to provide feature updates and keep feature parity. Before, we had to ship out an SDK in every language that our merchant worked in. Now, we can provide one single GraphQL endpoint that merchants can integrate with without having to worry about the language they are using.  
    
    
## What challenges are we still struggling with?
<TODO>

1. We are still working to create a standardized approach to challenges in the GraphQL specification technology such as error handling, authentication, file handling, batch processing.
2. Since we are not completely at one graph yet, teams are independently building their own graphs which leads to problems of duplicating efforts. 
3. Incorporating existing tools in paypal domain: sherlock, cal logs, security context. How do these fit into GraphQL and where?

## How to start adoption?
1. In the beginning when speculating whether GraphQL is the right technology, it is helpful to build a demo app that can demonstrate our GraphQL can fit in your enterprise architecture. 
2. Bring the team with you - demo your app and showcase the benefits of using GraphQL, your experience of adopting GraphQL, the advantages you have seen and the struggles you are facing to help others in the company.
3. Setup enterprise for success - setup a working group that will help to establish standards, setup learning resources, provide guidance, build tooling and support for GraphQL 
4. Get teams onboard - showcase the advantages of using GraphQL from a productivity standpoint. Everyone wants to ship products faster, and make it easier to integrate with APIs and GraphQL gives exactly that. Demonstrate to the leadership how easy it was to build a new feature with GraphQL and how easy it was to send updates to existing clients without having to publish a new version, while still intelligently being backwards compatible by looking at instrumentation of fields and schema. 