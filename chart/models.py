from django.db import models

# Create your models here.

class Chart(models.Model):
    chart_id = models.CharField(max_length=30)
    title = models.CharField(max_length=200)
    datasource = models.CharField(max_length=30)
    datayear = models.IntegerField()
    unit = models.CharField(max_length=10)
    visualtype = models.CharField(max_length=30)
    author = models.CharField(max_length=20)
    keyword = models.CharField(max_length=200)
    datatype = models.CharField(max_length=30)
    filepath = models.CharField(max_length=200)

    def __str__(self):
        return self.title

    