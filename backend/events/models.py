from django.contrib.auth.models import User
from django.db import models
from accounts.models import UserAccount

# Create your models here.
class Event(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    color = models.CharField(max_length=50, default='pink')
    event_from = models.DateTimeField(auto_now=False, auto_now_add=False)
    event_to = models.DateTimeField(auto_now=False, auto_now_add=False)
    event_title = models.CharField(max_length=50)
    event_desc = models.TextField(default=None)
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
