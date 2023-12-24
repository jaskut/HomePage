import graphene
from graphene_django import DjangoObjectType
from devices import models

class SensorType(DjangoObjectType):
    class Meta:
        model = models.Sensor