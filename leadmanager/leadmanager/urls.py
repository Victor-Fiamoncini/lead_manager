# Imports
from django.contrib import admin
from django.urls import path, include

# Urls
urlpatterns = [
  # '/'
  path('', include('leads.urls')),
]
