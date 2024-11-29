declare module "@api" {
  
    interface QueryActionArg {
      type: "query" | "mutation";
    }
  
    interface QueryActionPayload {
      originalStatus: 400 | 401 | 404 | 200 | 500;
    }
  
  }
  