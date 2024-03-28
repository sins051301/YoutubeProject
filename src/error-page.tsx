import React from "react";
import { useRouteError } from "react-router-dom";
interface RouteError {
    data: string;
    error: {
        columnNumber: number;
        fileName: string;
        lineNumber: number;
        message: string;
        stack: string;
      };
    internal: boolean;
    status: number;
    statusText: string;
}
export default function ErrorPage() {
  const error = useRouteError() as RouteError;  //as 사용 지양
  console.error(error);

  return (
    <div id="error-page" style={{textAlign:"center"}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.error.message}</i>
      </p>
    </div>
  );
}
