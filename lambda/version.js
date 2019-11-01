export function handler(event, context, callback) {
  // print the Node.js version
  callback(null, {
    statusCode: 200,
    body: `${process.version}`
  });
}
