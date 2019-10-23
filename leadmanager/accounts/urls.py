# Imports
from django.urls import path, include
from knox import views as knox_views
from .api import RegisterAPI, LoginAPI, UserAPI

# Urls
urlpatterns = [
  # 'api/auth'
  path('api/auth', include('knox.urls')),
  # 'api/auth/register'
  path('api/auth/register', RegisterAPI.as_view()),
  # 'api/auth/login'
  path('api/auth/login', LoginAPI.as_view()),
  # 'api/auth/login'
  path('api/auth/', UserAPI.as_view()),
  # 'api/auth/logout'
  path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]
