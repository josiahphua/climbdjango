from django.urls.conf import path
from . import views

app_name = "accounts"

urlpatterns = [
    path("login/", views.login_user, name="login_page"),
    path("register/", views.register_user, name="login_page")
]
