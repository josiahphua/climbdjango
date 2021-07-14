from rest_framework import serializers
from tracker.models import Tracker, Route

class TrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tracker
        fields = '__all__'
        
class RouteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Route
        fields = '__all__'
