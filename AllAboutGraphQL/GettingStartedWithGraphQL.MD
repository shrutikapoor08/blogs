# Getting started with GraphQL


## What is GraphQL? 
GraphQL is essentially a query language for your API. It is a way of asking for data from API. It offers a flexible way of asking for data, and you can get as much or as little data as you need. 

A typical GraphQL implementation involves GraphQL on the server side (GraphQL API) and GraphQL on the client side (to talk to GraphQL APIs). A lot of different tools are there that can be used to build a full-stack GraphQL application - such as Prisma, Apollo, Express, Hasura.
At its core, it is just an API served over HTTP. All the principles of HTTP still apply. You can send a curl command to talk to a GraphQL API without having to need any library. 
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

## How to get started with GraphQL?