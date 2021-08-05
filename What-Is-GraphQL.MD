# What is GraphQL?

Outline
- GraphQL simplified
- Technical terms of GraphQL 
- Advantages of GraphQL
- Difference between REST and GraphQL
- Similarities
- Drawbacks / when GraphQL may not be suitable
- How to get started + resources
- FAQs
- Current developer tools ecosystem
- Should I adopt GraphQL?

---
## GraphQL 
- specification [Link to specs]
- can be implemented in any language.
- HTTP request 

The formal definition -
> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

In plain words, GraphQL is a syntax for asking for data. GraphQL API is an alternative to REST APIs. The big difference is that in addition to making the call to the endpoint, we also need to provide what fields we want to access.
In technical terms, GraphQL is a specification and provides a way for querying for data. GraphQL provides a runtime for querying for data and specifies what should be delivered when data is asked. GraphQL specifies a way to ask for data, and delivers exactly the data that was requested. This is a big difference as compared to REST APIs. 

With GraphQL, we get 1 endpoint -> `/graphql`. As compared to REST which has multiple resource endpoints such as GET `users`, POST `users/{id}`, with GraphQL we only have one endpoint that does all the functions of getting, inserting, deleting or mutating data. 


## Technical terms of GraphQL 
- Query: Query is similar to "Getting data". Query is used to fetch for data. It is similar to "GET" of a REST API.
  
- Mutation: Mutation, as the name suggests is used to mutate data. It does the operations of PUT, POST, DELETE, in a REST API. Any time the data needs to be modified, a Mutation is fired.  
  
- Resolvers: Resolvers are the functions that do the heavylifting. Resolver is similar to a resource implementation in REST. All the magic work is done by resolver - such as fetching for data, filtering data, adding instrumentation. Essentially, every field has a resolver associated. Each time a field is called, a resolver is invoked. A resolver can be a default resolver, or a custom resolver that does more than just fetching the data for a particular field. A resolver can do additional magic such as - adding instrumentation, adding analytics. 
  
- Schema: Schema is a contract between the client and the server. It is a comprehensive list of all the operations that are allowed in a given API. It specifies all the operations that the graphql api can perform. It defines every single field, the type of data that comes back. Anything that is fetched outside of the schema will result in an error. GraphQL won't let it.

- Fields: A single field represents a single unit of data that is requested. For eg `user`. Each field "resolves" to a resolver.
  
- Type: Type represents the data type. It can be a custom type like "User" or a primitive type like "string"


## Advantages of GraphQL
- Type safety
- introspection
- what you get is what you asked for 
- avoid overfetching and underfetching
- powerful instrumentation
- developer tools
- community
- no versions = easy updates
- single endpoint = no needs to reintegrate
- instrumentation = smarter deprecations


## Disadvantages of GraphQL 
- error handling
- file uploads 
- authentication layers
- public apis
- 200s everything
- REST does caching better


## Difference between REST and GraphQL 
- endpoints
- versioning
- building a resource
- fetching a resource 

## Similarities
- JSON data
- HTTP


## FAQs
- Graph in GraphQL? 
- QL? Need to write SQL?
- Existing REST architecture. Need to scrap? 
- How to clean up data?
- GraphQL in .NET / JAVA? 


## Current developer tools ecosystem
- graphiql
- playground
- dgraph
- apollo
- prisma
- hasura
- onegraph
- neo4j
- graphql-js
- [express-graphql](https://github.com/graphql/express-graphql)

## How to get started + resources
- Read the docs graphql.org
- Play with GraphQL using graphiql <Insert link of starter project> 
  > TODO: starter project
- Follow a tutorial 
- Integrate graphql on the client side - consume graphql
- implement graphql on the server side - build graphql

Suggested learning path -
1. Understand concepts: How to graphql https://www.howtographql.com/
1. Read the official docs - https://graphql.org/learn/
Play around with GraphiQL to try out GraphQL with GitHub's API - https://developer.github.com/v4/explorer
Watch a course in your stack - https://www.udemy.com/topic/graphql/
1. Build a GraphQL server - https://egghead.io/courses/build-a-graphql-server
1. Use GraphQL on the client - https://egghead.io/courses/graphql-data-in-react-with-apollo-client
1. Read a book - https://www.amazon.com/Learning-GraphQL-Declarative-Fetching-Modern/dp/1492030716

## Should I adopt GraphQL?