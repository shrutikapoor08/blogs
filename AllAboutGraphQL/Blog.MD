# Ask Me About GraphQL 

I love talking about GraphQL and listening to people adopting or thinking of adopting GraphQL. I often get asked why would someone chose to move to GraphQL. There are a ton of resources out there that talk about the difference between REST and GraphQL and those are great to checkout if you are interested in how those two are different. In this blog post, I want to answer some common misconceptions and aha moments with using GraphQL.

## How has working with GraphQL on the Front End helped you?

As a Front End Engineer, I like working with a GraphQL API because -

1. Instantly test queries and mutations using GraphiQL or playground. 
2. Less data = lighter state management. 
3. Offload heavy lifting to the server through resolvers. 
4. Instant documentation.


## How is it better than REST? 

1. One endpoint to fetch all resources. 
2. Avoid overfetching of data (getting too many fields when only a few fields are needed).
3. Avoid underfetching of data  (having to call multiple APIs because one API doesn't give back all the information needed).


## Myth: GraphQL is a Graph Query  language
## Myth: GraphQL is used to query graph databases. 

- Graphql only worked with graph databases 
- GraphQL is something like exposing your database.
- It's an efficient way to query graph database.
- It's a complete backend technology, or
- It's a database technology
- Before starting I thought I would have to rewrite db,  but later I found it is just a wrapper with queries and mutation. GraphQL makes life easy
- Probably the biggest confusion I’ve seen is between GraphQL and graph databases.
- GraphQL is very confusing name coz when use word Graph it means Graph like a plotting graph and QL is already a known fact that it is something to do with SQL but graph word doesn’t sit with it. That is why I had/have trouble learning it coz Graph is again a Graph 😂
- When I first heard about GraphQL, I thought it was a programming language that makes charts (like D3) 🤷‍♀️

## Myth GraphQL is used to query graph databases. 


## Myth GraphQL is all or nothing
- That GraphQL is all or nothing and they would need to replace/rewrite their entire REST API in order to introduce GraphQL into their product


## AHA Moment: Resolvers/interfaces/queries/mutations do not work magically. 
 - How resolvers are mapped and executed in front of GraphQL types 
 - Interfaces, everyone thinks they automatically add fields to the types that implement them.
- You send in a complex query, and some magical engine works out all of the subqueries to get the data for it, ties it all together and sends it back to the client. Amazing! Only now, two years later do I realise that you basically have to write all that clever stuff yourself. 😩
- every type needs exactly one resolver


## Myth GraphQL replaces Redux / state management library
1. Literally: "GraphQL replace Redux". "Why bother with GraphQL if I've been doing same with SQL". "GraphQL is a fancy JS library"


## AHA GraphQL is a spec, not a programming lanugage. 

## Myth Isn't GraphQL helpful when you are writing close to the database? 

## Myth You can't have REST endpoints in your implementation.

## Myth GraphQL is meant for green field project and it is difficult to introduce in an existing project. 

## Myth GraphQL is only for frontend folks

## Myth Designing the schema to match to format of the data source is a good idea. It turns out it wasn’t. 

## Myth Requesting data from a GraphQL server is hard and requires a 3rd party client which is problematic in some languages. A lot of people forget it’s just an HTTP request.

## Myth it's only useful for graph-based data schemas

## A HA? Resolvers turn into doing REST calls, as not all backends support GraphQL (do I have to use the. graphQL for the sake) and Schema stiching

## Myth Most people ask me If GraphQL endpoint exposes whole schema architecture then Isn't it a concern of security? 

## Myth GraphQL will write database queries itself, i just need to specify schemas and the relation between them


## Myth I thought for a long time that GraphQL is only needed if one endpoint is used in multiple places, otherwise pointless.


## To Learn List
1. GraphQL can't cache queries and only used for react
2. A misconception we had was that GraphQL requires a schema compulsorily. We just loved the way a GraphQL query is written and then realized that you can decouple it from execution. 
3. Didn't really get GraphQL introspectability & how to take advantage of the typed schema as both GraphQL & REST send untyped JSON.
4. Performance of GraphQL 
5. Graphql was impliment once and all the endpoints would route to it as long as they have been defined, I didn't  know one has to write custom types and models for each service 🤦🏿‍♀️
6. all actions need to by synchronous
7. there's only one difference between these on the server side-queries are executed in parallel, whereas mutation resolvers are called serially as execution of one can affect the other.Otherwise it's quite the same thing.
1. I thought It would have something like ORM type queries :D (btw @prisma has this feature now )
2. I thought mutations were some cool way to declare the nested  mutations that you want to happen to the graph (symmetrical to queries). But it's just RPC :/
3. That it requires complicated clients and is near impossible to do with a simple HTTP fetch
4.  The query and mutation is cut and dry you can't change stuff in a query when in fact it's just asynchronous and synchronous respectively
5.  It replaces ORMs. Lately we see a lot of DB and GraphQL integration but GraphQL itself is not that.
6.  Schemaless GraphQL layer





