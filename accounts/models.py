from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

# Create your models here.
"""
I can create a new table to call the one to many relationship then label the id here.
"""



class User(AbstractUser):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4
    )
       
class Follower(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    follower_id = models.ManyToManyField(User, related_name="flower")

class Following(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    following_id = models.ManyToManyField(User, related_name="flowing")

    # class Meta:
    #     db_table = "climby"