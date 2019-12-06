# Ask Me About GraphQL 

I love talking about GraphQL and listening to companies adopting or thinking of adopting GraphQL. I often get asked why would someone chose to move to GraphQL. There are a ton of resources out there that talk about the difference between REST and GraphQL and those are great to checkout if you are interested in how those two are different. In this blog post, I want to answer some common questions I get asked or questions you might have before starting GraphQL



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



## I get that it will be useful for mobile applications where getting the payload size small is important, but how is it useful on the web?


## Our services are written in REST. It will take months to move them over to GraphQL 

## Isn't GraphQL helpful when you are writing close to the database? 

## I get that with GraphQL, you need to wait for the backend engineers to write the GraphQL API?

## Is it a query language for database? 

## Can GraphQL be used without JS? 

## Okay, cool. Where should I start?

GraphQL is a database

1. Didn't really get GraphQL introspectability & how to take advantage of the typed schema as both GraphQL & REST send untyped JSON.


2. Literally: "GraphQL replace Redux". "Why bother with GraphQL if I've been doing same with SQL". "GraphQL is a fancy JS library"

Interfaces, everyone thinks they automatically add fields to the types that implement them.

When I first heard about GraphQL, I thought it was a programming language that makes charts (like D3) 🤷‍♀️


2. That GraphQL is all or nothing and they would need to replace/rewrite their entire REST API in order to introduce GraphQL into their product

Not understanding that your schema doesn’t need to be a mirror of your data layer.  2. That GraphQL is a spec, not a product.

You send in a complex query, and some magical engine works out all of the subqueries to get the data for it, ties it all together and sends it back to the client. Amazing! Only now, two years later do I realise that you basically have to write all that clever stuff yourself. 😩

 Graphql only worked with graph databases 
2. Graphql is a programming language, 
3. Graphql was impliment once and all the endpoints would route to it as long as they have been defined, I didn't  know one has to write custom types and models for each service 🤦🏿‍♀️


Not realizing the order resolvers are called in
2. Because I'm using GraphQL, I have to make everything a query or mutation and can't mix any REST endpoints in with it

. GraphQL is meant for green field project and it is difficult to introduce in an existing project. 
2. GraphQL is only for frontend folks

. GraphQL is something like exposing your database.

2. GraphQL should behave like REST, with same methods and abstractions.


1. Designing the schema to match to format of the data source is a good idea. It turns out it wasn’t. 

2. Requesting data from a GraphQL server is hard and requires a 3rd party client which is problematic in some languages. A lot of people forget it’s just an HTTP request.


- it provides no improvement over using REST
- it's only useful for graph-based data schemas
- all actions need to by synchronous
- one can just wrap a GraphQL API with a REST API
- every type needs exactly one resolver


People comparing it to REST, while that's confusing since nobody knows exactly what REST is, and almost none of the things 'unique' of GraphQL are impossible with REST. It's also a different kind of thing, comparing it to Avro might make more sense.

The difference between queries and mutations still puzzles me to this day.

there's only one difference between these on the server side-queries are executed in parallel, whereas mutation resolvers are called serially as execution of one can affect the other.
Otherwise it's quite the same thing.


1. Though it enables GraphDatabases for the browser                        2. Resolvers turn into doing REST calls, as not all backends support GraphQL (do I have to use the. graphQL for the sake) and Schema stiching


A complete replacement for basic CRUD Ops.


In regards to 2. - a coworker said "graphql is great for frontend, not backend, particularly databases" but I'm a code newbie, so I don't really have enough experience / context to understand what he meant 🤷‍♀️

. It's an efficient way to query graph database.
2. Isse graph banta h?

I think when someone start in Graphql, use a Schema First approach but when your API grown it's time to move to Code First approach.

But i think when you start in Code First approach u have a better DX


I'd originally looked at GraphQL as a way to do simple batch requests, but it's really not a great tool for that job (and updates to HTTP are making REST more attractive for that alone). The "graph" is the relationship between things; it makes sense when that's how you query.


1. I thought It would have something like ORM type queries :D (btw 
@prisma
 has this feature now )

2. 
   - Most people ask me If GraphQL endpoint exposes whole schema architecture then Isn't it a concern of security? 
   - "GraphQL is a protocol"



How the server works for graphsQL and it fits with enterprise architecture with legacy code.


n my experience the point 2 is more relevant, especially when you talk with other folks about #GraphQL. Normally people ask: Can I do the same with REST? Which are the main benefits of using GraphQL? "Some" backenders ask: Another frontend shit to avoid to deal with REST?


I thought mutations were some cool way to declare the nested  mutations that you want to happen to the graph (symmetrical to queries). But it's just RPC :/


- That it’s somehow related to Facebook’s “graph”
- That it requires complicated clients and is near impossible to do with a simple HTTP fetch

On the other end of the spectrum:
- That it’s really easy to layer on top of existing services (I have not found this to be true)


- It's a complete backend technology, or
- It's a database technology

These both seem common to me. I've heard multiple people, particularly data scientists, starting out with the assumption that GraphQL is a database


1. GraphQL will write database queries itself, i just need to specify schemas and the relation between them
2. A query language for a graph database, like neo4j


 The query and mutation is cut and dry you can't change stuff in a query when in fact it's just asynchronous and synchronous respectively

2. I don't want to use Facebook for my project. This one had a surprise when I told him about react.


GraphQL is very confusing name coz when use word Graph it means Graph like a plotting graph and QL is already a known fact that it is something to do with SQL but graph word doesn’t sit with it. That is why I had/have trouble learning it coz Graph is again a Graph 😂


Is graphql more performant than REST. I mean I know the data coming over the network will be less  in most of the cases for graphql. But apart from this, is there any other performance gains ?


1. It’s as simple as REST for backend development. This is not true, it can be much trickier for the backend team. Ultimately worth it but there’s more upfront investment.
2. It replaces ORMs. Lately we see a lot of DB and GraphQL integration but GraphQL itself is not that.


I thought for a long time that GraphQL is only needed if one endpoint is used in multiple places, otherwise pointless.


 How resolvers are mapped and executed in front of GraphQL types 
2. It will map automatically to your models and make some magic on top
Generally speaking, high level frameworks like Apollo or Prisma, abstract a large amount of logic that requires explanation for newbies


Probably the biggest confusion I’ve seen is between GraphQL and graph databases.


GraphQL can't cache queries and only used for react


Before starting I thought I would have to rewrite db,  but later I found it is just a wrapper with queries and mutation. Graphql makes life easy

But I had issues with file uploads 
And making Apis for get request such as unsubscribe link in email or verify user

.  Picking up legacy code in a company saying they use graphql - then realizing they implemented an overbaked REST endpoint!


A misconception we had was that GraphQL requires a schema compulsorily. We just loved the way a GraphQL query is written and then realized that you can decouple it from execution. 

Then we went on to write a Schemaless graphql layer😀