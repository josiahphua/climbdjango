from rest_framework import routers, urlpatterns
from .api import TrackerViewset

router = routers.DefaultRouter()
router.register("api/tracker", TrackerViewset, 'tracker')

urlpatterns = router.urls