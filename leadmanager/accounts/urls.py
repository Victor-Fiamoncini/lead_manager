# Imports
from django.urls import path, include
from .api import RegisterAPI
from knox import views as knox_views

# Urls
urlpatterns = [
  # 'api/auth'
  path('api/auth', include('knox.urls')),
  # 'api/auth/register'
  path('api/auth/register', RegisterAPI.as_view()),
]
