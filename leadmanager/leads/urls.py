# Imports
from rest_framework import routers
from .api import LeadViewSet

# Lead Router
router = routers.DefaultRouter()

router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls
