import * as AWS from "aws-sdk";

export default function fetchData(tableName) {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: tableName,
  };

  docClient.scan(params, (err, data) => {
    if (!err) {
      console.log("data.items", data.Items);
      localStorage.setItem("data", JSON.stringify(data.Items));
    }
  });
}
