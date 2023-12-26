import graphene
from graphene_django import DjangoObjectType
from devices import models

class SensorType(DjangoObjectType):
    class Meta:
        model = models.Sensor

class DataType(DjangoObjectType):
    class Meta:
        model = models.Data

class FanstateType(DjangoObjectType):
    class Meta:
        model = models.Fanstate