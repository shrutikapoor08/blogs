---
layout: post
title: GraphQL Misconceptions
---


## Ask Me About GraphQL 

I love talking about GraphQL with people who have been working with GraphQL or thinking of adopting GraphQL. One common question people have is why would someone want to move to GraphQL from REST. There are a ton of resources out there that talk about the difference between REST and GraphQL and those are great to check out if you are interested in how those two are different. In this blog post, I want to answer some common misconceptions and questions asked about GraphQL.

## How do you benefit from GraphQL on the front end?
As a Front End Engineer, I like working with a GraphQL API for the following reasons:

1. Instantly test queries and mutations using GraphiQL or playground
2. Less data means lighter state management
3. Offload heavy lifting to the server through resolvers
4. Documentation that is up-to-date and interactive

## How is it better than REST? 
1. One endpoint to fetch all resources. 
2. Avoid over fetching of data (getting too many fields when only a few fields are needed).
3. Avoid under fetching of data (having to call multiple APIs because one API doesn't give back all the information needed).


## Myth: GraphQL only works with graph like structures. 
GraphQL can be used to query a graph database, but it is not its only use case. The "graph" in GraphQL is used to represent the graph-like structure of data. You model the data in terms of nodes and how they connect to each other. Schema is used to represent this modelling. 

There is no limitation in the GraphQL spec that enforces that the data source should be a graph.

## Myth: GraphQL only works with databases or data sources that are graph based. 
It's a misconception that you need to rewrite your database to adopt GraphQL. GraphQL can be a wrapper around any data source, including databases. GraphQL is a `query language for your API` - which means it is a syntax of how to ask for data. 

## Myth: Data fetching with resolvers, queries and mutations work magically. 
You will need to define exactly what each of them needs to do. You will be writing functions that get called when queries are fired, writing functions for resolvers that send back exactly the data you need and knows which API to call. You will be defining what data returns through those functions by calling resolvers. 

## Myth: GraphQL is a database language like SQL. 
GraphQL is a programming language - specifically a query language. GraphQL's spec defines how GraphQL runtimes should implement the language and how data should be communicated between client and server. GraphQL is used to ask for data and can be used in multiple places in any layer from front end to back-end. There are databases such as DGraph that implement the GraphQL spec, allowing clients to use GraphQL to query the database.

## Myth: GraphQL replaces Redux or any state management library
Redux is a state management library. GraphQL is not a state management library. GraphQL helps to get less data, which in turn leads to less data to manage on the client-side, but it is not a state management solution. You will still need to manage state - albeit lightweight. Client libraries like Apollo and Relay can be used to manage state and have caching built-in. GraphQL is not a replacement for Redux - it helps to reduce the need for it.

## Myth: You can't have REST endpoints in your implementation with GraphQL. 
You can plug in multiple REST endpoints or even multiple GraphQL endpoints in your application. Although it is not a best practice to have multiple REST endpoints, it is technically possible.

## Myth: GraphQL is difficult to introduce in an existing project. 
GraphQL can be plugged into an existing project. You can start with one component of business logic, plug in a GraphQL endpoint, and start fetching data through GraphQL. You don't need to scrap an entire project to start using GraphQL. If switching to GraphQL endpoint is still a daunting task, you can start by masking a REST endpoint into a GraphQL endpoint using resolvers. 

## Myth: GraphQL is only for front-end developers.
GraphQL is platform agnostic. In my opinion, the beauty of GraphQL's benefits comes from the inside out - backend to frontend. As a backend developer, you are able to expand the API by adding fields without having to publish a new version of the API. You don't need to write different endpoints for different needs since clients can fetch whatever data they need. With GraphQL, you have visibility of what fields clients are using, giving powerful instrumentation. 

## Myth: GraphQL will write database queries itself, I just need to specify schemas and the relation between them.
You may need to write the database queries depending on which GraphQL library you are using. However, some libraries like Neo4j and Prisma write database queries too and abstract the logic away from the developer. Everything including resolvers, queries, mutations needs to be defined.

## Myth: GraphQL is used to draw graphs. 
Often people new to GraphQL think that it is a graph plotting software such as D3. GraphQL doesn't plot graphs. 

## Myth: It requires complicated clients and is near impossible to do with a simple HTTP fetch
GraphQL API itself is really simple to call. You don't need clients to call a GraphQL API. You can call GraphQL API with a simple curl command over HTTP. [Check out this article to learn how.](https://blog.apollographql.com/4-simple-ways-to-call-a-graphql-api-a6807bcdb355)

## Myth: It replaces ORMs. 
Lately we see a lot of DB and GraphQL integration but GraphQL itself is not that.


I think GraphQL is awesome and everyone should try it out. I particularly love that I can fetch data that I need, without having to throw away the rest of the payload - because the payload I get back from a GraphQL API is the exact payload I need for my needs. 

There are a mulitude of libraries that can help you get started with GraphQL. To get started with GraphQL, [start with the documentation](https://graphql.org/learn/) or [check out this Udemy course]( https://www.udemy.com/course/graphql-with-react-course/) that I found helpful when I was new to GraphQL.

