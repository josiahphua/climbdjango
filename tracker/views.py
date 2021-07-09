from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def tracker_index(request):
    sup = { "text": "wassup"}
    return HttpResponse(sup['text'])
    # return render(request,"tracker/index.html", )