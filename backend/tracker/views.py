from tracker.models import Tracker, Route
#imported Tracker and Route
from rest_framework import viewsets, permissions
from .serializers import *

# Tracker Viewset 
class TrackerViewset(viewsets.ModelViewSet):
    queryset = Tracker.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackerSerializer

class RouteViewset(viewsets.ModelViewSet):
    queryset = Route.objects.all().order_by('grade')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = RouteSerializer
