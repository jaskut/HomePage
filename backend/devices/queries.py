import graphene
from devices import models
from devices import types
from graphql_jwt.decorators import login_required

import datetime


# The Query class
class Query(graphene.ObjectType):
    all_sensors = graphene.List(types.SensorType)
    sensor = graphene.Field(types.SensorType, id=graphene.Int())
    data_by_day_and_sensor = graphene.List(types.DataType, day=graphene.Date(), sensor=graphene.Int())
    data_by_sensor = graphene.List(types.DataType, sensor=graphene.Int(), n_minutes=graphene.Int())
    fanstate = graphene.Field(types.FanstateType)

    @login_required
    def resolve_all_sensors(root, info):
        return (
            models.Sensor.objects.all()
        )

    @login_required
    def resolve_sensor(root, info, id):
        return (
            models.Sensor.objects.get(sensor_id=id)
        )

    @login_required
    def resolve_data_by_day_and_sensor(root, info, day, sensor):
        return (
            models.Data.objects.filter(time__contains=day, sensor=sensor)
        )

    @login_required
    def resolve_data_by_sensor(root, info, sensor, n_minutes):
        time = datetime.datetime.now() - datetime.timedelta(minutes = n_minutes-60)
        return (
            models.Data.objects.filter(sensor=sensor, time__gte=time)
        )

    @login_required
    def resolve_fanstate(root, info):
        return (
            models.Fanstate.objects.latest("time")
        )