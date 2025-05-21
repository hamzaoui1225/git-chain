FROM alpine

WORKDIR /data

RUN apk update --no-cache
RUN apk add --no-cache python3 py-pip
RUN python -m pip install --break-system-packages uploadserver 

EXPOSE 8000

CMD [ "python", "-m", "uploadserver", "--directory", "/data" ]