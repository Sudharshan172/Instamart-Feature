from django.db import models
import uuid  

class Order(models.Model):
    order_id = models.UUIDField(default=uuid.uuid4, editable=False, blank=True)  # ✅ Remove unique=True for now
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"Order {self.order_id} - {self.name} - Qty: {self.quantity}"
