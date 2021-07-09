from accounts.models import User
from django.db import models

# Create your models here.
class Tracker(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    