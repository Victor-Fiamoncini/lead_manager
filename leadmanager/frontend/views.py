# Imports
from django.shortcuts import render

# Index
def index(request):
  return render(request, 'frontend/index.html')
