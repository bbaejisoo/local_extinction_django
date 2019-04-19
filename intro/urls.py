from django.urls import path
from django.shortcuts import render
from . import views

app_name = 'intro'

def comingsoon(request):
    return render(request, 'intro/comingsoon.html')

urlpatterns = [
    path('', views.intro_index, name="index"),
    path('comingsoon/', comingsoon, name='comingsoon'),
]
