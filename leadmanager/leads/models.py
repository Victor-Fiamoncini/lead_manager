# Imports
from django.db import models

# Lead
class Lead(models.Model):
  name = models.CharField(max_length=255)
  email = models.EmailField(max_length=255, unique=True)
  message = models.CharField(max_length=500, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
