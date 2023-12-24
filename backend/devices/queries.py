import graphene
from devices import models
from devices import types
from graphql_jwt.decorators import login_required


# The Query class
class Query(graphene.ObjectType):
    all_sensors = graphene.List(types.SensorType)
    sensor = graphene.Field(types.SensorType, id=graphene.Int())

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
