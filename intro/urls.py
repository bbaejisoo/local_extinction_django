from django.urls import path
from . import views

app_name = 'intro'

urlpatterns = [
    path('', views.intro_index, name="index"),
    
]
