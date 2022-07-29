FROM public.ecr.aws/lambda/nodejs:14
#yarn add puppeteer
RUN yum install -y amazon-linux-extras
RUN amazon-linux-extras install epel -y
RUN yum install -y chromium
RUN npm install puppeteer-core
COPY src/*  ${LAMBDA_TASK_ROOT}

CMD [ "app.handler" ]
