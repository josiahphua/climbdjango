from django.http.response import HttpResponse
from accounts.models import User
from django.contrib.auth.forms import AuthenticationForm
from accounts.forms import RegisterUserForm
from django.shortcuts import redirect, render
from django.contrib.auth import login, authenticate, logout
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def login_user(request):
    login_form = AuthenticationForm()
    text = None
    user = User.objects.all() # << can use (pk=id) if I wanna search username can also input username
    print(user)
    if request.method == "POST":
        print(request.POST)
        login_form = AuthenticationForm(request, data=request.POST)
        # print("login form here", login_form)
        if login_form.is_valid():
            print("stupid loser")
            username = login_form.cleaned_data['username']
            print(username)
            password = login_form.cleaned_data['password']

            user = authenticate(username= username, password= password)
            
            if user is not None:
                print("how about here?")
                login(request, user)
                text = "this is the text when user logs in create a redirect page."
                return HttpResponse(text)
            else:
                print("here leh?")
                text = "lol never log in"
                return HttpResponse(text)
    # context = {"login_form": login_form}
    # return HttpResponse("you got here loser")
    context = {"login_form": login_form}
    return render(request, "accounts/login.html", context)

def register_user(request):
    register = RegisterUserForm()
    if request.method == "POST":
        register = RegisterUserForm(request.POST)
        if register.is_valid():
            user = register.save()
            print("this is user", user)
            login(request, user)
            # return redirect("") redirect to home page.
    context = {"register": register}
    return render(request, "accounts/register.html", context)

def logout_user(request):
    logout(request)
    # return redirect("accounts:login_page")