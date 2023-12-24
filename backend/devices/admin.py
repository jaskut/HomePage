from django.contrib import admin
from .models import *

class DataAdmin (admin.ModelAdmin):
    list_display = ["time", "sensor"]

class FanstateAdmin (admin.ModelAdmin):
    list_display = ["time", "state", "override"]

class SensorAdmin (admin.ModelAdmin):
    list_display = ["name"]

admin.site.register(Data, DataAdmin)
admin.site.register(Fanstate, FanstateAdmin)
admin.site.register(Sensor, SensorAdmin)

# Register your models here.
