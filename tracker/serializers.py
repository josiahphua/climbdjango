from rest_framework import serializers
from tracker.models import *
from accounts.models import *

class TrackerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tracker
        fields = '__all__'
        
