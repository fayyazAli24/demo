FROM node:20

WORKDIR /app

COPY . .

ARG NODE_ENV
RUN if [ ${NODE_ENV} == "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

ENV PORT 3000
EXPOSE ${PORT}


CMD ["node", "/app/index.js" ,]