from tracker.models import *
#imported Tracker and Route
from rest_framework import viewsets, permissions
from .serializers import *

# Tracker Viewset 
class TrackerViewset(viewsets.ModelViewSet):
    queryset = Tracker.objects.all().order_by('climb_type')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackerSerializer

class RouteView(viewsets.ModelViewSet):
    queryset = Route.objects.all().order_by('grade')
    serializer_class = RouteSerializer

class RoutesTrackerView(viewsets.ModelViewSet):
    queryset = Routes_Tracker.objects.all().order_by('id')
    serializer_class = Routes_TrackerSerializer