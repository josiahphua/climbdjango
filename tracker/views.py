from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework.response import  Response
from rest_framework import status
from django.http.response import JsonResponse
from accounts.models import User
from tracker import serializers
from tracker.serializers import TrackerSerializer


# Create your views here.
def tracker_index(request):
    sup = { "text": "wassup"}
    return HttpResponse(sup['text'])

def for_practice(request):
    user = User.objects.filter(username="josiahp")
    # serializers = UserSerializer(user)
    return JsonResponse(user)
