from django.urls import path

from . import views

app_name = "retro"
urlpatterns = [
    path("", views.index, name="index"),
]
