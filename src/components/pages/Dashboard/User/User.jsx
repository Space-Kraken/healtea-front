import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loader from "./../../../UI/organisms/Loader";

const GET_USER = gql`
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

export default function User() {
  let { id } = useParams();
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { user: id },
  });

  if (loading) return <Loader />;

  return (
    <div>
      {console.log(data)}
      <h1>user {id} view</h1>
      <h1>{data.getUser.userData.name}</h1>
    </div>
  );
}
