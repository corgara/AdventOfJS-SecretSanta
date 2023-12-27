export const schema = gql`
  type Invite {
    id: String!
    userId: Int
    eventId: String!
    user: User
    event: Event!
    status: Status!
    email: String!
    name: String!
  }

  enum Status {
    INVITED
    DECLINED
    ACCEPTED
  }

  type Query {
    invites: [Invite!]! @skipAuth
    invite(id: String!): Invite @skipAuth
  }

  input CreateInviteInput {
    userId: Int
    eventId: String!
    status: Status!
    email: String!
    name: String!
  }

  input UpdateInviteInput {
    userId: Int
    eventId: String
    status: Status
    email: String
    name: String
  }

  type Mutation {
    createInvite(input: CreateInviteInput!): Invite! @skipAuth
    updateInvite(id: String!, input: UpdateInviteInput!): Invite! @skipAuth
    deleteInvite(id: String!): Invite! @skipAuth
  }
`
