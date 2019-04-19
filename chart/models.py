# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Chart(models.Model):
    id=models.AutoField(primary_key=True)
    chart_id = models.TextField(db_column='CHART_ID', blank=True, null=True)  # Field name made lowercase.
    title = models.TextField(db_column='TITLE', blank=True, null=True)  # Field name made lowercase.
    datasource = models.TextField(db_column='DATASOURCE', blank=True, null=True)  # Field name made lowercase.
    datayear = models.IntegerField(db_column='DATAYEAR', blank=True, null=True)  # Field name made lowercase.
    unit = models.TextField(db_column='UNIT', blank=True, null=True)  # Field name made lowercase.
    visualtype = models.TextField(db_column='VISUALTYPE', blank=True, null=True)  # Field name made lowercase.
    author = models.TextField(db_column='AUTHOR', blank=True, null=True)  # Field name made lowercase.
    keyword = models.TextField(db_column='KEYWORD', blank=True, null=True)  # Field name made lowercase.
    datatype = models.TextField(db_column='DATATYPE', blank=True, null=True)  # Field name made lowercase.
    filepath = models.TextField(db_column='FILEPATH', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'chart'
