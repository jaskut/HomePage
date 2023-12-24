import graphene
from devices import queries, mutations

schema = graphene.Schema(query=queries.Query, mutation=mutations.Mutation)
