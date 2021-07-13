from rest_framework import serializers
from tracker.models import *

class TrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tracker
        fields = '__all__'
        
class RouteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Route
        fields = '__all__'

class Routes_TrackerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Routes_Tracker
        fields = '__all__'