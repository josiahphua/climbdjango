from django.db.models.fields import DateField
from accounts.models import UserAccount
from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid
# Create your models here.


class Route(models.Model):

    class types_of_climbs(models.TextChoices):
        BOULDER = 'BD'
        TOPROPE = 'TR'
        LEAD = 'LD'
        SPEED = 'SP'

    id = models.AutoField(primary_key=True, editable=False)
    route_desc = models.CharField(max_length=50, default=None)
    grade = models.IntegerField(default=1)
    attempts = models.IntegerField(default=0)
    timing = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    date_attempted = models.DateField(auto_now_add=True)
    climb_type = models.CharField(
        max_length=2, 
        choices=types_of_climbs.choices, 
        default=types_of_climbs.BOULDER
    )

    def __str__(self):
        return self.route_desc

class Tracker(models.Model):

    tracker_id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4
    )
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    description = models.TextField(default=None)
    route_id = models.OneToOneField(Route, on_delete=models.CASCADE)
    

    def __str__(self):
        return self.title
    
# class Routes_Tracker(models.Model):
#     id = models.AutoField(primary_key=True, default=1)
#     route_id = models.OneToOneField(Route, on_delete=models.CASCADE)
#     tracker_id = models.OneToOneField(Tracker, on_delete=models.CASCADE)

#     def __str__(self):
#         return self.id