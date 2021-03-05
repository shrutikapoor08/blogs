
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




