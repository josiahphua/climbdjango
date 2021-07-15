from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register("tracker", views.TrackerViewset)
router.register("route", views.RouteViewset)

urlpatterns = router.urls