import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($user: String!) {
    getUser(user: $user) {
      id
      email
      role {
        rolType
      }
      active
      medicalRecord {
        status
        appointments {
          id
        }
        surveys {
          id
        }
        recipes {
          id
        }
        tests {
          id
        }
      }
      userData {
        name
        age
        gender
        address {
          state
          city
          street
          postalCode
        }
        tel
      }
    }
  }
`;

export const GET_ROLES = gql`
  query GetRoles {
    getRoles {
      id
      rolType
    }
  }
`;

export const UPDATE_USER = gql`
  mutation EditUser(
    $id: String!
    $email: String!
    $password: String!
    $role: String!
    $active: Boolean!
  ) {
    editUser(
      id: $id
      email: $email
      password: $password
      role: $role
      active: $active
    ) {
      id
    }
  }
`;
