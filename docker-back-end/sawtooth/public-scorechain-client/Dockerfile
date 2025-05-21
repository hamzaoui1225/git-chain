FROM python:3.6.10-slim   
RUN python -m pip install requests sawtooth-sdk flask
ENV FLASK_APP=client.py
WORKDIR /app
COPY client.py .