import React from "react";
import Pages from "./pages";
import Message from "./components/Message";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <Message />
      <Pages />
    </Layout>
  );
}

export default App;
