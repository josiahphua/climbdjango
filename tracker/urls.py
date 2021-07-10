from django.urls.conf import path
from . import views

app_name = "tracker"

urlpatterns = [
    path("practice/", views.for_practice, name="index")
]
