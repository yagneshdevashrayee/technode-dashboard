import * as AWS from "aws-sdk";

const config = new AWS.Config({
  accessKeyId: "AKIAZ7PKQTJR7UGPZN6W",
  secretAccessKey: "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",
  region: "ap-south-1",
});
AWS.config.update(config);

export default function fetchData(tableName) {
  let tableData = [];
  const docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: tableName,
  };

  docClient.scan(params, (err, data) => {
    if (!err) {
      let formattedData;
      if (data.Items) {
        formattedData = data.Items.reverse().map((eachRow) =>
          Object.assign(
            eachRow,
            { timeStamp: eachRow.ts },
            {
              ts: `${new Date(eachRow.ts).getDate()}/${
                new Date(eachRow.ts).getMonth() + 1
              }/${new Date(eachRow.ts).getFullYear()}-${new Date(eachRow.ts).getHours()}:${new Date(
                eachRow.ts
              ).getMinutes()}:${new Date(eachRow.ts).getSeconds()}`,
            }
          )
        );
      }
      sessionStorage.setItem("data", JSON.stringify(formattedData));
      tableData = JSON.stringify(data.Items);
    }
  });
  return tableData;
}
