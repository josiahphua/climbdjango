from tracker.models import *
#importted Tracker and Route
from rest_framework import viewsets, permissions
from .serializers import TrackerSerializer

# Tracker Viewset 
class TrackerViewset(viewsets.ModelViewSet):
    queryset = Tracker.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    serializer_class = TrackerSerializer