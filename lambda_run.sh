docker build --platform=linux/amd64 -f Dockerfile -t puppeteer-lambda . 
docker run -p 9000:8080 puppeteer-lambda