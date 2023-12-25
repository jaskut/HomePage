# Generated by Django 5.0 on 2023-12-24 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('data_id', models.AutoField(primary_key=True, serialize=False)),
                ('time', models.DateTimeField()),
                ('sensor', models.IntegerField(blank=True, null=True)),
                ('humidity', models.FloatField(blank=True, null=True)),
                ('temperature', models.FloatField(blank=True, null=True)),
                ('pressure', models.FloatField(blank=True, null=True)),
            ],
            options={
                'db_table': 'data',
            },
        ),
        migrations.CreateModel(
            name='Fanstate',
            fields=[
                ('state_id', models.AutoField(primary_key=True, serialize=False)),
                ('time', models.DateTimeField()),
                ('state', models.IntegerField(blank=True, null=True)),
                ('override', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'fanstate',
            },
        ),
        migrations.CreateModel(
            name='Sensor',
            fields=[
                ('sensor_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('location', models.TextField(blank=True, null=True)),
                ('factors', models.CharField(blank=True, max_length=29, null=True)),
            ],
            options={
                'db_table': 'sensor',
            },
        ),
    ]