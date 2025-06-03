from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("order_id", "name", "price", "quantity")
    list_filter = ("order_id",)  # ✅ Allows filtering by checkout sessions
    search_fields = ("order_id", "name")  # ✅ Search by order ID or name
