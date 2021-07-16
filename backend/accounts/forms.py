from django.contrib.auth.forms import UserCreationForm
from accounts.models import UserAccount

class RegisterUserForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        model = UserAccount
        
