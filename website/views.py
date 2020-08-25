from datetime import datetime, timedelta
from django.shortcuts import render, get_object_or_404
from .models import Product
# Create your views here.

def index(request):
    products = Product.objects.filter(title__contains="slider")
    noviteti = Product.objects.filter(date_added__gte=datetime.today() - timedelta(days=90))
    print(products)
    return render(request, 'website/home.html', {
        'images': products,
        'noviteti': noviteti
    })
