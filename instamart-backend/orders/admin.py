from django.contrib import admin
from .models import Order

# Customize the Django admin branding
admin.site.site_header = "Instamart Administrator"
admin.site.site_title = "Instamart Admin Portal"
admin.site.index_title = "Welcome to Instamart Admin"

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("order_id", "name", "price", "quantity")
    list_filter = ("order_id",) 
    search_fields = ("order_id", "name")  
