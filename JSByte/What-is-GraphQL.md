# JSByte: "What is GraphQL" simplified 

**What is GraphQL?** 
In simple terms, a GraphQL API is a way of getting data from any data source. If you are familiar with REST, GraphQL is an alternative to REST APIs and provides a new way of asking for data. GraphQL is a language to query an API and provides a [specification](https://spec.graphql.org/) for fulfilling those queries. The GraphQL spec provide a set of rules for defining what should happen when a GraphQL request is made. 

A cool thing to note is that GraphQL can be used with and on top of any data sources such as REST APIs & databases and it can be plugged anywhere, built in any language and fit on top of any database and tech stack. GraphQL fits in both client and server side.

**Making an API request**

Let's say that we want to fetch a user's name. In a REST API, we have an endpoint that we can use to make a GET request. The endpoint may look like `/users/{id}/`. If we use a curl request to make a call and pass in `id` of a user, it will look like this - 


` 
curl \
-H "Content-Type: application/json" \
https://www.example.com/api/users/123`
`

Let's look at how GraphQL request will look - 
1. The "GET" operation of REST is done by ["Query"](https://graphql.org/learn/queries/) in GraphQL. 

2. We don't have a separate endpoint for `users` in GraphQL. Every request is sent to `/graphql` endpoint.

3. In order to describe what data we are interested in, we pass the relevant parameters to "Query" operation and describe which Query we are interested in. A GraphQL API may support something like "getUsers" Query, which is a query we can use to get users.

A curl request to a GraphQL API looks like -

`
curl \
-X POST \
-H "Content-Type: application/json" \
--data '{ "query": "{ user(id:123 ) { name } } " }' \
https://www.example.com/graphql
`

[Try out sample GraphQL requests here](https://graphqlzero.almansi.me/api)


In plain words, GraphQL is a syntax for asking for data. The big difference between REST and GraphQL is that in addition to making the call to the api endpoint and passing desired parameters, we also need to provide exactly what fields we want to access.

In technical terms, GraphQL is a specification and provides a way for querying for data. The specification specifies what should happen when data is requested and mutated. GraphQL specifies a way to ask for data, and delivers exactly the data that was requested. Since it is a specification, GraphQL APIs can be created in language. GraphQL 


Interested in some GraphQL FAQs?. [Check out this article on GraphQL misconceptions](https://dev.to/shrutikapoor08/what-is-graphql-the-misconceptions-57b9)

--- 
**On a personal note**
I am organizing JS @ PayPal conference at PayPal, and I am stoked! JS @ PayPal is a FREE 3 day conference on May 19, 20, 21. For the first time, we are opening up this beloved internal conference to the public, and I invite you all to join! [Here is the link to register and see scheduled talks](bit.ly/jspaypal2021). We have got amazing talks and speakers lined up. I am really excited because we are bringing [Gather Town](gather.town) to this conference to emulate the experience of being in a conference. I hope to see you there! 
