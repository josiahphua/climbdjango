from rest_framework import routers, urlpatterns
from . import views

router = routers.DefaultRouter()
router.register("tracker", views.TrackerViewset)
router.register("route", views.RouteView)
router.register("routetracker", views.RoutesTrackerView)

urlpatterns = router.urls