#### Run lambda
`./lambda_run.sh`
#### Test image
`curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"url": "https://google.com"}'`
