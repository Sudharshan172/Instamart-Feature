import uuid  
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Order

def homepage(request):
    return HttpResponse("<h1>Welcome to Instamart Backend</h1>")

@csrf_exempt
def checkout(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            order_id = uuid.uuid4()  # ✅ Generates a new unique order ID per checkout

            # Validate request data
            if not isinstance(data, dict) or "cartItems" not in data or "totalPrice" not in data:
                return JsonResponse({"error": "Invalid request format"}, status=400)

            orders = []  # To store created orders
            
            for item in data.get("cartItems", []):  # Use `.get()` for safer access
                order = Order.objects.create(
                    order_id=order_id,  # ✅ Group items in one checkout session
                    name=item.get("name", "Unknown Item"),  
                    price=item.get("price", 0),
                    quantity=item.get("quantity", 1),
                )
                orders.append({
                    "order_id": str(order.order_id),
                    "name": order.name,
                    "price": order.price,
                    "quantity": order.quantity,
                })

            return JsonResponse({"message": "Order placed successfully!", "orders": orders}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=400)
