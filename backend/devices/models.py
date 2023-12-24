from django.db import models


class Data(models.Model):
    data_id = models.AutoField(primary_key=True)
    time = models.DateTimeField()
    sensor = models.IntegerField(blank=True, null=True)
    humidity = models.FloatField(blank=True, null=True)
    temperature = models.FloatField(blank=True, null=True)
    pressure = models.FloatField(blank=True, null=True)

    class Meta:
        #managed = False
        db_table = 'data'


class Fanstate(models.Model):
    state_id = models.AutoField(primary_key=True)
    time = models.DateTimeField()
    state = models.IntegerField(blank=True, null=True)
    override = models.IntegerField(blank=True, null=True)

    class Meta:
        #managed = False
        db_table = 'fanstate'


class Sensor(models.Model):
    sensor_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    location = models.TextField(blank=True, null=True)
    factors = models.CharField(max_length=29, blank=True, null=True)

    class Meta:
        #managed = False
        db_table = 'sensor'

    def __str__(self):
        return self.name