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

export const UPDATE_PRIVATE = gql`
  mutation EditData(
    $user: String!
    $name: String!
    $age: String!
    $gender: String!
    $tel: String!
  ) {
    editData(user: $user, name: $name, age: $age, gender: $gender, tel: $tel) {
      id
    }
  }
`;
export const UPDATE_ADDRESS = gql`
  mutation EditData(
    $user: String!
    $state: String!
    $city: String!
    $street: String!
    $postalCode: String!
  ) {
    editData(
      user: $user
      address: {
        state: $state
        city: $city
        street: $street
        postalCode: $postalCode
      }
    ) {
      id
    }
  }
`;
