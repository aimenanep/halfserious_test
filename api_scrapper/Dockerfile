FROM python:3.9-buster

ENV PYTHONUNBUFFERED=1

COPY . /app

WORKDIR /app

RUN pip install --upgrade pip && \
    pip install -r req.txt 