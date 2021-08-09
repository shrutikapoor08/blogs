# Adopting GraphQL in an enterprise

TODO
- [X] thanks
- [] more articles
- [] interviews


## State of GraphQL today 

We started our GraphQL adoption journey by building our checkout experience. We have seen tremendous benefits in adopting GraphQL. [Our checkout app became our guiding light](https://medium.com/paypal-tech/graphql-a-success-story-for-paypal-checkout-3482f724fb53) in the adoption of GraphQL. We built more apps, provided infra support, launched public graphql api, provided trainings and learning materials across the company, setup standards body and provided graphql tools fanny pack to help the adoption of GraphQL and built sample apps to help teams get started. 

Today, GraphQL is being used by 40 production apps in PayPal. It is now a default pattern to use GraphQL for building new UI apps. Many existing apps are in the process of migrating to GraphQL. GraphQL is being used by common platforms such as Identity, Payments, and Compliance, to provide a consistent experience across all PayPal Inc. Our API developers have started using GraphQL to build public and limited-release GraphQL APIs. Braintree released its public GraphQL API. With the help of GraphQL, we have been able to bridge the gap between BFF apps and backend API capabilities since GraphQL can work as an orchestration layer for downstream apis, perform functions of the backend API and act as the API interface for UI apps. We are moving towards a unified GraphQL Gateway to support one graph through the company. 


## Why did PayPal need GraphQL?

When we chose GraphQL, we were looking for a technology to help us solve the following problems -

1. Overfetched data: Our REST APIs sent a part of the response a client needs and some extraneous data. Since the server in a REST API dictates the shape of data, our UI teams spent a lot of time filtering and parsing data on client side, often using libraries such as Redux to format and store data. With GraphQL, clients are able to ask for a set of fields, and get exactly those fields back, thereby removing the need to do data formatting and reshaping on client side. This greatly increased the time it took to ship UI features and making our apps lightweight.

2. Avoid multiple round trips: Often, in order to call one endpoint that required a certain parameter, such as `/getProfileById{id}`, we would have to call additional endpoints as a pre-req, such as `getUser{username}` that would return the parameters such as `id`. This was a problem because we were making multiple round trips to fetch one piece of information. GraphQL helped solve this problem because it allowed us to fetch everything we need in one round trip. 

3. Keeping clients up to date: We heavily used API versions in REST APIs. Anytime we had a breaking change, we would publish it as a new API version. The problem we were facing was that when we created a new version, clients that were integrated with older versions wouldn't receive these updates without reintegrating with the new version. Sometimes the documentation or parameters would have changed in the new version and this led to frustration and wasted time. With GraphQL, we are able to send out updates and clients no longer have to worry about keeping up to date with versions. Since all updates are published to one endpoint in graphql, clients can fetch updated resources when they need it without having to reintegrate with a new version.

4. Freedom to use any programming language when integrating: Historically, Braintree did not have a public API. We supported server SDKs and client SDKs. The challenge was that we did not have server SDKs in all languages. A lot of merchants did not want to use SDK for whatever reason. We decided that we needed a better API for merchants on the server. [This new GraphQL API](https://medium.com/braintree-product-technology/announcing-general-availability-of-our-graphql-api-ff3478d21575) offers great control, flexibility, portability, maintainability and freedom to choose any language when integrating and provides extensibility of our global payments platform. You also get updates from the API as soon as they are released without having to update an SDK. 

4. <Walmik?> Uniform experience: Every flow in PayPal has its own Kraken app and each team had their own implementation of ReactJS and Node. We wanted to provide a layer that would provide a uniform frontend experience while giving us a backend to orchestrate the APIs.  <TODO>

4. <Walmik?> No prior domain knowledge: In our Identity team, we wanted to provide a uniform experience when using our services without having to know domain knowledge of PayPal system. We wanted to take control of identity of all of our adjancies and provide a secure way to convert a PayPal subsidiary account to a PayPal account.  <TODO>

6. Field and method level instrumentation: We have internal instrumentation tools that show metrics of how long an endpoint took and what params were used, but it was really hard to find which fields were being used. Without knowing this information, we could not know if a field was safe to delete or if it was still being used. With GraphQL, we get field level instrumentation and a clear picture of which resolver took how long, common errors and which fields were called. This field level instrumentation helps to intelligently deprecate fields that are no longer being used.

7. Inconsistent developer experience when integrating with APIs: In REST APIs, different teams would have different conventions for the same variable, such as user,`username` making it harder to understand APIs. With federated GraphQL and one graph, since all teams share the same schema, it makes it a lot easier to identify duplicates and make naming variables consistent.

4. Easier testing: GraphQL tools such as Apollo client make it easier to add graphql queries within UI such as with React. It helps to keep code colocated and helps in debugging and separation of concerns. It makes for a clean developer experience and improves testability of code.

4. API Exploration: We spent a lot of time going through API documentations and figuring out which endpoint to use for a particular field. Once we had an endpoint, we would copy the urls and try them out in Postman. If we missed a parameter, we would go back to documentation and search for the parameter again. It made playing around with APIs a lot harder and time consuming. With GraphQL, we got tools like Playground and GraphiQL that can be used to not only explore APIs, navigate through the documentation but also fire away requests right in the tool which makes it a lot easier to explore APIs, copy sample data and figure out exact query and syntax that is needed. 


## How did we begin adopting GraphQL? 

PayPal has an extensive suite of REST APIs that power the core functionality of apps and sits very close to database. GraphQL is used as an orchestration layer in our apps. It sits between the frontend UI app and backend API layer acting as a backend for frontend (BFF). New features can be built directly within the GraphQL layer. Some teams have choosen to use GraphQL as a pure orchestration layer, while other teams use GraphQL layer as a business logic layer. 

Checkout team was the first to pioneer the adoption of GraphQL. We share our journey adopting GraphQL in [Checkout app in this blog post in detail.](https://medium.com/paypal-tech/graphql-a-success-story-for-paypal-checkout-3482f724fb53) When the Checkout team showcased their app, the emphasis of orchestration and developer productivity really clicked with our engineering teams. This sparked interest in the entire company, and teams started developing demo apps to utilize GraphQL for their apps. It was the new shiny thing and everybody got excited about the hype, but what stuck out most for the teams was how easy it was to orchestrate downstream APIs and create a unified experience for clients. With GraphQL, all of the downstream complexity could be hidden and clients wouldn't have to worry about figuring out which piece connects where and it made for a more coherent experience for clients.

Teams started building products, presented them in tech showcase, and got other people excited too. Soon, everybody was curious. Once we got the leadership onboard, we were really able to take it off. 


## How did we scale adoption of GraphQL? 

As we started scaling our GraphQL adoption, we realized  that every app was trying to solve its own GraphQL problems. Often. everyone was solving the same problem independently and reinventing the wheel. We realized there was a need to unify these efforts under one umbrella and hence, we established a standards body. We provided support for tooling, front tier and mid tier sample apps, error handling techniques, and learning resources. 

We built tooling to help support GraphQL adoption - <TODO> 
 
1. Set of standards.: naming conventions. error handling
2. Common libraries
    1. plugins for logging
    2. directives for data-classification
    3. middleware for Apollo and playground
    4. cli
    5. error classes
    6. apollo graph variants
3. Template sample applications
    1. front end
    2. back end
2. Since GraphQL layers are used as orchestration layers, all requests must have a special directive to describe all authorization requirements for queries, mutations and fields. 
3. We have established GraphQL standards for defining GraphQL APIs internally.
4. Learning resources to help onboard teams onto GraphQL.


Having a standards body and tooling was great and helped teams setup their graphs faster. However, we noticed that some problems persisted. We noticed that the individual graphs were deviating from the correct way of doing things, such as authentication. We lost a little control of auth rails in individual graphs. We also realized that having multiple graphs makes schema sharing harder. We wanted to provide a centralized point of entry, govern schemas together, model the data in a global way and provide a way to resuse types. This is what led us to build a one graph gateway using Apollo Federation. 


## What advantages are we seeing with GraphQL adoption?
The fact that we were able to pull of orchestration of adjacencies and provide the ability to convert identity of a PayPal subsidiary into a PayPal account is a matter of pride. We initially launched our Braintree API with merchants who were demanding but we were able to get it done really quickly. Time to ship was faster and GraphQL was able to report what piece of schema went where.
The main advantages we have been seeing with GraphQL are - 

1. **Developer productivity**
    1. Tools like GraphiQL and Playground are really great to play around with the API and explore documentation at the same time without having to check out any additional tools such as Postman.
    2. Since all operations (queries and mutations) are at the same endpoint, it makes it much easier to have access to all operations that are supported by the API
    3. Building UIs in parallel with GraphQL API helps increase team collaboration. Since GraphQL schema needs to be built upfront, backend and frontend engineers work thereby reducing silos.
    
2. **Paradigm shift:** Since GraphQL mandates a design first approach, our thinking changed and we started putting the needs of the clients first. We thought about GraphQL in context of enabling business use-cases and built out API with the customer in mind.

3. **Ship faster**: We are able to get features shipped faster. We were able to get rid of a lot of plumbing that made it harder to provide feature updates and keep feature parity. Before, we had to ship out an SDK in every language that our merchant worked in. Now, we can provide one single GraphQL endpoint that merchants can integrate with without having to worry about the language they are using.

4. **Simply unification**: Internal clients and adjacencies no longer had to worry about the complexity of the internal systems and figure out which API to call. The GraphQL layer hid the complexity behind the scenes.

5. **Analytics**: instrumentation on how long a single request for a particular field took

6. **Exposure and hiring**: everybody in the community is really excited about GraphQL and it has helped us attract talent to PayPal. Our teammates are excited to share their learnings in the community and have been speaking at conferences, writing blog posts and making instructional resources. 
    
    
## What challenges are we facing?

1. We are still working to create a standardized approach to challenges in GraphQL technology such as error handling, authentication, file handling, batch processing.
2. Teams are independently building their own graphs which leads to problems of duplicating efforts, different ways of handling and surfacing errors, deviation from standard way of handling authentication. 
3. We are still working on incorporating internal tools. Since a lot of these tools rely on the status code of API response - 200s, 400s, 500s, it has become harder for us to map GraphQL responses (all 200s) to these tools. 
4. GraphQL at PayPal grew tremendously fast. Many teams built their own way of handling errors, solving GraphQL problems, instrumenting to internal logging system. After it grew, we provided support by adding internal plugins and middleware to normalize error handling, instrumentation and reducing internal network chattiness, but it was already too late.
5. Our adoption of one graph approach has been slow. Teams have to change a lot of behavior of how they are currently making apps in order to get on the one graph, adding process and time to deliver. The challenge has been to tell people that now we have rules to add to the graph, but yet keep them motivated to use one graph. 


## How we convinced our engineering teams and leadership?

Our frontend developers saw the benefits of using GraphQL immediately. It was relatively easier to convince backend developers who were working on UI teams. They understood the power of orchestrating with GraphQL. For core platform APIs teams, we haven't fully convinced them yet. When we introduced GraphQL concepts, sometimes we were told that REST can do that too. Yes it can, we can replicate what GraphQL does with REST as well, but then at the end, we are just recreating GraphQL. We haven't gotten a full buy-in from all our developers across the stack, but its okay.  Our REST APIs and GraphQL APIs can live together. We learnt to not boil the ocean. 


To convince our leadership, we knew that it wasn't enough to focus on performance of GraphQL API. The performance of an orchestrated GraphQL API depends on the APIs it consumes. A GraphQL API is only as fast as its slowest downstream API. Instead, we focused on developer productivity and time to ship a product. We demonstrated that using GraphQL can help build products faster, helps improve team collaboration and makes it easier to explore documentation. When we introduced GraphiQL and Playground tools to our teams, they immediately saw the benefit in having a GraphQL endpoint and playground tool to fire off requests while exploring the documentation. 

We demonstrated how GraphQL helps improve the productivity of internal and external developers, how GraphQL helped reduce the time to ship features, how we were able to hide complexity from our clients. With GraphQL, we didn't have to work on multiple SDKs for each platform. We built the API once, and we were done. Without GraphQL, we had no idea which fields were being used by the merchants and which endpoints were called. We did not have instrumentation on KPIs such as first integration to production. With GraphQL, we were able to demonstrate our learnings, instrumentations and field level insights. 


## How can you start adoption?

1. In the beginning when speculating whether GraphQL is the right technology, it is helpful to build a demo app that can demonstrate how GraphQL can fit in your enterprise architecture. 
2. Bring the team with you - demo your app and showcase the benefits of using GraphQL, your experience of adopting GraphQL, the advantages you have seen and the struggles you are facing to help others in the company.
3. Setup enterprise for success - setup a working group that will help to establish standards, setup learning resources, provide guidance, build tooling and support for GraphQL.
4. Get teams onboard - showcase the advantages of using GraphQL from a productivity standpoint. Everyone wants to ship products faster and make it easier to integrate with APIs. GraphQL gives exactly that. Demonstrate to your teammates and leadership how easy it is to build a new feature with GraphQL and how easy it is to send updates to existing clients without having to publish a new version, while still being backwards compatible.

## Big Thank You
This article has been made possible by the contributions of our valuable team members. Thank you to Mark Stuart, Joey Nenni, Walmik Deshpande and Miriam Goldberg for agreeing to be interviewed and sharing your experiences. We will be publishing their individual interviews for this article soon. Finally, a big thank you to Mark Stuart for leading the adoption of GraphQL in PayPal, motivating me to share my GraphQL experience and always being an inspiration to our developer community.
