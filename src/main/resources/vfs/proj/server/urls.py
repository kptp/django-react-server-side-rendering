from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path, include, re_path

urlpatterns = [
    path("", include("ssr.urls")),
]

urlpatterns += staticfiles_urlpatterns()