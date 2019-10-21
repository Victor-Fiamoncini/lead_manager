# Imports
from django.contrib import admin
from django.urls import path, include

# Urls
urlpatterns = [
  # '/'
  path('', include('frontend.urls')),
  path('', include('leads.urls')),
  path('', include('accounts.urls')),
]
