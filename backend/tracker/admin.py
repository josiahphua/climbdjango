from django.contrib import admin
from .models import Tracker, Route, Routes_Tracker
# Register your models here.
admin.site.register(Tracker)
admin.site.register(Route)
admin.site.register(Routes_Tracker)