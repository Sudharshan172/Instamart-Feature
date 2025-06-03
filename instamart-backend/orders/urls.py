from django.urls import path
from . import views  # Import all views from orders/views.py

urlpatterns = [
    path("", views.homepage, name="homepage"),  # Homepage route
    path("checkout/", views.checkout, name="checkout"),  # Checkout API
]

