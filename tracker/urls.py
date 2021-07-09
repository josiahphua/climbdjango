from django.urls.conf import path
from . import views

app_name = "tracker"

urlpatterns = [
    path("api/", views.tracker_index, name="index")
]
