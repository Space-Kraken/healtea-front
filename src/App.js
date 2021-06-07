import Navbar from "./components/UI/organisms/Navbar";
import { gql, useQuery } from "@apollo/client";

const QUERY_TEST = gql`
  query {
    greet
  }
`;

function App() {
  const { loading, error, data } = useQuery(QUERY_TEST);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div className="bg-gradient-to-r from-fresh-god-magic-blue  via-fresh-god-50 to-fresh-god-cool-rose flex flex-col h-screen justify-between">
      <header>
        <Navbar />
      </header>
      <main className="h-full">
        <div className="bg-white h-full border-t border-gray-400 text-center pt-10 px-20 rounded-tl-main">
          {data.greet}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
