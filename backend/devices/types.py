import graphene
from graphene_django import DjangoObjectType
from devices import models

class DataType(DjangoObjectType):
    class Meta:
        model = models.Data

class SensorType(DjangoObjectType):
    class Meta:
        model = models.Sensor

    last_data = graphene.Field(DataType)
    factors = graphene.List(graphene.String)

    def resolve_last_data(self, info):
        return models.Data.objects.filter(sensor=self.sensor_id).latest('time')

    def resolve_factors(self, info):
        return self.factors.split(',')

class FanstateType(DjangoObjectType):
    class Meta:
        model = models.Fanstate