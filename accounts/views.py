from accounts.models import User
from django.contrib.auth.forms import AuthenticationForm
from accounts.forms import RegisterUserForm
from django.shortcuts import redirect, render
from django.contrib.auth import login, authenticate, logout

# Create your views here.
def login_user(request):
    login_form = AuthenticationForm()
    user = User.object.get() # << can use (pk=id) if I wanna search username can also input username
    print(user)
    if request.method == "POST":
        login_form = AuthenticationForm(request.POST)
        if login_form.is_valid:
            username = login_form.cleaned_data['username']
            password = login_form.cleaned_data['password']

            user = authenticate(username= username, password= password)
            
            if user is not None:
                login(request, user)
                return redirect("/") # this will be the home page after login.

def register_user(request):
    register = RegisterUserForm()
    if request.method == "POST":
        register = RegisterUserForm(request.POST)
        if register.is_valid:
            user = register.save()
            login(request, user)
            # return redirect("") redirect to home page.
    context = {"register": register}
    return render(request, "accounts/register.html", context)

def logout_user(request):
    logout(request)
    return redirect("accounts:login_page")