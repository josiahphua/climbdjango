from django.db.models.fields import DateField
from accounts.models import User
from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid
# Create your models here.

class Route(models.Model):
    route_id = models.AutoField(primary_key=True, editable=False)
    route_desc = models.CharField(max_length=50, default=None)
    grade = models.CharField(max_length=10)
    attempts = models.IntegerField(default=0)
    timing = models.DecimalField(max_digits=5, decimal_places=2)
    date_attempted = models.DateField(auto_now_add=True)


class Tracker(models.Model):

    class types_of_climbs(models.TextChoices):
        TOPROPE = 'TR'
        LEAD = 'L'
        BOULDER = 'B'
        SPEED = 'S'

    tracker_id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4
    )
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    description = models.TextField(default=None)
    route_id = ArrayField
    (
        ArrayField
        (
            models.CharField(max_length=50)
        )
    )
    climb_type = models.CharField(
        max_length=2, 
        choices=types_of_climbs.choices, 
        default=types_of_climbs.TOPROPE
    )
