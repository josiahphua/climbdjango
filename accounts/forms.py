from django.contrib.auth.forms import UserCreationForm
from accounts.models import *

class RegisterUserForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        model = User
        fields = '__all__'

    def __str__(self):
        return self.username
