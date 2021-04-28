import gql from "graphql-tag";
export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
    }
  }
`;
export const POSTS = gql`
  query {
    posts {
      id
      title
      content
      published
      createdAt
    }
  }
`;
