import { ToastContainer } from "react-toastify";
import "./App.css";
import Button from "./components/button";
import Footer from "./components/footer";
import Header from "./components/header";
import RoutesWrapper from "./components/routes";
import MyContext from "./configs/myContext";
import { useState } from "react";
import MyContextProvider from "./configs/providers/myContextProvider";
import { ApolloProvider } from "@apollo/client/react";
import client from "./configs/apolloClient";

const buttons = [
  { bgColor: "red", buttonText: "Red" },
  { bgColor: "blue", buttonText: "Blue" },
  { bgColor: "pink", buttonText: "Pink" },
  { bgColor: "green", buttonText: "Green" },
  { bgColor: "yellow", buttonText: "Yellow" },
  { bgColor: "brown" },
  { bgColor: "orange", buttonText: "Orange" },
];

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <MyContextProvider>
          <RoutesWrapper />
          <ToastContainer position="top-center" theme="colored" />
        </MyContextProvider>
      </ApolloProvider>
      {/* {buttons.map((el: any) => (
        <Button bgColor={el.bgColor} buttonText={el.buttonText} />
      ))} */}
    </>
  );
}

export default App;
