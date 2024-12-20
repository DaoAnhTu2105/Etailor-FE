import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import Swal from "sweetalert2";

export const ChatRealTime = () => {
  const [messageReturn, setMessageReturn] = useState(null);
  useEffect(() => {
    let connection;

    const connectionInit = async () => {
      const URL = "https://localhost:7259/chatHub";
      const customer = JSON.parse(localStorage.getItem("customer"));

      connection = new signalR.HubConnectionBuilder()
        .withUrl(URL, {
          accessTokenFactory: () => customer?.token,
        })
        .configureLogging(signalR.LogLevel.Information)
        .build();

      connection.on("ChatWithUs", (message) => {
        setMessageReturn(message);
        console.log("message", message);
      });

      connection.onclose(() => {
        console.log("Connection closed");
      });

      try {
        await connection.start();
        console.log("Connected to SignalR hub");
      } catch (error) {
        console.error("Error connecting to SignalR hub:", error);
      }
    };

    connectionInit();

    // Cleanup function to close the connection when the component unmounts
    return () => {
      // Ensure connection is closed when component unmounts
      if (connection) {
        connection.stop().then(() => console.log("Connection stopped"));
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return messageReturn;
};
