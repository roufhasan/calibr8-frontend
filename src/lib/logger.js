const logger = {
  error: (context, error) => {
    if (process.env.NODE_ENV === "development") {
      console.error(`[${context}]`, error);
    }
  },
};

export default logger;
