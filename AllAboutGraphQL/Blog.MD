## Ask Me About GraphQL 

I love talking about GraphQL and listening to people adopting or thinking of adopting GraphQL. I often get asked why would someone chose to move to GraphQL. There are a ton of resources out there that talk about the difference between REST and GraphQL and those are great to checkout if you are interested in how those two are different. In this blog post, I want to answer some common misconceptions and aha moments with using GraphQL.

As a Front End Engineer, I like working with a GraphQL API for the following reasons -

1. Instantly test queries and mutations using GraphiQL or playground. 
2. Less data = lighter state management. 
3. Offload heavy lifting to the server through resolvers. 
4. Instant documentation.


## How is it better than REST? 

1. One endpoint to fetch all resources. 
2. Avoid overfetching of data (getting too many fields when only a few fields are needed).
3. Avoid underfetching of data (having to call multiple APIs because one API doesn't give back all the information needed).


## Myth: GraphQL is used to query graph databases. 
Often people new to GraphQL think that it is a graph plotting software such as D3. Another common misconception is that it is used for graph databases. 

Fact: 
GraphQL can be used to query a graph database, but it is not its only use case. The "graph" in GraphQL is used to represent the graph-like structure of data. You model the data in terms of nodes and how they connect to each other. Schema is used to represent this modelling. 
There is no limitation in the GraphQL spec that enforces that the data strucutre should be a graph. 


## Myth GraphQL is a database technology. 

- GraphQL is something like exposing your database.
- It's a database technology
- Before starting I thought I would have to rewrite db,  but later I found it is just a wrapper with queries and mutation. GraphQL makes life easy

Fact: GraphQL is a query language for  API - which means it is a syntax of how to ask for data. 

## Myth GraphQL is all or nothing
- That GraphQL is all or nothing and they would need to replace/rewrite their entire REST API in order to introduce GraphQL into their product


## Myth: Resolvers/interfaces/queries/mutations work magically. 

You will need to define exactly what each of them needs to do. You will be writing functions that gets called when queries are fired, writing functions for resolvers which sends back exactly the data you need and knows which API to call. Things don't automatically start working when you fire a query or mutation. You will be defining what data returns through those functions by calling resolvers. 


## Myth GraphQL replaces Redux / state management library
Redux is a state management library. GraphQL is not a state management library. GraphQL helps to get less data, which in turn leads to less data to manage on the client side, but it is not a state management solution. You will still need to manage state - beit lightweight. Client libraries like Apollo have cache built-in which can be used to manage state. GraphQL is not a replacement for Redux - it helps to reduce the need for it.  


## Myth GraphQL is a database language. 
GraphQL is a programming language - specifically a query language. GraphQL's spec defines how GraphQL engines should implement the language, how data should be communicated between client and server. 


## Myth You can't have REST endpoints in your implementation with GraphQL. 

You can plugin multiple REST endpoints or even multiple GraphQL endpoints in your application. Although it is not a best practice, it is technically possible. 

## Myth GraphQL is meant for green field project and it is difficult to introduce in an existing project. 
GraphQL can be plugged in an existing project. You can start with one component of a business logic, plug in a GraphQL endpoint, and start fetching data through GraphQL. You don't need to scrap an entire project to start using GraphQL. If switching to GraphQL endpoint is still a daunting task, you can start by masking a REST endpoint into a GraphQL endpoint using resolvers. 

## Myth GraphQL is only for frontend folks
Although frontend folks like myself are really passionate about GraphQL, GraphQL is platform agnostic. In my opinion, the beauty of GraphQL's beneits starts from the inside out - backend to frontend. 


## Myth GraphQL will write database queries itself, i just need to specify schemas and the relation between them
You will need to write the database queries. Everything including resolvers, queries, mutations needs to be defined. 


====
# TODO


## Myth it's only useful for graph-based data schemas

## A HA? Resolvers turn into doing REST calls, as not all backends support GraphQL (do I have to use the. graphQL for the sake) and Schema stiching

## Myth I thought for a long time that GraphQL is only needed if one endpoint is used in multiple places, otherwise pointless.

## Myth Designing the schema to match to format of the data source is a good idea. It turns out it wasn’t. 

## Myth Requesting data from a GraphQL server is hard and requires a 3rd party client which is problematic in some languages. A lot of people forget it’s just an HTTP request.

## Myth Most people ask me If GraphQL endpoint exposes whole schema architecture then Isn't it a concern of security? 


1. GraphQL can't cache queries and only used for react
2. A misconception we had was that GraphQL requires a schema compulsorily. We just loved the way a GraphQL query is written and then realized that you can decouple it from execution. 
3. Didn't really get GraphQL introspectability & how to take advantage of the typed schema as both GraphQL & REST send untyped JSON.
4. Performance of GraphQL 
5. Graphql was impliment once and all the endpoints would route to it as long as they have been defined, I didn't  know one has to write custom types and models for each service 🤦🏿‍♀️
6. all actions need to by synchronous
7. there's only one difference between these on the server side-queries are executed in parallel, whereas mutation resolvers are called serially as execution of one can affect the other.Otherwise it's quite the same thing.
8. I thought It would have something like ORM type queries :D (btw @prisma has this feature now )
9. I thought mutations were some cool way to declare the nested  mutations that you want to happen to the graph (symmetrical to queries). But it's just RPC :/
10. That it requires complicated clients and is near impossible to do with a simple HTTP fetch
11. The query and mutation is cut and dry you can't change stuff in a query when in fact it's just asynchronous and synchronous respectively
12. It replaces ORMs. Lately we see a lot of DB and GraphQL integration but GraphQL itself is not that.
13. Schemaless GraphQL layer





