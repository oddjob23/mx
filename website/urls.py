from django.urls import path
from .views import index, filter

urlpatterns = [
    path('', index),
    path('query/', filter)
]
