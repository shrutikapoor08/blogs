# Getting started with GraphQL


## What is GraphQL? 
In its most basic sense, GraphQL is a way of asking for data. Technically, it is a specification and any language has the freedom to implement a GraphQL API. In JavaScript for eg, the module `graphql-js` is used to create GraphQL APIs.

GraphQL is essentially a query language for your API. It is a way of asking for data from API. It offers a flexible way of asking for data, and you can get as much or as little data as you need. 

A typical GraphQL implementation involves GraphQL on the server side (GraphQL API) and GraphQL on the client side (to talk to GraphQL APIs). A lot of different tools can be used to build a full-stack GraphQL application - such as Prisma, Apollo, Express, Hasura.
At its core, it is just an API served over HTTP. You can send a curl command to talk to a GraphQL API without having to need any library. 
What is cool about GraphQL is that it provides an easy way of developing APIs - extending as well as deprecating over time. With GraphQL, you get one endpoint - `/graphql` and since every client talks to the same endpoint, it becomes very simple to add to an existing API and ensure that all clients are able to leverage newly updated data. 

One thing to remember is that GraphQL is just a specification. How you implement GraphQL largely depends on the library (Apollo, Prisma, Express, etc.) you use, and therefore GraphQL is language agnostic. The libraries available in Java, JavaScript, Python, Go enable GraphQL across platforms. 

## Why GraphQL? 
1. Type safety
2. Backward and forward compatible : no versions
3. Less throwaway data
4. Instrumentation
5. Save multiple round trips
6. Free documentation

## How does it compare with REST? 
GraphQL is better than REST because - 
1. One endpoint to fetch all resources. 
2. Avoid over fetching of data (getting too many fields when only a few fields are needed).
3. Avoid under fetching of data (having to call multiple APIs because one API doesn't give back all the information needed).

REST does certain things better - 
1. Caching
2. Microservices based architecture
3. HTTP codes - 200s, 400s, 500s for every request

## How to get started with GraphQL?
1.  Understand concepts: How to graphql https://www.howtographql.com/
2.  Read the official docs - https://graphql.org/learn/
3.  Play around with GraphiQL to try out GraphQL with GitHub's API - https://developer.github.com/v4/explorer 
4.  Watch a course in your stack - https://www.udemy.com/topic/graphql/
5.  Build a GraphQL server - https://egghead.io/courses/build-a-graphql-server
6.  Use GraphQL on the client - https://egghead.io/courses/graphql-data-in-react-with-apollo-client
7.  Read a book - https://www.amazon.com/Learning-GraphQL-Declarative-Fetching-Modern/dp/1492030716


- GraphQL -
2. What is GraphQL
3. How to get started
4. What are different tools/frameworks available
5. What are the advantages
6. What are the drawbacks
7. Decisions to consider before going for GraphQL
