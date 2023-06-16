module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};


//endpoint: GET - https://jqoz7mhyl3.execute-api.us-east-1.amazonaws.com/

// endpoints:
//   POST - https://jqoz7mhyl3.execute-api.us-east-1.amazonaws.com/
//   GET - https://jqoz7mhyl3.execute-api.us-east-1.amazonaws.com/