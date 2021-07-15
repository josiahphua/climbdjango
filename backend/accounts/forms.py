from backend.accounts.models import UserAccount
from django.contrib.auth.forms import UserCreationForm
from accounts.models import *

class RegisterUserForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        model = UserAccount
        
