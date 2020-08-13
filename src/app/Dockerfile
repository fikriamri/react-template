# build react app, it should be /build
# FROM node:12.2.0-alpine as build
FROM node:13-alpine as build
ARG REACT_APP_FLAGR_URL=""
ARG REACT_APP_SERVER_LOCATION=""
ARG REACT_APP_API_ALTERRA_COURSE_URL=""
ARG REACT_APP_GOOGLE_APIKEY=""
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
RUN npm run build

# Creating nginx image and copy build folder from above
# FROM nginx:1.16.0-alpine
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN mkdir /usr/share/nginx/log
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]