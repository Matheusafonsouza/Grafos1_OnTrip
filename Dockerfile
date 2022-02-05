FROM python:3.10

ENV PYTHONBUFFERED 1
ENV PYTHONPATH "${PYTHONPATH}:/code/"

RUN mkdir /code

WORKDIR /code

ADD . /code

RUN pip install -r ./requirements.txt
