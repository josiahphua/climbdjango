from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        full_name = self.first_name + self.last_name
        return full_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email

class Follower(models.Model):
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE, default=None)
    follower_id = models.ManyToManyField(UserAccount, related_name="flower")

class Following(models.Model):
    user_id = models.ForeignKey(UserAccount, on_delete=models.CASCADE, default=None)
    following_id = models.ManyToManyField(UserAccount, related_name="flowing")

