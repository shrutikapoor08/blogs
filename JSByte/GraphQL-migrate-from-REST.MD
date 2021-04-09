# JSByte: 3 ways to adopt GraphQL in a REST microservices architecture

There are three main ways to integrate with GraphQL in an existing microservices architecture:

1. Build a GraphQL wrapper around REST microservices
2. Build a REST wrapper around GraphQL services
3. REST and GraphQL APIs co-exist


1. Build a GraphQL wrapper around REST microservices: 
This is a very common technique used in enterprises that have existing downstream REST microservices. A GraphQL layer is built on top of existing REST API. Further, there's two ways of implementing the GraphQL wrapper - 
   1.1 -  The GraphQL layer acts as a pure orchestration layer. No business logic is added to the orchestration layer. The role of this layer is to wrap existing services and surface them as GraphQL endpoint. This layer is usually very lightweight. 
    1.2 - Build a GraphQL layer around new logic and existing microservices. In this technique, existing REST services are wrapped in a GraphQL resolver, and new logic is put in GraphQL layer as well. This is a very useful technique when new logic needs to be added   <TODO- rephrase>


2. Build a REST wrapper around GraphQL microservices: 
This technique is useful when existing clients have already integrated with REST, and there is no control over these clients - meaning you can't dictate that clients change their integration. In this method, the downstream service is a GraphQL layer where the business logic resides. A REST layer is built on top of GraphQL layer to provide compatibility to clients that have an existing integration. The benefit of this technique is that the power of GraphQL seeps through to the client without having to reintegrate. New clients can choose to integrate with GraphQL or REST. 
   
3. REST and GraphQL APIs co-exist:
In this method, existing REST APIs are used in conjunction with GraphQL APIs. A good example of this is when authentication and authorization logic lives in an existing REST API that cannot be migrated easily. The client has to decide when they need to call GraphQL vs REST service. 
   

-- 
On a personal note ...
Last week I gave a talk at CityJS conference, and talked in detail about adoption of GraphQL in an enterprise and how to begin introducing GraphQL in a REST microservices architecture. If you are interested, [the slides are published here](https://github.com/shrutikapoor08/talks/blob/master/Getting%20started%20with%20GraphQL/Getting%20started%20with%20graphql.pdf) 


Peace! ✌🏼

Shruti Kapoor
Follow on Twitter
Hang out on Twitch